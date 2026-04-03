import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>
      
      <div className="container">
        <div className="hero-content">
          <span className="hero-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
          <h1 className="hero-title">
            Illuminating Minds.<br/>
            <em>Healing the Earth.</em>
            Building Peace.<br/>
          </h1>
          <p className="hero-subtitle">
            A faith-based humanitarian organisation serving humanity through the light of the 
            Quran and the Sunnah of Prophet Muhammad ﷺ  — founded in Bangladesh, reaching the world.
          </p>
          <div className="hero-ctas">
            <a href="#donate" className="btn-primary">DISCOVER OUR WORK</a>
            <a href="#about" className="btn-outline">SUPPORT OUR MISSION</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Explore</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
