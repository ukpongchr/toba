import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Plus, Edit, Trash, LogOut } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  slug: string;
  published: boolean;
  created_at: string;
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setPosts(posts.filter(post => post.id !== id));
        } else {
          alert('Failed to delete post');
        }
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      navigate('/admin/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Toba Oduwaiye</title>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-4">
              <Link to="/admin/posts/new" className="bg-teal-accent text-[#051126] font-bold py-2 px-4 rounded hover:bg-teal-accent/90 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> New Post
              </Link>
              <button onClick={handleLogout} className="bg-red-500/10 text-red-500 font-bold py-2 px-4 rounded hover:bg-red-500/20 transition-colors flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">Loading...</div>
          ) : (
            <div className="bg-[#0a1930] rounded-sm border border-white/5 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#051126] text-gray-400 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Title</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {posts.map(post => (
                    <tr key={post.id} className="hover:bg-[#051126]/50 transition-colors">
                      <td className="p-4 font-medium">{post.title}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${post.published ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">{new Date(post.created_at).toLocaleDateString()}</td>
                      <td className="p-4 text-right flex justify-end gap-2">
                        <Link to={`/admin/posts/${post.id}/edit`} className="text-blue-400 hover:text-blue-300 p-2 rounded hover:bg-blue-500/10 transition-colors">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-300 p-2 rounded hover:bg-red-500/10 transition-colors">
                          <Trash className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
