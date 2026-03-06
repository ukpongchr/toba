import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import { Calendar, ArrowLeft } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching post:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center py-20 bg-[#051126] text-white min-h-screen">Loading...</div>;
  if (!post) return <div className="text-center py-20 bg-[#051126] text-white min-h-screen">Post not found</div>;

  return (
    <>
      <Helmet>
        <title>{post.title} | Toba Oduwaiye</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <article className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-accent" />
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <span>•</span>
            <span>By Toba Oduwaiye</span>
          </div>

          {post.image && (
            <div className="aspect-video rounded-sm overflow-hidden mb-12">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-teal-accent prose-img:rounded-sm">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
