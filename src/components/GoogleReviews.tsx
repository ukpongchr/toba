import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Jean-Pierre Dubois",
      date: "2 months ago",
      rating: 5,
      text: "Toba is an exceptional videographer. He captured our corporate event in Geneva with such professionalism and creativity. The final video was delivered quickly and exceeded our expectations.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100" 
    },
    {
      name: "Sarah Miller",
      date: "4 months ago",
      rating: 5,
      text: "Working with Toba was a pleasure. He understood our vision for the NGO documentary perfectly. His ability to tell a story through visuals is unmatched in Geneva.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Michael Weber",
      date: "1 month ago",
      rating: 5,
      text: "Highly recommended! We hired Toba for a conference at the UN, and the quality of the footage was broadcast-ready. He is discreet, efficient, and very easy to work with.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Elena Rodriguez",
      date: "3 weeks ago",
      rating: 5,
      text: "The best videographer in Geneva! Toba produced a promotional video for our new product launch. The attention to detail and color grading were fantastic.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "David Smith",
      date: "5 months ago",
      rating: 5,
      text: "Professional, reliable, and talented. Toba has a great eye for composition and lighting. He made our team feel comfortable during the interviews.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    }
  ];

  return (
    <section className="bg-[#051126] py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google" 
            className="w-8 h-8 bg-white rounded-full p-1"
          />
          <div>
            <h3 className="text-white font-bold text-lg leading-none">Google Reviews</h3>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-white text-xs font-bold">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <a 
          href="https://maps.app.goo.gl/7YCSkp7ZoVm4UPL66?g_st=aw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-outline text-xs py-2 px-4"
        >
          Write a Review
        </a>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-gradient">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#051126] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#051126] to-transparent z-10" />
        
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[350px] bg-[#0a1930] p-6 rounded-sm border border-white/5 shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <span className="text-gray-500 text-xs">{review.date}</span>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-4 h-4 ml-auto opacity-50"
                />
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
