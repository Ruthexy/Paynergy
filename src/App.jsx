import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import EarlyAccess from './sections/EarlyAccess';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Paynergy - One Click. Every Bill. Paid.</title>
          <meta name="description" content="Simplify your energy bill payments with Paynergy. One-click consolidation and autopay for all your utility bills. Perfect for households, SMBs, and enterprises." />
          <meta name="keywords" content="energy bills, utility payments, bill consolidation, autopay, fintech, energy management" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Paynergy - One Click. Every Bill. Paid." />
          <meta property="og:description" content="Simplify your energy bill payments with Paynergy. One-click consolidation and autopay for all your utility bills." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://paynergy.com" />
          <meta property="og:image" content="/img/og-image.jpg" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Paynergy - One Click. Every Bill. Paid." />
          <meta name="twitter:description" content="Simplify your energy bill payments with Paynergy. One-click consolidation and autopay for all your utility bills." />
          <meta name="twitter:image" content="/img/twitter-image.jpg" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Merriweather:wght@400&display=swap" rel="stylesheet" />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <CaseStudies />
          <Testimonials />
          <FAQ />
          <EarlyAccess />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
