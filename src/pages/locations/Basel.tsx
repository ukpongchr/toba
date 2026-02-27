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
        <title>Corporate Videographer in Basel | Toba Oduwaiye</title>
        <meta name="description" content="Expert corporate videography in Basel. Specializing in pharmaceutical, art, and logistics industry video production." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Corporate Videographer in <span className="text-teal-accent">Basel</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Specialized video production for Basel's pharmaceutical, life sciences, and art sectors.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300">
              <p>
                Basel is a global center for pharmaceuticals and art. As a professional videographer serving the Basel region, I provide tailored production services that meet the rigorous standards of the life sciences industry and the creative demands of the art world.
              </p>
              <p>
                From filming corporate communications for major pharma HQs to documenting exhibitions at Art Basel, I bring a versatile skill set that adapts to your specific industry needs. My experience with sensitive corporate environments ensures discretion and professionalism at all times.
              </p>
              <p>
                Whether you need internal training videos, executive messages, or coverage of logistics operations along the Rhine, I deliver high-quality visuals that support your business objectives in Basel.
              </p>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative">
               <img 
                src="https://images.unsplash.com/photo-1523665303248-18548d732e60?q=80&w=1936&auto=format&fit=crop" 
                alt="Filming in Basel" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-teal-accent font-display font-bold text-2xl">BASEL PRODUCTION</span>
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
