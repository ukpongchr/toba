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
    "description": "Professional video production services in Lausanne for corporate events, interviews, and institutional storytelling.",
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
        <title>Corporate Videographer in Lausanne | Toba Oduwaiye</title>
        <meta name="description" content="Expert corporate videography in Lausanne. Specializing in event coverage, interviews, and brand storytelling for businesses and institutions in Vaud." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Corporate Videographer in <span className="text-teal-accent">Lausanne</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Delivering broadcast-quality video production for international federations, academic institutions, and corporations based in the Olympic Capital.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300">
              <p>
                Lausanne is a hub for international sport, education, and innovation. As a professional videographer serving the Vaud region, I understand the specific needs of organizations operating in this dynamic environment.
              </p>
              <p>
                From capturing high-level conferences at the SwissTech Convention Center to producing documentary-style content for international sports federations, I bring over 20 years of experience to every project. My approach combines journalistic integrity with cinematic aesthetics, ensuring your message resonates with a global audience.
              </p>
              <p>
                Whether you need coverage for a summit at EPFL, an interview series at the Olympic Museum, or a corporate film for your headquarters in Lausanne, I provide full-service production support.
              </p>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative">
               <img 
                src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop" 
                alt="Filming in Lausanne" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-teal-accent font-display font-bold text-2xl">LAUSANNE PRODUCTION</span>
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
