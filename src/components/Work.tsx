import React from 'react';
import { motion } from 'motion/react';
import { Play, Clock, Share2 } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "Africa Collective — Africa Business Day",
      category: "CORPORATE EVENT FILM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      desc: "High-level event films for Africa Collective and the Swiss Africa Business Circle across Geneva, Baden, Basel, and Davos.",
      link: "https://youtu.be/80zF_R8pjz8"
    },
    {
      title: "Glander International Bunkering — Trader Talk",
      category: "CORPORATE VIDEO",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      desc: "Selected to produce an episode of Glander's Trader Talk series, filmed at their Geneva office with full post-production handled in-house.",
      link: "https://youtu.be/_B5SMOkPCYU"
    },
    {
      title: "Geneva — A Visual Love Letter",
      category: "CINEMATIC SHORT FILM",
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop",
      desc: "A personal short film capturing the energy, culture, and beauty of Geneva — from the shimmering waters of Lake Geneva to the backdrop of the Swiss Alps.",
      link: "https://youtu.be/WMoeqReF5W0"
    },
    {
      title: "Finding Rest",
      category: "DOCUMENTARY SHORT",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      desc: "A visually compelling short film exploring the journey from mental chaos to clarity, set against the Swiss Alps.",
      link: "https://youtu.be/WMoeqReF5W0"
    },
    {
      title: "Qubic — AI for Good Geneva",
      category: "EVENT HIGHLIGHT FILM",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop",
      desc: "Commissioned to film and edit Qubic's exclusive Geneva gathering during AI for Good week.",
      link: "https://youtu.be/WMoeqReF5W0"
    }
  ];

  return (
    <section id="work" className="bg-[#051126] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">MY PROJECTS</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
            Selected <span className="text-teal-accent">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-16">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index} 
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video bg-gray-900 mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-teal-accent/20 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg z-10">
                    <Play className="w-6 h-6 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 cursor-pointer backdrop-blur-sm"><Clock className="w-4 h-4"/></div>
                  <div className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 cursor-pointer backdrop-blur-sm"><Share2 className="w-4 h-4"/></div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-[10px] font-bold text-white flex items-center gap-1 backdrop-blur-sm">
                  Watch on <span className="font-bold">YouTube</span>
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-[10px] uppercase tracking-widest text-teal-accent font-bold group-hover:text-white transition-colors">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-teal-accent transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {project.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
