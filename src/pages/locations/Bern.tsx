import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Bern = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toba Oduwaiye - Corporate Videographer Bern",
    "description": "Professional video production services in Bern for government, diplomatic, and public sector communications.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bern",
      "addressCountry": "CH"
    },
    "areaServed": "Bern"
  };

  return (
    <>
      <Helmet>
        <title>Videographer in Bern | Government & Public Sector Video</title>
        <link rel="canonical" href="https://oduwaiye.com/locations/bern" />
        <meta name="description" content="Professional videographer in Bern for government agencies, embassies, and national associations. Official event coverage and policy communication." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              VIDEOGRAPHY SERVICES IN BERN
            </h4>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Professional Videographer in <span className="text-teal-accent">Bern</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              Professional video production for government, diplomatic, and public sector communications in the Swiss capital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Bern is the political heart of Switzerland. As a professional videographer serving the Bern region, I specialize in producing content for federal offices, embassies, and national organizations.
              </p>
              <p>
                From filming press conferences at the Bundeshaus to producing educational content for public campaigns, I understand the importance of accuracy, neutrality, and clear communication in the public sector.
              </p>
              <p>
                Whether you need coverage of parliamentary sessions, interviews with officials, or documentation of diplomatic visits, I provide reliable, high-quality production services that respect protocol and deliver your message effectively.
              </p>
              <div className="pt-4">
                <a href="/contact" className="btn-primary">Get a Quote for Bern</a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative group">
               <img 
                src="https://images.unsplash.com/photo-1573155993874-d5d48af862ba?q=80&w=2070&auto=format&fit=crop" 
                alt="Filming in Bern" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-display font-bold text-xl">BERN PRODUCTION</span>
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

export default Bern;
