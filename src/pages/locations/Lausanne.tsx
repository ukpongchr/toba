import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Lausanne = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toba Oduwaiye - Corporate Videographer Lausanne",
    "description": "Professional video production services in Lausanne for international federations, corporate events, and institutional storytelling.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lausanne",
      "addressCountry": "CH"
    },
    "areaServed": "Lausanne"
  };

  return (
    <>
      <Helmet>
        <title>Corporate Videographer Lausanne | Event & Brand Video Production</title>
        <link rel="canonical" href="https://oduwaiye.com/locations/lausanne" />
        <meta name="description" content="Professional videographer in Lausanne for international federations, corporate events, and brand storytelling. Broadcast-quality video production in Vaud." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              VIDEOGRAPHY SERVICES IN VAUD
            </h4>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Corporate Videographer in <span className="text-teal-accent">Lausanne</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              Delivering broadcast-quality video production for international federations, academic institutions, and corporations based in the Olympic Capital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Lausanne is a global hub for international sport, education, and innovation. As a professional videographer serving the Vaud region, I understand the specific communication needs of organizations operating in this dynamic environment.
              </p>
              <p>
                From capturing high-level conferences at the SwissTech Convention Center to producing documentary-style content for international sports federations, I bring over 20 years of experience to every project. My approach combines journalistic integrity with cinematic aesthetics, ensuring your message resonates with a global audience.
              </p>
              <p>
                Whether you need coverage for a summit at EPFL, an interview series at the Olympic Museum, or a corporate film for your headquarters in Lausanne, I provide full-service production support—from concept to final delivery.
              </p>
              <div className="pt-4">
                <a href="/contact" className="btn-primary">Get a Quote for Lausanne</a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative group">
               <img 
                src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop" 
                alt="Filming in Lausanne" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-display font-bold text-xl">OLYMPIC CAPITAL PRODUCTION</span>
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

export default Lausanne;
