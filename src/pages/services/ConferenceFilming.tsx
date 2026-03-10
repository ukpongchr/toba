import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const ConferenceFilming = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conference Filming Geneva",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Toba Oduwaiye"
    },
    "areaServed": "Geneva",
    "description": "Professional conference filming and event videography in Geneva."
  };

  return (
    <>
      <Helmet>
        <title>Conference Filming Geneva | Toba Oduwaiye</title>
        <link rel="canonical" href="https://oduwaiye.com/services/conference-filming-geneva" />
        <meta name="description" content="Professional conference filming in Geneva. Full event coverage, panel discussions, and highlight reels for summits and corporate events." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Conference Filming <span className="text-teal-accent">Geneva</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Comprehensive video coverage for conferences, summits, and corporate events in Geneva.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 text-gray-300">
              <p>
                Geneva hosts hundreds of international conferences every year. As a specialist in conference filming, I provide reliable, high-quality video production for events of all sizes, from intimate panel discussions to large-scale summits at Palexpo or CICG.
              </p>
              <p>
                My services include multi-camera recording of keynote speeches, live streaming support, same-day highlight edits for social media, and full post-event documentation. I work discreetly and efficiently, ensuring every key moment is captured without disrupting the event flow.
              </p>
              <p>
                Whether you need a simple recording of a presentation or a comprehensive video package for your annual general meeting, I deliver professional results that extend the reach and impact of your event.
              </p>
            </div>
            <div className="bg-gray-800 rounded-sm overflow-hidden aspect-video relative">
               <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" 
                alt="Conference Filming" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-teal-accent font-display font-bold text-2xl">CONFERENCE FILMING</span>
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

export default ConferenceFilming;
