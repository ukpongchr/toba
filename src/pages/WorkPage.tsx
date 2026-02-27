import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const WorkPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio - Toba Oduwaiye",
    "description": "Selected video production work including corporate films, documentaries, and event highlights.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "VideoObject",
          "name": "Africa Collective — Africa Business Day",
          "description": "High-level event films for Africa Collective and the Swiss Africa Business Circle across Geneva, Baden, Basel, and Davos.",
          "thumbnailUrl": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
          "uploadDate": "2024-01-01",
          "contentUrl": "https://youtu.be/80zF_R8pjz8"
        },
        {
          "@type": "VideoObject",
          "name": "Glander International Bunkering — Trader Talk",
          "description": "Selected to produce an episode of Glander's Trader Talk series, filmed at their Geneva office with full post-production handled in-house.",
          "thumbnailUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
          "uploadDate": "2024-01-01",
          "contentUrl": "https://youtu.be/_B5SMOkPCYU"
        },
        {
          "@type": "VideoObject",
          "name": "Geneva — A Visual Love Letter",
          "description": "A personal short film capturing the energy, culture, and beauty of Geneva — from the shimmering waters of Lake Geneva to the backdrop of the Swiss Alps.",
          "thumbnailUrl": "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop",
          "uploadDate": "2024-01-01",
          "contentUrl": "https://youtu.be/WMoeqReF5W0"
        },
        {
          "@type": "VideoObject",
          "name": "Finding Rest",
          "description": "A visually compelling short film exploring the journey from mental chaos to clarity, set against the Swiss Alps.",
          "thumbnailUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
          "uploadDate": "2024-01-01",
          "contentUrl": "https://youtu.be/WMoeqReF5W0"
        },
        {
          "@type": "VideoObject",
          "name": "Qubic — AI for Good Geneva",
          "description": "Commissioned to film and edit Qubic's exclusive Geneva gathering during AI for Good week.",
          "thumbnailUrl": "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop",
          "uploadDate": "2024-01-01",
          "contentUrl": "https://youtu.be/WMoeqReF5W0"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Toba Oduwaiye - Corporate Videographer Geneva</title>
        <meta name="description" content="Explore selected video production work by Toba Oduwaiye, featuring corporate films, documentaries, and event highlights for global clients." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
        <Navbar />
        <div className="pt-10">
            <Work />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default WorkPage;
