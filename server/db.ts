import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const FILE_PATH = process.env.VERCEL 
  ? path.join('/tmp', 'data.json') 
  : path.resolve('data.json');

interface DBState {
  users: any[];
  posts: any[];
  media: any[];
}

class Database {
  private state: DBState;

  constructor() {
    this.state = this.load();
  }

  private load(): DBState {
    try {
      if (fs.existsSync(FILE_PATH)) {
        const content = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(content);
      }
    } catch (error) {
      console.error('Error loading DB file:', error);
    }

    const state: DBState = {
      users: [],
      posts: [],
      media: []
    };

    // Seed default admin user
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    state.users.push({
      id: 1,
      username: 'admin',
      password: hashedPassword
    });

    this.save(state);
    return state;
  }

  private save(state: DBState) {
    try {
      fs.writeFileSync(FILE_PATH, JSON.stringify(state, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error saving DB file:', error);
    }
  }

  public getNextId(table: 'users' | 'posts' | 'media'): number {
    const items = this.state[table];
    if (items.length === 0) return 1;
    return Math.max(...items.map(item => item.id)) + 1;
  }

  public insert(table: 'users' | 'posts' | 'media', item: any) {
    this.state[table].push(item);
    this.save(this.state);
  }

  public update(table: 'users' | 'posts' | 'media', id: number, updates: any) {
    const index = this.state[table].findIndex(item => item.id === id);
    if (index !== -1) {
      this.state[table][index] = { ...this.state[table][index], ...updates };
      this.save(this.state);
    }
  }

  public delete(table: 'users' | 'posts' | 'media', id: number) {
    this.state[table] = this.state[table].filter(item => item.id !== id);
    this.save(this.state);
  }

  // SQLite API compatibility methods
  public exec(sql: string) {
    // Schema is structured automatically in JSON database
    return;
  }

  public prepare(sql: string) {
    const dbInstance = this;
    const sqlNormalized = sql.replace(/\s+/g, ' ').trim();

    return {
      get(...params: any[]): any {
        // Users SELECT username
        if (sqlNormalized.includes('FROM users') && sqlNormalized.includes('username = ?')) {
          const username = params[0];
          return dbInstance.state.users.find(u => u.username === username) || null;
        }

        // Posts SELECT slug
        if (sqlNormalized.includes('FROM posts') && sqlNormalized.includes('slug = ?')) {
          const slug = params[0];
          return dbInstance.state.posts.find(p => p.slug === slug) || null;
        }

        // Media SELECT id
        if (sqlNormalized.includes('FROM media') && sqlNormalized.includes('id = ?')) {
          const id = Number(params[0]);
          return dbInstance.state.media.find(m => m.id === id) || null;
        }

        console.warn('Unhandled GET SQL query:', sqlNormalized, params);
        return null;
      },

      all(...params: any[]): any[] {
        // Posts SELECT all
        if (sqlNormalized.includes('FROM posts')) {
          let results = [...dbInstance.state.posts];
          if (sqlNormalized.includes('ORDER BY created_at DESC')) {
            results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          }
          return results;
        }

        console.warn('Unhandled ALL SQL query:', sqlNormalized, params);
        return [];
      },

      run(...params: any[]): { lastInsertRowid: number; changes: number } {
        // Users INSERT
        if (sqlNormalized.includes('INSERT INTO users')) {
          const id = dbInstance.getNextId('users');
          const newUser = {
            id,
            username: params[0],
            password: params[1],
            created_at: new Date().toISOString()
          };
          dbInstance.insert('users', newUser);
          return { lastInsertRowid: id, changes: 1 };
        }

        // Posts INSERT
        if (sqlNormalized.includes('INSERT INTO posts')) {
          const id = dbInstance.getNextId('posts');
          const newPost = {
            id,
            title: params[0],
            slug: params[1],
            content: params[2],
            excerpt: params[3],
            image: params[4],
            published: Number(params[5]),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          dbInstance.insert('posts', newPost);
          return { lastInsertRowid: id, changes: 1 };
        }

        // Posts UPDATE
        if (sqlNormalized.includes('UPDATE posts')) {
          const id = Number(params[6]);
          dbInstance.update('posts', id, {
            title: params[0],
            slug: params[1],
            content: params[2],
            excerpt: params[3],
            image: params[4],
            published: Number(params[5]),
            updated_at: new Date().toISOString()
          });
          return { lastInsertRowid: id, changes: 1 };
        }

        // Posts DELETE
        if (sqlNormalized.includes('DELETE FROM posts') && sqlNormalized.includes('id = ?')) {
          const id = Number(params[0]);
          dbInstance.delete('posts', id);
          return { lastInsertRowid: id, changes: 1 };
        }

        // Media INSERT
        if (sqlNormalized.includes('INSERT INTO media')) {
          const id = dbInstance.getNextId('media');
          const newMedia = {
            id,
            filename: params[0],
            url: params[1],
            mimetype: params[2],
            created_at: new Date().toISOString()
          };
          dbInstance.insert('media', newMedia);
          return { lastInsertRowid: id, changes: 1 };
        }

        console.warn('Unhandled RUN SQL query:', sqlNormalized, params);
        return { lastInsertRowid: 0, changes: 0 };
      }
    };
  }
}

const db = new Database();
export default db;
