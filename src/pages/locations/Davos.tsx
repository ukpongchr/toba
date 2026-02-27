import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Davos = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toba Oduwaiye - Corporate Videographer Davos",
    "description": "Professional video production services in Davos for WEF, conferences, and high-level interviews.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Davos",
      "addressCountry": "CH"
    },
    "areaServed": "Davos"
  };

  return (
    <>
      <Helmet>
        <title>Davos Videographer | WEF & Summit Video Production</title>
        <meta name="description" content="Premium videography services in Davos for the World Economic Forum (WEF) and high-level summits. Discreet, professional coverage for global leaders." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              VIDEOGRAPHY SERVICES IN DAVOS
            </h4>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Event Videographer in <span className="text-teal-accent">Davos</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              Specialized video production for the World Economic Forum (WEF) and high-level summits in Davos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Davos is the global stage for economic and political leadership. As a professional videographer with extensive experience covering the World Economic Forum, I understand the unique logistics, security protocols, and fast-paced environment of Davos.
              </p>
              <p>
                From capturing exclusive interviews at the Congress Centre to producing daily highlight reels for corporate delegations, I provide reliable, high-quality coverage that meets the demands of global media and executive communications.
              </p>
              <p>
                Whether you need a dedicated camera crew for WEF week, coverage of side events, or post-event content creation, I offer discreet, professional service tailored to VIPs and C-suite executives.
              </p>
              <div className="pt-4">
                <a href="/contact" className="btn-primary">Get a Quote for Davos</a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative group">
               <img 
                src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop" 
                alt="Filming in Davos" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-display font-bold text-xl">DAVOS PRODUCTION</span>
              </div>
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Davos;
