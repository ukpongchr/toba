import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const NgoVideographer = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NGO & UN Videographer Geneva",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Toba Oduwaiye"
    },
    "areaServed": "Geneva",
    "description": "Specialized video production for NGOs, UN agencies, and international organizations in Geneva."
  };

  return (
    <>
      <Helmet>
        <title>NGO & UN Videographer Geneva | Toba Oduwaiye</title>
        <meta name="description" content="Specialized videographer for NGOs, UN agencies, and international organizations in Geneva. Impact storytelling, field reporting, and institutional messaging." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            NGO & UN Videographer <span className="text-teal-accent">Geneva</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Authentic storytelling and institutional messaging for the humanitarian and development sector.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300">
              <p>
                Geneva is the global capital of peace and diplomacy. As a specialized videographer for NGOs and UN agencies, I understand the nuances of communicating complex humanitarian issues with dignity, accuracy, and impact.
              </p>
              <p>
                My work with organizations like the World Bank, Gavi, and various UN bodies has equipped me with the sensitivity and expertise required for field missions, high-level advocacy films, and beneficiary stories. I navigate the protocols of international organizations seamlessly, ensuring your message is delivered with the highest ethical and production standards.
              </p>
              <p>
                Whether you need coverage of a Human Rights Council session, a documentary on global health initiatives, or social media content for an awareness campaign, I am your trusted partner in Geneva.
              </p>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative">
               <img 
                src="https://i.imgur.com/dm1eOGK.jpeg" 
                alt="NGO Filming" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-teal-accent font-display font-bold text-2xl">NGO & UN PRODUCTION</span>
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

export default NgoVideographer;
