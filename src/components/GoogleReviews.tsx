import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Margaret Kafeero",
      date: "4 months ago",
      rating: 5,
      text: "Toba has a talent for capturing facial expressions and making beautiful photographs. He is punctual and has such an admirable work ethic. I highly recommend.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Annie Faye Humair",
      date: "a year ago",
      rating: 5,
      text: "Toba is the first class video strategist and event videographer I have ever met!! He covered my son’s first Holy Communion in Switzerland and was so focused on listening to my needs and my expectations before the event.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Saira Ahmed",
      date: "a year ago",
      rating: 5,
      text: "It was great working with Toba at the World Cancer Congress 2024. He is very professional, resepctful and personable! And the videos he produced are high quality.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Wale Olawole",
      date: "2 years ago",
      rating: 5,
      text: "I had an incredible experience working with Toba Oduwaiye. His expertise and attention to detail exceeded my expectations. From the moment I reached out to inquire about his services, he was professional, responsive, and committed.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Imoter Ugbah",
      date: "2 years ago",
      rating: 5,
      text: "I had the pleasure of working with Toba Oduwaiye, and I must say, the experience was nothing short of exceptional. Toba's talent and passion for videography shine through in every frame he captures.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "omotayo oni",
      date: "2 years ago",
      rating: 5,
      text: "I contacted Toba Oduwaiye for guidance in photography when I just started learning photography and he took me through the rudiment and then advance level. He's thorough and dedicated to his work and his mentees.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Emmanuel Sorogo",
      date: "2 years ago",
      rating: 5,
      text: "Toba does excellent job. Reassured for high quality videography and always going out of his way to satisfy his clients. He’s so dependable👌",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Harsh Shah",
      date: "2 years ago",
      rating: 5,
      text: "Toba and his team are our go-to camera team for anything at all in Nigeria. Very humble and easy to work with - and technically proficient. Highly recommend!",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "isaro murenzi",
      date: "2 years ago",
      rating: 5,
      text: "Toba is dependable, has a great eye, creative and overall an incredible professional to work with! Have him on your team 📽🎬",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Charles Umoinyang",
      date: "2 years ago",
      rating: 5,
      text: "Always fabulous. I've experienced his wonders while he was in Lagos and Abuja, I can only imagine what he'll be doing in Geneva... Should be more fabulous...",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Ralia Sorogo",
      date: "2 years ago",
      rating: 5,
      text: "Had an awesome experience working with Toba. Excellent Professionalism and overall great delivery. Would recommend this business highly to anyone.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "simon bagumaho",
      date: "2 years ago",
      rating: 5,
      text: "Have had the opportunity to see Toba's work first hand and it's absolutely world class! Best in the business!",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Tobi Alasi",
      date: "2 years ago",
      rating: 5,
      text: "Toba is a genuine professional and a passionate videographer with keen attention to details.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "adebayo shofolahan",
      date: "2 years ago",
      rating: 5,
      text: "Toba has worked for me for a number of years now. Very efficient and reliable video guy.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "carolyne Bagumaho",
      date: "2 years ago",
      rating: 5,
      text: "Toba is exceptional at his work, very reliable.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "‘Deji Adeleke",
      date: "2 years ago",
      rating: 5,
      text: "You can see his attention to details in every video and photo he takes",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Nigel Ndlovu",
      date: "2 years ago",
      rating: 5,
      text: "Like a Michelin chef in the kitchen-Toba is with cameras. Don’t think twice.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Emmanuel Edim",
      date: "2 years ago",
      rating: 5,
      text: "Great cinematographer I must say. Excellent at his craft",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Jacqueline Mwanza",
      date: "2 years ago",
      rating: 5,
      text: "Made wonderful videos. High quality video Grapher. Highly recommend 👌",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "kichime gotau",
      date: "2 years ago",
      rating: 5,
      text: "This is \"a click from destination\" Kind of experience... Lovely indeed!",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Oluwafemi Alade",
      date: "2 years ago",
      rating: 5,
      text: "He is extremely creative and technically sound",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Qusai Helwani",
      date: "a year ago",
      rating: 5,
      text: "Highly reccommended... perfect service.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI-J-k-k-k-k-k-k-k-k-k-k-k-k-k-k-k=s40-c-rp-mo-br100"
    },
    {
      name: "Jude Emeka",
      date: "2 years ago",
      rating: 5,
      text: "A passionate professional videographer.",
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
          href="https://maps.app.goo.gl/kY5Yfxty47Lypq3u9" 
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
            duration: 200 
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
