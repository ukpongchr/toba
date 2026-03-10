import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Helmet>
        <title>Blog | Toba Oduwaiye - Videographer & Photographer</title>
        <link rel="canonical" href="https://oduwaiye.com/blog" />
        <meta name="description" content="Insights on videography, photography, brand storytelling, and video production solutions." />
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Blog & <span className="text-teal-accent">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Expertise in videography, photography, video editing, and brand storytelling.
          </p>

          {loading ? (
            <div className="text-center py-20">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group block bg-[#0a1930] rounded-sm overflow-hidden border border-white/5 hover:border-teal-accent/50 transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image || 'https://picsum.photos/seed/blog/800/600'} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-teal-accent mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-teal-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-teal-accent transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
