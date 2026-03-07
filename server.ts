import express from "express";
import { createServer as createViteServer } from "vite";
import compression from "compression";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import slugify from "slugify";
import db from "./server/db.js";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable gzip compression
  app.use(compression());
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
  }));

  // Request Logging Middleware
  app.use((req, res, next) => {
    const logLine = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFileSync(path.join(process.cwd(), "request_logs.txt"), logLine);
    next();
  });

  // Serve static files from public directory
  app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

  // Handle HEAD requests for WordPress compatibility
  app.head("/wp-json", (req, res) => {
    res.status(200).end();
  });

  // Authentication Middleware
  const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  // Basic Auth Middleware for WordPress API Compatibility
  const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.setHeader("WWW-Authenticate", 'Basic realm="WordRocket Integration"');
      return res.status(401).json({ message: "Authentication required" });
    }

    const auth = Buffer.from(authHeader.split(" ")[1], "base64").toString().split(":");
    const username = auth[0];
    const password = auth[1];

    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      req.user = user;
      next();
    } else {
      res.setHeader("WWW-Authenticate", 'Basic realm="WordRocket Integration"');
      return res.status(401).json({ message: "Invalid credentials" });
    }
  };

  // API Routes

  // Auth Routes
  app.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for username: ${username}`);
    
    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username);

    if (!user) {
      console.log(`User not found: ${username}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      console.log(`Invalid password for user: ${username}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });
    
    // Set cookie with settings required for iframe/preview environment
    res.cookie("token", token, { 
      httpOnly: true, 
      secure: true, // Required for SameSite=None
      sameSite: 'none', // Required for cross-origin iframe
      maxAge: 3600000 // 1 hour
    });
    
    console.log(`Login successful for user: ${username}`);
    res.json({ message: "Logged in successfully", user: { id: user.id, username: user.username } });
  });

  app.post("/api/auth/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  });

  app.get("/api/auth/me", authenticateToken, (req, res) => {
    res.json({ user: req.user });
  });

  // Blog Post Routes
  app.get("/api/posts", (req, res) => {
    const posts = db.prepare("SELECT * FROM posts ORDER BY created_at DESC").all();
    res.json(posts);
  });

  app.get("/api/posts/:slug", (req, res) => {
    const post = db.prepare("SELECT * FROM posts WHERE slug = ?").get(req.params.slug);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  });

  app.post("/api/posts", authenticateToken, (req, res) => {
    const { title, content, excerpt, image, published } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    try {
      const stmt = db.prepare(
        "INSERT INTO posts (title, slug, content, excerpt, image, published) VALUES (?, ?, ?, ?, ?, ?)"
      );
      const info = stmt.run(title, slug, content, excerpt, image, published ? 1 : 0);
      res.status(201).json({ id: info.lastInsertRowid, slug });
    } catch (err) {
      res.status(500).json({ message: "Error creating post", error: err.message });
    }
  });

  app.put("/api/posts/:id", authenticateToken, (req, res) => {
    const { title, content, excerpt, image, published } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    try {
      const stmt = db.prepare(
        "UPDATE posts SET title = ?, slug = ?, content = ?, excerpt = ?, image = ?, published = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
      );
      stmt.run(title, slug, content, excerpt, image, published ? 1 : 0, req.params.id);
      res.json({ message: "Post updated successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error updating post", error: err.message });
    }
  });

  app.delete("/api/posts/:id", authenticateToken, (req, res) => {
    try {
      const stmt = db.prepare("DELETE FROM posts WHERE id = ?");
      stmt.run(req.params.id);
      res.json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting post", error: err.message });
    }
  });

  // WordPress Compatibility Layer (for WordRocket Integration)
  
  // 1. Root Endpoint - Identifies as WordPress
  app.get("/wp-json", (req, res) => {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;

    res.json({
      name: "Toba Oduwaiye Blog",
      description: "Videography & Photography Blog",
      url: baseUrl,
      home: baseUrl,
      namespaces: ["wp/v2"],
      authentication: {
        application_passwords: {
          endpoints: {
            authorization: `${baseUrl}/wp-admin/authorize-application-password.php`
          }
        }
      },
      routes: {
        "/": {
          namespace: "",
          methods: ["GET"],
          endpoints: [{ methods: ["GET"], args: { context: { default: "view", required: false } } }]
        },
        "/wp/v2/posts": {
          namespace: "wp/v2",
          methods: ["GET", "POST"],
          endpoints: [
            { methods: ["GET"], args: { context: { default: "view", required: false } } },
            { methods: ["POST"], args: { context: { default: "view", required: false } } }
          ]
        },
        "/wp/v2/media": {
          namespace: "wp/v2",
          methods: ["GET", "POST"],
          endpoints: [
            { methods: ["GET"], args: { context: { default: "view", required: false } } },
            { methods: ["POST"], args: { context: { default: "view", required: false } } }
          ]
        },
        "/wp/v2/users/me": {
          namespace: "wp/v2",
          methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
          endpoints: [{ methods: ["GET"], args: { context: { default: "view", required: false } } }]
        }
      }
    });
  });

  // 2. Verify User Endpoint
  app.get("/wp-json/wp/v2/users/me", basicAuth, (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.username,
      slug: req.user.username,
      roles: ["administrator"],
      capabilities: { publish_posts: true, edit_posts: true, delete_posts: true }
    });
  });

  // 3. Create Post Endpoint
  app.post("/wp-json/wp/v2/posts", basicAuth, (req, res) => {
    const { title, content, excerpt, status, featured_media } = req.body;
    
    // Handle title/content as objects (WP standard) or strings
    const titleText = typeof title === 'object' ? title.rendered || title.raw : title;
    const contentText = typeof content === 'object' ? content.rendered || content.raw : content;
    const excerptText = typeof excerpt === 'object' ? excerpt.rendered || excerpt.raw : excerpt;
    
    const slug = slugify(titleText, { lower: true, strict: true });
    const published = status === 'publish' ? 1 : 0;
    
    // Try to find image URL if featured_media is provided
    let image = null;
    if (featured_media) {
      // If it's a number (ID), look it up in our media table
      if (typeof featured_media === 'number') {
        const media = db.prepare("SELECT url FROM media WHERE id = ?").get(featured_media);
        if (media) {
          image = media.url;
        }
      }
      // If it's a URL string, use it directly
      else if (typeof featured_media === 'string' && featured_media.startsWith('http')) {
        image = featured_media;
      } 
      // Fallback: check if content has an image and use the first one as featured
      else {
        const imgMatch = contentText.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
          image = imgMatch[1];
        }
      }
    }

    try {
      const stmt = db.prepare(
        "INSERT INTO posts (title, slug, content, excerpt, image, published) VALUES (?, ?, ?, ?, ?, ?)"
      );
      const info = stmt.run(titleText, slug, contentText, excerptText, image, published);
      
      const protocol = req.headers["x-forwarded-proto"] || "http";
      const host = req.headers.host;
      const baseUrl = process.env.APP_URL || `${protocol}://${host}`;

      res.status(201).json({
        id: info.lastInsertRowid,
        date: new Date().toISOString(),
        date_gmt: new Date().toISOString(),
        guid: { rendered: `${baseUrl}/blog/${slug}` },
        modified: new Date().toISOString(),
        modified_gmt: new Date().toISOString(),
        slug: slug,
        status: status || 'draft',
        type: "post",
        link: `${baseUrl}/blog/${slug}`,
        title: { rendered: titleText },
        content: { rendered: contentText, protected: false },
        excerpt: { rendered: excerptText, protected: false },
        author: req.user.id,
        featured_media: featured_media || 0,
        comment_status: "open",
        ping_status: "open",
        sticky: false,
        template: "",
        format: "standard",
        meta: [],
        categories: [],
        tags: []
      });
    } catch (err) {
      console.error("WP API Error:", err);
      res.status(500).json({ code: "internal_server_error", message: err.message, data: { status: 500 } });
    }
  });

  // 4. Media Upload Endpoint
  app.post("/wp-json/wp/v2/media", basicAuth, upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ code: "rest_upload_no_content", message: "No content provided.", data: { status: 400 } });
    }

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    try {
      const stmt = db.prepare("INSERT INTO media (filename, url, mimetype) VALUES (?, ?, ?)");
      const info = stmt.run(req.file.filename, fileUrl, req.file.mimetype);
      
      res.status(201).json({
        id: info.lastInsertRowid,
        date: new Date().toISOString(),
        date_gmt: new Date().toISOString(),
        guid: { rendered: fileUrl },
        modified: new Date().toISOString(),
        modified_gmt: new Date().toISOString(),
        slug: req.file.filename,
        status: "inherit",
        type: "attachment",
        link: fileUrl,
        title: { rendered: req.file.originalname },
        author: req.user.id,
        comment_status: "open",
        ping_status: "closed",
        template: "",
        meta: [],
        description: { rendered: "" },
        caption: { rendered: "" },
        alt_text: "",
        media_type: "image",
        mime_type: req.file.mimetype,
        media_details: {
          width: 800, // Mock dimensions
          height: 600,
          file: req.file.filename,
          sizes: {}
        },
        post: null,
        source_url: fileUrl
      });
    } catch (err) {
      console.error("WP Media Error:", err);
      res.status(500).json({ code: "internal_server_error", message: err.message, data: { status: 500 } });
    }
  });

  // 5. Categories Endpoint (Mock)
  app.get("/wp-json/wp/v2/categories", (req, res) => {
    res.json([
      {
        id: 1,
        count: 1,
        description: "Uncategorized",
        link: "http://localhost:3000/category/uncategorized",
        name: "Uncategorized",
        slug: "uncategorized",
        taxonomy: "category",
        parent: 0,
        meta: [],
      }
    ]);
  });

  // 6. Tags Endpoint (Mock)
  app.get("/wp-json/wp/v2/tags", (req, res) => {
    res.json([]);
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving would go here
    // For this environment, we primarily focus on the dev setup with compression enabled
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
