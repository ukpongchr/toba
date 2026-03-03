import React from 'react';
import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#020a1a] text-gray-400 py-2 border-b border-white/5 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <a href="mailto:oduwaiye.toba@gmail.com" className="flex items-center gap-2 hover:text-teal-accent transition-colors">
            <Mail size={12} />
            <span>oduwaiye.toba@gmail.com</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Follow Me</span>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-accent transition-colors">
              <Linkedin size={12} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-accent transition-colors">
              <Instagram size={12} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-accent transition-colors">
              <Youtube size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
