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

interface ContactInquiry {
  id: string;
  name: string;
  organisation?: string;
  email: string;
  service: string;
  details: string;
  created_at: string;
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'posts' | 'contacts'>('posts');
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/backend-api/auth/me')
      .then(res => {
        if (!res.ok) {
          throw new Error('Not authenticated');
        }
        return res.json();
      })
      .then(() => {
        setAuthed(true);
        return Promise.all([
          fetch('/backend-api/posts').then(res => res.json()),
          fetch('/backend-api/contacts').then(res => res.json()).catch(() => [])
        ]);
      })
      .then(([postsData, contactsData]) => {
        if (postsData) setPosts(postsData);
        if (contactsData) setContacts(contactsData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Auth or data fetch error:', err);
        navigate('/admin/login');
      });
  }, [navigate]);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const res = await fetch(`/backend-api/posts/${id}`, {
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

  const handleDeleteContact = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact inquiry?')) {
      try {
        const res = await fetch(`/backend-api/contacts/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setContacts(contacts.filter(contact => contact.id !== id));
        } else {
          alert('Failed to delete contact inquiry');
        }
      } catch (err) {
        console.error('Error deleting contact:', err);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/backend-api/auth/logout', { method: 'POST' });
      navigate('/admin/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  if (loading || !authed) {
    return (
      <div className="bg-[#051126] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-accent mb-4"></div>
          <p className="text-gray-400">Loading admin session...</p>
        </div>
      </div>
    );
  }

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

          {/* Tab Switcher */}
          <div className="flex border-b border-white/10 mb-8">
            <button
              onClick={() => setActiveTab('posts')}
              className={`pb-4 px-6 font-bold text-sm transition-all relative ${
                activeTab === 'posts' ? 'text-teal-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              Blog Posts ({posts.length})
              {activeTab === 'posts' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-accent" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`pb-4 px-6 font-bold text-sm transition-all relative ${
                activeTab === 'contacts' ? 'text-teal-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              Quote Requests ({contacts.length})
              {activeTab === 'contacts' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-accent" />
              )}
            </button>
          </div>

          {activeTab === 'posts' ? (
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
                  {posts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-gray-400">No posts found.</td>
                    </tr>
                  ) : (
                    posts.map(post => (
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
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-[#0a1930] rounded-sm border border-white/5 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#051126] text-gray-400 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Sender</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Details</th>
                    <th className="p-4">Submitted At</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-gray-400">No quote requests submitted yet.</td>
                    </tr>
                  ) : (
                    contacts.map(contact => (
                      <tr key={contact.id} className="hover:bg-[#051126]/50 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white">{contact.name}</div>
                          {contact.organisation && <div className="text-xs text-gray-400">{contact.organisation}</div>}
                          <div className="text-xs text-teal-accent mt-1 font-mono">
                            <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-teal-500/10 text-teal-accent border border-teal-500/20 px-2.5 py-1 rounded text-xs font-bold">
                            {contact.service || 'General Enquiry'}
                          </span>
                        </td>
                        <td className="p-4 max-w-md">
                          <p className="text-gray-300 whitespace-pre-wrap">{contact.details}</p>
                        </td>
                        <td className="p-4 text-gray-400 text-xs font-mono">
                          {new Date(contact.created_at).toLocaleString()}
                        </td>
                        <td className="p-4 text-right flex justify-end items-center">
                          <button
                            onClick={() => handleDeleteContact(contact.id)}
                            className="text-red-400 hover:text-red-300 p-2 rounded hover:bg-red-500/10 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
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
