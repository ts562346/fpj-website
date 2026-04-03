import React, { useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AyahStrip from './components/AyahStrip';
import ImpactStrip from './components/ImpactStrip';
import WhoWeAre from './components/WhoWeAre';
import WhatWeStandFor from './components/WhatWeStandFor';
import FivePillars from './components/FivePillars';
import SixProgrammes from './components/SixProgrammes';
import FlagshipProject from './components/FlagshipProject';
import EnvironmentalStewardship from './components/EnvironmentalStewardship';
import TheoryOfChange from './components/TheoryOfChange';
import NewsInsights from './components/NewsInsights';
import GetInvolved from './components/GetInvolved';
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
      <WhoWeAre />
      <WhatWeStandFor />
      <FivePillars />
      <SixProgrammes />
      <FlagshipProject />
      <EnvironmentalStewardship />
      <TheoryOfChange />
      <NewsInsights />
      <GetInvolved />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
