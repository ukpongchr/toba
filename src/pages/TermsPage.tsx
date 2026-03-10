import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#020a1a] text-white selection:bg-teal-accent selection:text-[#020a1a]">
      <Helmet>
        <title>Terms of Service | Toba Oduwaiye - Geneva Videographer</title>
        <meta name="description" content="Terms of Service for Toba Oduwaiye, Videographer in Geneva, Switzerland." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert prose-teal max-w-none">
            <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">1. Agreement to Terms</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              By accessing our website or engaging our video production services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">2. Services Provided</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Toba Oduwaiye provides professional videography, editing, and video production services in Geneva, Switzerland, and surrounding areas. The specific scope of work, deliverables, timelines, and pricing will be outlined in a separate project agreement or quote provided to the client.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">3. Payment Terms</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Payment terms will be specified in the project agreement. Typically, a deposit is required to secure booking dates, with the remaining balance due upon delivery of the final video assets. Late payments may be subject to additional fees.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">4. Copyright and Usage Rights</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Unless otherwise agreed upon in writing, Toba Oduwaiye retains the copyright to all original footage and final edited videos. The client is granted a license to use the final video products for their intended promotional or internal purposes as outlined in the project agreement. We reserve the right to use the footage and final videos for our own promotional portfolio, website, and social media, unless a non-disclosure agreement (NDA) is signed.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">5. Cancellations and Rescheduling</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cancellations or requests to reschedule must be made in writing. Deposits are generally non-refundable if a cancellation occurs within a certain timeframe before the scheduled shoot, as outlined in the specific project agreement.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">6. Contact Information</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: toba@tobaoduwaiye.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
