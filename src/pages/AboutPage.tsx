import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AboutPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Toba Oduwaiye",
    "description": "Professional videographer in Geneva with over 20 years of experience serving UN agencies, NGOs, and global corporations.",
    "mainEntity": {
      "@type": "Person",
      "name": "Toba Oduwaiye",
      "jobTitle": "Corporate Videographer",
      "image": "https://i.imgur.com/bMiZfMs.jpeg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Geneva",
        "addressCountry": "CH"
      },
      "sameAs": [
        "https://www.linkedin.com/in/toba-oduwaiye",
        "https://www.youtube.com/@tobaoduwaiye"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>About Toba Oduwaiye | Corporate Videographer Geneva</title>
        <link rel="canonical" href="https://oduwaiye.com/about" />
        <meta name="description" content="Learn about Toba Oduwaiye, a Geneva-based videographer with 20+ years of experience working with the World Bank, Al Jazeera, and UN agencies." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        <div className="pt-10">
            <About />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
