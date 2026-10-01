// API Configuration for Dev/Production environments
// In local development or full-stack environments (like Cloud Run), we use relative paths.
// If the frontend is hosted on a separate static host (like Hostinger, Vercel, Netlify),
// we can specify the backend URL in the VITE_API_URL environment variable.

export const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || "";
