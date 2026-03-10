import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Zurich = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toba Oduwaiye - Corporate Videographer Zurich",
    "description": "Professional video production services in Zurich for finance, tech, and corporate events.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zurich",
      "addressCountry": "CH"
    },
    "areaServed": "Zurich"
  };

  return (
    <>
      <Helmet>
        <title>Corporate Videographer Zurich | Finance & Tech Video Production</title>
        <link rel="canonical" href="https://oduwaiye.com/locations/zurich" />
        <meta name="description" content="Expert corporate videography in Zurich. Specializing in financial communications, tech conferences, and executive interviews for global businesses." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              VIDEOGRAPHY SERVICES IN ZURICH
            </h4>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Corporate Video Production in <span className="text-teal-accent">Zurich</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              High-end video production for Zurich's financial, technology, and corporate sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Zurich is Switzerland's economic powerhouse. As a professional videographer serving the Zurich area, I provide discreet, high-quality production services tailored to the banking, insurance, and technology industries.
              </p>
              <p>
                Whether filming executive interviews in Paradeplatz, covering conferences at the Hallenstadion, or producing branded content for tech startups in Zurich West, I deliver visuals that match the precision and professionalism expected in this market.
              </p>
              <p>
                My experience with global broadcasters like Bloomberg and CNBC ensures that your corporate communications meet international broadcast standards, perfect for investor relations, internal communications, and global marketing campaigns.
              </p>
              <div className="pt-4">
                <a href="/contact" className="btn-primary">Get a Quote for Zurich</a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative group">
               <img 
                src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=2006&auto=format&fit=crop" 
                alt="Filming in Zurich" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-display font-bold text-xl">ZURICH PRODUCTION</span>
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

export default Zurich;
