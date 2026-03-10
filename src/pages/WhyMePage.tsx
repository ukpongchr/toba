import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import WhyMe from '../components/WhyMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const WhyMePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Toba Oduwaiye",
      "jobTitle": "Corporate Videographer",
      "description": "Geneva-based videographer with 20+ years of international experience, specializing in corporate and institutional video production.",
      "knowsAbout": ["Video Production", "Documentary Filmmaking", "Corporate Communications", "Event Videography"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Why Hire Toba Oduwaiye | Geneva Videographer</title>
        <link rel="canonical" href="https://oduwaiye.com/why-me" />
        <meta name="description" content="Discover why Toba Oduwaiye is the preferred videographer for global organizations in Geneva. 20+ years experience, local expertise, and broadcast quality." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        <div className="pt-10">
            <WhyMe />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default WhyMePage;
