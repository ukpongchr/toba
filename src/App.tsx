import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
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

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
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
        </Routes>
      </Router>
    </HelmetProvider>
  );
}