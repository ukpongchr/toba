import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  deleteDoc, 
  query, 
  where 
} from 'firebase/firestore';

// Load Firebase Config
const CONFIG_PATH = path.resolve('firebase-applet-config.json');
let firebaseConfig: any;
try {
  firebaseConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
} catch (error) {
  console.error("Failed to load firebase-applet-config.json", error);
  throw error;
}

const app = initializeApp(firebaseConfig);
export const fstore = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export class FirestoreDatabase {
  private async getNextId(collectionName: string): Promise<number> {
    try {
      const q = collection(fstore, collectionName);
      const snapshot = await getDocs(q);
      const ids = snapshot.docs.map(doc => Number(doc.data().id || 0));
      if (ids.length === 0) return 1;
      return Math.max(...ids) + 1;
    } catch (err) {
      console.error(`Error getting next ID for ${collectionName}:`, err);
      return 1;
    }
  }

  public async seedDefaultAdmin() {
    try {
      const usersRef = collection(fstore, 'users');
      const snapshot = await getDocs(usersRef);
      if (snapshot.empty) {
        console.log("Seeding default admin inside Firestore users collection...");
        const hashedPassword = bcrypt.hashSync('admin123', 10);
        await setDoc(doc(fstore, 'users', 'admin'), {
          id: 1,
          username: 'admin',
          password: hashedPassword,
          created_at: new Date().toISOString()
        });
        console.log("Default admin seeded successfully.");
      }
    } catch (err) {
      console.error("Error seeding default admin:", err);
    }
  }

  public async getUserByUsername(username: string): Promise<any | null> {
    try {
      if (!username) return null;
      const q = query(collection(fstore, 'users'), where('username', '==', username));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      return snapshot.docs[0].data();
    } catch (err) {
      console.error("Error getting user by username:", err);
      return null;
    }
  }

  public async getPostBySlug(slug: string): Promise<any | null> {
    try {
      if (!slug) return null;
      const q = query(collection(fstore, 'posts'), where('slug', '==', slug));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      return snapshot.docs[0].data();
    } catch (err) {
      console.error("Error getting post by slug:", err);
      return null;
    }
  }

  public async getMediaById(id: number): Promise<any | null> {
    try {
      const q = query(collection(fstore, 'media'), where('id', '==', Number(id)));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      return snapshot.docs[0].data();
    } catch (err) {
      console.error("Error getting media by id:", err);
      return null;
    }
  }

  public async getAllPosts(): Promise<any[]> {
    try {
      const q = collection(fstore, 'posts');
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map(doc => doc.data());
      results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      return results;
    } catch (err) {
      console.error("Error getting all posts:", err);
      return [];
    }
  }

  public async insertUser(username: string, passwordHash: string): Promise<number> {
    const id = await this.getNextId('users');
    const userDocRef = doc(fstore, 'users', username.toLowerCase());
    await setDoc(userDocRef, {
      id,
      username,
      password: passwordHash,
      created_at: new Date().toISOString()
    });
    return id;
  }

  public async insertPost(post: { title: string; slug: string; content: string; excerpt: string; image: string | null; published: number }): Promise<number> {
    const id = await this.getNextId('posts');
    const postDocRef = doc(fstore, 'posts', String(id));
    await setDoc(postDocRef, {
      id,
      ...post,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
    return id;
  }

  public async updatePost(id: number, updates: any): Promise<void> {
    const postDocRef = doc(fstore, 'posts', String(id));
    await setDoc(postDocRef, {
      ...updates,
      updated_at: new Date().toISOString()
    }, { merge: true });
  }

  public async deletePost(id: number): Promise<void> {
    const postDocRef = doc(fstore, 'posts', String(id));
    await deleteDoc(postDocRef);
  }

  public async insertMedia(filename: string, url: string, mimetype: string): Promise<number> {
    const id = await this.getNextId('media');
    const mediaDocRef = doc(fstore, 'media', String(id));
    await setDoc(mediaDocRef, {
      id,
      filename,
      url,
      mimetype,
      created_at: new Date().toISOString()
    });
    return id;
  }
}

const db = new FirestoreDatabase();
db.seedDefaultAdmin();
export default db;
