import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#020a1a] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-teal-accent font-display font-bold text-sm mb-4">LOCATIONS</h5>
            <ul className="space-y-2 text-[10px] uppercase tracking-widest text-gray-500">
              <li><Link to="/locations/lausanne" className="hover:text-white transition-colors">Lausanne</Link></li>
              <li><Link to="/locations/zurich" className="hover:text-white transition-colors">Zurich</Link></li>
              <li><Link to="/locations/davos" className="hover:text-white transition-colors">Davos</Link></li>
              <li><Link to="/locations/basel" className="hover:text-white transition-colors">Basel</Link></li>
              <li><Link to="/locations/bern" className="hover:text-white transition-colors">Bern</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-teal-accent font-display font-bold text-sm mb-4">SPECIALTIES</h5>
            <ul className="space-y-2 text-[10px] uppercase tracking-widest text-gray-500">
              <li><Link to="/services/ngo-videographer-geneva" className="hover:text-white transition-colors">NGO & UN Videographer</Link></li>
              <li><Link to="/services/conference-filming-geneva" className="hover:text-white transition-colors">Conference Filming</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2 flex flex-col md:items-end justify-between">
            <div className="text-teal-accent font-display font-bold text-sm mb-4 md:mb-0">Toba Oduwaiye</div>
            <div className="text-gray-600 text-[10px] uppercase tracking-widest text-right">
              Based in Geneva, Switzerland<br/>
              © {new Date().getFullYear()} Toba Oduwaiye. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
