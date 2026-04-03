import React, { useEffect, useRef } from 'react';

function Vision() {
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
    <section className="section-pad bg-gold-pale" id="vision" ref={sectionRef}>
      <div className="container">
        <div className="vision-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          <div className="reveal">
            <span className="eyebrow">Our Vision</span>
            <div className="divider-gold"></div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: 'var(--green-deep)',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              A world where justice, peace, and compassion prevail
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              marginBottom: '16px'
            }}>
              We envision a world transformed by the light of Islamic values — where human dignity 
              is protected, the vulnerable are empowered, and communities thrive in harmony with 
              creation.
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-body)',
              lineHeight: 1.7
            }}>
              Our vision is rooted in the Quranic principle: <em style={{ color: 'var(--gold)' }}>
              "You are the best nation produced for mankind — you enjoin what is right, forbid 
              what is wrong, and believe in Allah."</em> (3:110)
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="eyebrow">Our Mission</span>
            <div className="divider-gold"></div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: 'var(--green-deep)',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              Serving humanity through Islamic compassion
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '1.05rem',
              color: 'var(--text-body)'
            }}>
              <li style={{ marginBottom: '12px', paddingLeft: '28px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--gold)',
                  fontWeight: 700
                }}>→</span>
                Provide emergency relief and long-term development to communities in crisis
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '28px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--gold)',
                  fontWeight: 700
                }}>→</span>
                Advocate for justice, human rights, and the protection of the oppressed
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '28px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--gold)',
                  fontWeight: 700
                }}>→</span>
                Promote Islamic education and moral development
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '28px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--gold)',
                  fontWeight: 700
                }}>→</span>
                Champion environmental stewardship as a sacred trust
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
