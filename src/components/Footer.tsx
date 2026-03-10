import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020a1a] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-teal-accent/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold tracking-tight text-white">
                TOBA<span className="text-teal-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premium video production for NGOs, UN agencies, and global organizations in Geneva and across Switzerland. Delivering broadcast-quality stories with impact.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/tobaoduwaiye/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-accent hover:text-[#020a1a] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@tobaoduwaiye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-accent hover:text-[#020a1a] transition-all duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-accent hover:text-[#020a1a] transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="text-white font-display font-bold text-sm mb-6 uppercase tracking-wider">Specialties</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services/ngo-videographer-geneva" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> NGO & UN Videographer</Link></li>
              <li><Link to="/services/conference-filming-geneva" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Conference Filming</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Corporate Video</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Documentary</Link></li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h5 className="text-white font-display font-bold text-sm mb-6 uppercase tracking-wider">Locations</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/locations/lausanne" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Lausanne</Link></li>
              <li><Link to="/locations/zurich" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Zurich</Link></li>
              <li><Link to="/locations/davos" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Davos</Link></li>
              <li><Link to="/locations/basel" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Basel</Link></li>
              <li><Link to="/locations/bern" className="hover:text-teal-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-teal-accent/50"></span> Bern</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-white font-display font-bold text-sm mb-6 uppercase tracking-wider">Contact</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-accent shrink-0 mt-0.5" />
                <span>Geneva, Switzerland<br/>Available Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-accent shrink-0" />
                <a href="mailto:toba@tobaoduwaiye.com" className="hover:text-teal-accent transition-colors">toba@tobaoduwaiye.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Toba Oduwaiye. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
