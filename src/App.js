import React, { useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AyahStrip from './components/AyahStrip';
import ImpactStrip from './components/ImpactStrip';
import About from './components/About';
import Vision from './components/Vision';
import Programmes from './components/Programmes';
import CallToAction from './components/CallToAction';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    // Smooth scroll for all anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const targetElement = document.querySelector(target.getAttribute('href'));
        if (targetElement) {
          e.preventDefault();
          const offset = 80;
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="App">
      <TopBar />
      <Navigation />
      <Hero />
      <AyahStrip />
      <ImpactStrip />
      <About />
      <Vision />
      <Programmes />
      <CallToAction />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
