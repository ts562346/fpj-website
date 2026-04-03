import React, { useEffect, useRef } from 'react';

function WhatWeStandFor() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const standForCards = [
    {
      icon: '🕊️',
      title: 'Our Mission',
      description: 'To promote peace and ensure justice in every walk of life — social, economic, educational, environmental, and spiritual — through the comprehensive framework of Islamic law, ethics, and values. We serve the vulnerable, educate the young, and protect the earth.',
      delay: '0s'
    },
    {
      icon: '🌍',
      title: 'Our Vision',
      description: 'A world in which vulnerable communities are no longer defined by their deprivation, but transformed by the comprehensive social, economic, educational, and spiritual framework that Islam provides — societies that are truly just in practice according to the light of the Quran and Sunnah.',
      delay: '0.1s'
    },
    {
      icon: '⚖️',
      title: 'Our Foundation',
      description: 'Five values anchor every decision FPJ takes: Amanah (Trustworthiness), Adl (Justice), Rahmah (Compassion), Hikmah (Wisdom), and Khidmah (Service). These are not organisational slogans — they are Quranic commands we are accountable to fulfil.',
      delay: '0.2s'
    }
  ];

  return (
    <section 
      className="section-pad" 
      id="what-we-stand-for" 
      ref={sectionRef}
      style={{
        background: 'var(--cream-dark)'
      }}
    >
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow">Our Purpose</span>
          <div className="divider-gold center"></div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--green-deep)',
            marginBottom: '60px'
          }}>
            What We Stand For
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'rgba(184,149,58,0.15)'
        }} className="mv-grid">
          {standForCards.map((card, index) => (
            <div 
              key={index}
              className="reveal"
              style={{
                transitionDelay: card.delay,
                background: 'var(--white)',
                padding: '48px 36px',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '24px',
                lineHeight: 1
              }}>
                {card.icon}
              </div>
              
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                color: 'var(--green-deep)',
                marginBottom: '20px',
                fontWeight: 700
              }}>
                {card.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-muted)', 
                lineHeight: 1.75,
                fontSize: '0.98rem'
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeStandFor;
