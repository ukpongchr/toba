import express from "express";
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

declare global {
  namespace Express {
    interface Request {
      user?: any;
      file?: any;
    }
  }
}

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

const app = express();

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

  // Strip tracking parameters like '?i=...' to prevent duplicate content issues in SEO
  app.use((req, res, next) => {
    if (req.query.i !== undefined) {
      const queryParams = { ...req.query };
      delete queryParams.i;
      
      const queryString = new URLSearchParams(queryParams as any).toString();
      const newUrl = req.path + (queryString ? `?${queryString}` : '');
      
      return res.redirect(301, newUrl);
    }
    next();
  });

  // Request Logging Middleware (Disabled for performance)
  // app.use((req, res, next) => {
  //   const logLine = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  //   fs.appendFileSync(path.join(process.cwd(), "request_logs.txt"), logLine);
  //   next();
  // });

  // Serve static files from public directory
  app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

  // Handle HEAD requests for WordPress compatibility
  app.head("/wp-json", (req, res) => {
    res.status(200).end();
  });

  // 301 Redirects for old URLs
  app.get("/shigotoba", (req, res) => {
    res.redirect(301, "/about");
  });
  app.get("/products/*", (req, res) => {
    res.redirect(301, "/services");
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
  const basicAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.setHeader("WWW-Authenticate", 'Basic realm="WordRocket Integration"');
      return res.status(401).json({ message: "Authentication required" });
    }

    const auth = Buffer.from(authHeader.split(" ")[1], "base64").toString().split(":");
    const username = auth[0];
    const password = auth[1];

    const user = await db.getUserByUsername(username);

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
  app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for username: ${username}`);
    
    const user = await db.getUserByUsername(username);

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
  app.get("/api/posts", async (req, res) => {
    const posts = await db.getAllPosts();
    res.json(posts);
  });

  app.get("/api/posts/:slug", async (req, res) => {
    const post = await db.getPostBySlug(req.params.slug);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  });

  app.post("/api/posts", authenticateToken, async (req, res) => {
    const { title, content, excerpt, image, published } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    try {
      const postId = await db.insertPost({
        title,
        slug,
        content,
        excerpt,
        image,
        published: published ? 1 : 0
      });
      res.status(201).json({ id: postId, slug });
    } catch (err: any) {
      res.status(500).json({ message: "Error creating post", error: err.message });
    }
  });

  app.put("/api/posts/:id", authenticateToken, async (req, res) => {
    const { title, content, excerpt, image, published } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    try {
      await db.updatePost(Number(req.params.id), {
        title,
        slug,
        content,
        excerpt,
        image,
        published: published ? 1 : 0
      });
      res.json({ message: "Post updated successfully" });
    } catch (err: any) {
      res.status(500).json({ message: "Error updating post", error: err.message });
    }
  });

  app.delete("/api/posts/:id", authenticateToken, async (req, res) => {
    try {
      await db.deletePost(Number(req.params.id));
      res.json({ message: "Post deleted successfully" });
    } catch (err: any) {
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
  app.post("/wp-json/wp/v2/posts", basicAuth, async (req, res) => {
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
        const media = await db.getMediaById(featured_media);
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
      const postId = await db.insertPost({
        title: titleText,
        slug,
        content: contentText,
        excerpt: excerptText,
        image,
        published
      });
      
      const protocol = req.headers["x-forwarded-proto"] || "http";
      const host = req.headers.host;
      const baseUrl = process.env.APP_URL || `${protocol}://${host}`;

      res.status(201).json({
        id: postId,
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
    } catch (err: any) {
      console.error("WP API Error:", err);
      res.status(500).json({ code: "internal_server_error", message: err.message, data: { status: 500 } });
    }
  });

  // 4. Media Upload Endpoint
  app.post("/wp-json/wp/v2/media", basicAuth, upload.single("file"), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ code: "rest_upload_no_content", message: "No content provided.", data: { status: 400 } });
    }

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    try {
      const mediaId = await db.insertMedia(req.file.filename, fileUrl, req.file.mimetype);
      
      res.status(201).json({
        id: mediaId,
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
    } catch (err: any) {
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

  // Handle Static Files & Client-Side Routing Fallback based on environment or dist folder presence
  const distPath = path.join(process.cwd(), "dist");
  const isProd = process.env.NODE_ENV === "production" || fs.existsSync(distPath);

  if (isProd) {
    // Serve static compiled assets
    app.use(express.static(distPath));
    
    // Handle all other routing by falling back to index.html (SPA client-side router handles this)
    app.get("*", (req, res, next) => {
      if (
        req.path.startsWith("/api") ||
        req.path.startsWith("/uploads") ||
        req.path.startsWith("/wp-json")
      ) {
        return next();
      }
      res.sendFile(path.join(distPath, "index.html"));
    });

    // Start production server if not inside Vercel
    if (!process.env.VERCEL) {
      const PORT = 3000;
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`Production server running on http://localhost:${PORT}`);
      });
    }
  } else {
    // Vite middleware for development (only run if not inside Vercel environment)
    if (!process.env.VERCEL) {
      const PORT = 3000;
      const startDevServer = async () => {
        const { createServer: createViteServer } = await import("vite");
        const vite = await createViteServer({
          server: { middlewareMode: true },
          appType: "spa",
        });
        app.use(vite.middlewares);
        
        app.listen(PORT, "0.0.0.0", () => {
          console.log(`Development server running on http://localhost:${PORT}`);
        });
      };
      startDevServer();
    }
  }

export default app;
