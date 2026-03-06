import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import WhyMePage from './pages/WhyMePage';
import ContactPage from './pages/ContactPage';
import Lausanne from './pages/locations/Lausanne';
import Zurich from './pages/locations/Zurich';
import Davos from './pages/locations/Davos';
import Basel from './pages/locations/Basel';
import Bern from './pages/locations/Bern';
import NgoVideographer from './pages/services/NgoVideographer';
import ConferenceFilming from './pages/services/ConferenceFilming';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import EditPost from './pages/admin/EditPost';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/why-me" element={<WhyMePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/locations/lausanne" element={<Lausanne />} />
          <Route path="/locations/zurich" element={<Zurich />} />
          <Route path="/locations/davos" element={<Davos />} />
          <Route path="/locations/basel" element={<Basel />} />
          <Route path="/locations/bern" element={<Bern />} />
          <Route path="/services/ngo-videographer-geneva" element={<NgoVideographer />} />
          <Route path="/services/conference-filming-geneva" element={<ConferenceFilming />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/posts/new" element={<EditPost />} />
          <Route path="/admin/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}