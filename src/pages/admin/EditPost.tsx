import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReactMarkdown from 'react-markdown';
import { Save, Eye, X } from 'lucide-react';

interface Post {
  id?: number;
  title: string;
  slug?: string;
  content: string;
  excerpt: string;
  image: string;
  published: boolean;
}

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>({
    title: '',
    content: '',
    excerpt: '',
    image: '',
    published: false,
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching post:', err);
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = id ? `/api/posts/${id}` : '/api/posts';
    const method = id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (res.ok) {
        navigate('/admin/dashboard');
      } else {
        alert('Failed to save post');
      }
    } catch (err) {
      console.error('Error saving post:', err);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>{id ? 'Edit Post' : 'New Post'} | Admin Dashboard</title>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">{id ? 'Edit Post' : 'New Post'}</h1>
            <div className="flex gap-4">
              <button 
                type="button" 
                onClick={() => setPreview(!preview)} 
                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                {preview ? <X className="w-4 h-4" /> : <Eye className="w-4 h-4" />} {preview ? 'Close Preview' : 'Preview'}
              </button>
              <button 
                type="submit" 
                form="post-form" 
                disabled={loading}
                className="bg-teal-accent text-[#051126] font-bold py-2 px-4 rounded hover:bg-teal-accent/90 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" /> {loading ? 'Saving...' : 'Save Post'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form id="post-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={post.title}
                  onChange={handleChange}
                  className="w-full bg-[#0a1930] border border-white/10 rounded p-3 focus:border-teal-accent focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={post.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-[#0a1930] border border-white/10 rounded p-3 focus:border-teal-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Featured Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={post.image}
                  onChange={handleChange}
                  className="w-full bg-[#0a1930] border border-white/10 rounded p-3 focus:border-teal-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
                <textarea
                  name="content"
                  value={post.content}
                  onChange={handleChange}
                  rows={15}
                  className="w-full bg-[#0a1930] border border-white/10 rounded p-3 focus:border-teal-accent focus:outline-none font-mono text-sm"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="published"
                  id="published"
                  checked={post.published}
                  onChange={(e) => setPost(prev => ({ ...prev, published: e.target.checked }))}
                  className="w-4 h-4 accent-teal-accent"
                />
                <label htmlFor="published" className="text-sm font-medium">Published</label>
              </div>
            </form>

            {preview && (
              <div className="bg-[#0a1930] p-8 rounded-sm border border-white/5 overflow-y-auto max-h-[80vh]">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                {post.image && (
                  <img src={post.image} alt="Preview" className="w-full h-48 object-cover rounded mb-6" />
                )}
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EditPost;
