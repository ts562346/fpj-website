import React, { useEffect, useRef } from 'react';

function WhoWeAre() {
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
    <section className="section-pad bg-cream" id="who-we-are" ref={sectionRef}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="who-grid">
          {/* Image Side */}
          <div className="reveal who-image-wrap" style={{
            position: 'relative'
          }}>
            <div style={{
              background: 'var(--green-mid)',
              aspectRatio: '3/4',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Large watermark crescent */}
              <div style={{
                position: 'absolute',
                fontSize: 'clamp(120px, 20vw, 200px)',
                color: 'rgba(0,0,0,0.1)',
                opacity: 0.3
              }}>☪</div>
              
              {/* Placeholder text */}
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                zIndex: 1
              }}>
                Founder's Photo
              </span>
            </div>

            {/* Badge */}
            <div className="who-badge" style={{
              position: 'absolute',
              bottom: '-32px',
              right: '32px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-lg)',
              border: '6px solid var(--cream)'
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--white)',
                lineHeight: 1
              }}>FPJ</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginTop: '4px',
                opacity: 0.9
              }}>EST. 2026</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="eyebrow">Who We Are</span>
            <div className="divider-gold"></div>
            
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--green-deep)',
              marginBottom: '28px',
              lineHeight: 1.15
            }}>
              Born from <em style={{ 
                fontStyle: 'italic', 
                color: 'var(--gold)' 
              }}>faith</em>, driven by justice
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              The Foundation for Peace & Justice was established in 2026 by Mohammad Salauddin Razzak 
              with one defining conviction: that a world guided by the Quran and the Sunnah of the 
              Prophet Muhammad ﷺ is a world of justice, compassion, knowledge, and dignity for all.
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              We serve the vulnerable. We educate the young. We protect the earth. We advocate for 
              the marginalised. We build peace. Not because it is strategically convenient — but 
              because Allah commands it, and we have chosen to answer.
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}>
              We are new. We are honest about that. What we claim — and commit to proving — is 
              that a clearly defined vision, a rigorously developed programme framework, and an 
              unshakeable commitment to Amanah can build an organisation that earns its place 
              among the most trusted voices in Islamic humanitarian work.
            </p>

            <a 
              href="#story" 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'gap 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
              onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
            >
              Read Our Full Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
