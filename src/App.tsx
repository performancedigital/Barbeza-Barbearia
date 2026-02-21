
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Gallery from './components/Gallery';
import StyleConsultant from './components/StyleConsultant';
import Footer from './components/Footer';
import BookingButton from './components/BookingButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-[#9A936A] selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <StyleConsultant />
        <Gallery />
      </main>

      <Footer />
      <BookingButton />
    </div>
  );
};

export default App;
