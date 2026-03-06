import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        navigate('/admin/dashboard');
      } else {
        const data = await res.json();
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Toba Oduwaiye</title>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="bg-[#0a1930] p-8 rounded-sm border border-white/5 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            {error && <div className="bg-red-500/10 text-red-500 p-3 rounded mb-4 text-sm">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#051126] border border-white/10 rounded p-2 focus:border-teal-accent focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#051126] border border-white/10 rounded p-2 focus:border-teal-accent focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-accent text-[#051126] font-bold py-2 rounded hover:bg-teal-accent/90 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Login;
