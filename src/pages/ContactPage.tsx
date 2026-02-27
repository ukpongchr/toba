import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Toba Oduwaiye",
    "description": "Get in touch for video production services in Geneva.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Toba Oduwaiye",
      "email": "toba@oduwaiye.com",
      "areaServed": "Geneva"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Toba Oduwaiye | Videographer Geneva</title>
        <meta name="description" content="Contact Toba Oduwaiye for corporate video production, conference filming, and documentary projects in Geneva, Switzerland." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        <div className="pt-20">
            <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
