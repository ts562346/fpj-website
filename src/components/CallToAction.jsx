import React, { useEffect, useRef } from 'react';

function CallToAction() {
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

  return (
    <section className="section-pad bg-deep" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow text-gold">Take Action</span>
          <div className="divider-gold center"></div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: '16px'
          }}>
            Join the Movement for Justice
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            Every act of charity, every voice raised for justice, every hour volunteered — 
            it all matters. Be part of the change.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginTop: '64px'
        }}>
          <div 
            className="cta-card reveal"
            id="donate"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              padding: '40px 32px',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}
          >
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>☪</span>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--white)',
              marginBottom: '16px'
            }}>
              Give Sadaqah & Zakat
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '24px',
              lineHeight: 1.7
            }}>
              Your donation transforms lives. Whether it's emergency relief, education, or justice 
              advocacy, your generosity is an investment in humanity that Allah loves.
            </p>
            <a 
              href="#contact" 
              style={{
                display: 'inline-block',
                background: 'var(--gold)',
                color: 'var(--white)',
                padding: '14px 32px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'background 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Donate Now
            </a>
          </div>

          <div 
            className="cta-card reveal"
            id="volunteer"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              padding: '40px 32px',
              textAlign: 'center',
              transitionDelay: '0.2s',
              transition: 'all 0.3s'
            }}
          >
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>📢</span>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--white)',
              marginBottom: '16px'
            }}>
              Volunteer & Advocate
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '24px',
              lineHeight: 1.7
            }}>
              Share our work. Speak about Islamic education in your mosque, university, or community. 
              Volunteer your skills. Every voice that carries our message forward is part of the Ummah's response.
            </p>
            <a 
              href="#contact" 
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--white)',
                padding: '14px 32px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                border: '1.5px solid rgba(255,255,255,0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
