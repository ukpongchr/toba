import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Basel = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toba Oduwaiye - Corporate Videographer Basel",
    "description": "Professional video production services in Basel for pharmaceutical, art, and logistics industries.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Basel",
      "addressCountry": "CH"
    },
    "areaServed": "Basel"
  };

  return (
    <>
      <Helmet>
        <title>Corporate Videographer Basel | Pharma & Art Video Production</title>
        <link rel="canonical" href="https://oduwaiye.com/locations/basel" />
        <meta name="description" content="Specialist video production in Basel for pharmaceutical companies and art institutions. High-end corporate films and event coverage." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              VIDEOGRAPHY SERVICES IN BASEL
            </h4>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Corporate Videography in <span className="text-teal-accent">Basel</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              Specialized video production for Basel's pharmaceutical, life sciences, and art sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Basel is a global center for pharmaceuticals and art. As a professional videographer serving the Basel region, I provide tailored production services that meet the rigorous standards of the life sciences industry and the creative demands of the art world.
              </p>
              <p>
                From filming corporate communications for major pharma HQs to documenting exhibitions at Art Basel, I bring a versatile skill set that adapts to your specific industry needs. My experience with sensitive corporate environments ensures discretion and professionalism at all times.
              </p>
              <p>
                Whether you need internal training videos, executive messages, or coverage of logistics operations along the Rhine, I deliver high-quality visuals that support your business objectives in Basel.
              </p>
              <div className="pt-4">
                <a href="/contact" className="btn-primary">Get a Quote for Basel</a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative group">
               <img 
                src="https://images.unsplash.com/photo-1523665303248-18548d732e60?q=80&w=1936&auto=format&fit=crop" 
                alt="Filming in Basel" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-display font-bold text-xl">BASEL PRODUCTION</span>
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

export default Basel;
