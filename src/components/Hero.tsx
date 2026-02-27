import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const logos = ['Al Jazeera', 'Bloomberg', 'The World Bank', 'Gavi', 'UNOPS', 'Deloitte', 'ATScale'];
  
  return (
    <section className="bg-[#051126] pt-12 pb-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-800 relative group">
               <img 
                src="https://i.imgur.com/jJwZq2Q.png" 
                alt="Toba Oduwaiye" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 scale-x-[-1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-20" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              Professional Videographer in Geneva, Switzerland
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-4 md:mb-6 text-white">
              <span>Corporate Videographer</span><br/>
              in <span className="text-teal-accent">Geneva, Switzerland</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed">
              Broadcast-quality video production trusted by UN agencies, NGOs, embassies, and global organizations. Based in Geneva. Available across Switzerland and internationally.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <Link to="/contact" className="btn-primary">Request a Quote</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold text-teal-accent mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold text-teal-accent mb-1">12</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Countries</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold text-teal-accent mb-1">24h</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Preview Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos Marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-24 pt-12 border-t border-white/5 overflow-hidden relative"
        >
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-600 mb-8">Trusted by Global Organisations</p>
          
          <div className="flex relative w-full overflow-hidden mask-linear-gradient">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#051126] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#051126] to-transparent z-10" />
            
            <motion.div 
              className="flex gap-16 items-center whitespace-nowrap pr-16"
              animate={{ x: "-50%" }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 30 
              }}
              style={{ width: "max-content" }}
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="h-12 w-32 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold shrink-0 opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform cursor-default">
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
