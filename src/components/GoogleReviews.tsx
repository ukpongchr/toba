import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Annie Faye Humair",
      date: "Recent",
      rating: 5,
      text: "First class video strategist... so focused on listening to my needs and expectations.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100" 
    },
    {
      name: "Nigel Ndlovu",
      date: "Recent",
      rating: 5,
      text: "Like a Michelin chef in the kitchen—Toba is with cameras. Don’t think twice.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Margaret Kafeero",
      date: "Recent",
      rating: 5,
      text: "Talent for capturing facial expressions... punctual and has such an admirable work ethic.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Saira Ahmed",
      date: "Recent",
      rating: 5,
      text: "Great working with Toba at the World Cancer Congress 2024. Very professional, respectful and personable!",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Harsh Shah",
      date: "Recent",
      rating: 5,
      text: "Our go-to camera team for anything at all in Nigeria. Very humble... and technically proficient.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Wale Olawole",
      date: "Recent",
      rating: 5,
      text: "Expertise and attention to detail exceeded my expectations. Professional, responsive, and committed.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Imoter Ugbah",
      date: "Recent",
      rating: 5,
      text: "Talent and passion for videography shine through in every frame he captures.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "omotayo oni",
      date: "Recent",
      rating: 5,
      text: "Thorough and dedicated to his work and his mentees. I recommend him for everything photography and videography.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Isaro Murenzi",
      date: "Recent",
      rating: 5,
      text: "Dependable, has a great eye, creative and overall an incredible professional to work with!",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Charles Umoinyang",
      date: "Recent",
      rating: 5,
      text: "Always fabulous. I've experienced his wonders while he was in Lagos and Abuja... should be more fabulous in Geneva.",
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
          href="https://www.google.com/maps/place/Toba+Oduwaiye/@46.1466165,6.1335925,17z/data=!3m1!4b1!4m6!3m5!1s0x478c65b7d82689c7:0xea7887bfa973d6ca!8m2!3d46.1466128!4d6.1361674!16s%2Fg%2F11v5jhfs1v?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D" 
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
