import React, { useEffect, useRef } from 'react';

function About() {
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
    <section className="section-pad bg-cream" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow">Who We Are</span>
          <div className="divider-gold center"></div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--green-deep)',
            marginBottom: '16px'
          }}>
            The Foundation for Peace & Justice
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Founded in Dhaka, Bangladesh, we are a faith-based humanitarian organisation 
            committed to serving humanity through compassion, justice, and Islamic values.
          </p>
        </div>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginTop: '64px'
        }}>
          <div className="about-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px'
            }}>☪</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              color: 'var(--green-deep)',
              marginBottom: '12px'
            }}>Faith-Rooted</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Our work is guided by the teachings of the Quran and the Sunnah of Prophet Muhammad ﷺ, 
              serving all of humanity with dignity and respect.
            </p>
          </div>

          <div className="about-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px'
            }}>⚖️</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              color: 'var(--green-deep)',
              marginBottom: '12px'
            }}>Justice-Driven</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              We stand for justice, human rights, and dignity. We speak truth to power and defend 
              the oppressed, inspired by Islamic principles of social justice.
            </p>
          </div>

          <div className="about-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px'
            }}>🌍</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              color: 'var(--green-deep)',
              marginBottom: '12px'
            }}>Globally Focused</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              From Bangladesh to the world, we serve communities in need regardless of race, 
              religion, or nationality, embodying the universal mercy of Islam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
