import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import WhyMe from '../components/WhyMe';
import Testimonials from '../components/Testimonials';
import GoogleReviews from '../components/GoogleReviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toba Oduwaiye - Corporate Videographer Geneva",
    "image": "https://i.imgur.com/bMiZfMs.jpeg",
    "description": "Broadcast-quality video production in Geneva, Switzerland. Specializing in corporate video, conference filming, and documentary storytelling for global organizations.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Geneva",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.2044,
      "longitude": 6.1432
    },
    "url": "https://oduwaiye.com",
    "telephone": "+41790000000", // Placeholder, user should update
    "priceRange": "$$$"
  };

  return (
    <>
      <Helmet>
        <title>Corporate Videographer in Geneva, Switzerland | Toba Oduwaiye</title>
        <meta name="description" content="Professional corporate videographer in Geneva providing broadcast-quality video production for UN agencies, NGOs, and global organizations." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Work />
        <WhyMe />
        <Testimonials />
        <GoogleReviews />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
