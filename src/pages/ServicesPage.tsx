import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Video Production Services Geneva",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Toba Oduwaiye"
    },
    "areaServed": "Geneva",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Production Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Video Production"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conference & Event Videography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Documentary & Brand Storytelling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interview & Testimonial Videos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Video Editing"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Video Production Services Geneva | Toba Oduwaiye</title>
        <link rel="canonical" href="https://oduwaiye.com/services" />
        <meta name="description" content="Professional video production services in Geneva including corporate videos, conference filming, documentaries, and executive photography." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        <div className="pt-10">
            <Services />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
