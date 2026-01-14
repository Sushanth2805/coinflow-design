import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;