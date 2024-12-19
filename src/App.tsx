import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
}

export default App;