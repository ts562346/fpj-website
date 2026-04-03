import React, { useEffect, useRef } from 'react';

function Programmes() {
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

  const programmes = [
    {
      icon: '🆘',
      title: 'Emergency Relief',
      description: 'Rapid response to natural disasters, conflicts, and humanitarian crises. We provide food, water, shelter, and medical aid to those in urgent need.',
      delay: '0s'
    },
    {
      icon: '⚖️',
      title: 'Justice & Human Rights',
      description: 'Advocacy for the oppressed, legal aid, and campaigns against injustice. We speak truth to power and defend human dignity.',
      delay: '0.1s'
    },
    {
      icon: '📖',
      title: 'Islamic Education',
      description: 'Quranic literacy, Islamic studies, and moral education. We nurture hearts and minds with the light of revelation.',
      delay: '0.2s'
    },
    {
      icon: '🌱',
      title: 'Environmental Stewardship',
      description: 'Protecting Allah\'s creation through sustainable practices, tree planting, and climate action rooted in Islamic teachings.',
      delay: '0.3s'
    },
    {
      icon: '🏘️',
      title: 'Community Development',
      description: 'Livelihood programmes, skills training, and economic empowerment to build self-reliant communities.',
      delay: '0.4s'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Women & Children',
      description: 'Education, healthcare, and protection for women and children, ensuring their rights and dignity are upheld.',
      delay: '0.5s'
    }
  ];

  return (
    <section className="section-pad bg-cream" id="programmes" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow">Our Work</span>
          <div className="divider-gold center"></div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--green-deep)',
            marginBottom: '16px'
          }}>
            Programmes That Transform Lives
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            Rooted in faith, driven by compassion, and focused on sustainable impact.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginTop: '64px'
        }}>
          {programmes.map((programme, index) => (
            <div 
              key={index}
              className="reveal"
              style={{
                transitionDelay: programme.delay,
                background: 'var(--white)',
                padding: '32px',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                {programme.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--green-deep)',
                marginBottom: '12px'
              }}>
                {programme.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {programme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programmes;
