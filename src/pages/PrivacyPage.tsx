import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#020a1a] text-white selection:bg-teal-accent selection:text-[#020a1a]">
      <Helmet>
        <title>Privacy Policy | Toba Oduwaiye - Geneva Videographer</title>
        <link rel="canonical" href="https://oduwaiye.com/privacy" />
        <meta name="description" content="Privacy Policy for Toba Oduwaiye, Videographer in Geneva, Switzerland." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-teal max-w-none">
            <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">1. Information We Collect</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We collect information that you provide directly to us when you fill out a contact form, request a quote, or communicate with us via email or WhatsApp. This may include your name, email address, phone number, company name, and any other details you choose to provide regarding your video production needs.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Respond to your inquiries and provide quotes for video production services.</li>
              <li>Communicate with you about ongoing projects.</li>
              <li>Deliver final video files and project assets.</li>
              <li>Send administrative information, such as updates to our terms or policies.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">3. Information Sharing</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">4. Data Security</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-4 text-teal-accent">5. Contact Us</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPage;
