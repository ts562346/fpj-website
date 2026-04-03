import React, { useEffect, useRef } from 'react';

const FlagshipProject = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      <div className="container">
        <div style={styles.grid} className="flagship-grid">
          <div className="reveal" style={styles.content}>
            <div style={styles.eyebrow}>FLAGSHIP PROJECT</div>
            
            <h2 style={styles.heading}>
              Islamic Law & Shariah <span style={styles.headingGold}>Education — Bangladesh</span>
            </h2>

            <p style={styles.text}>
              Bangladesh — a nation of 153 million Muslims — produces generations of students with virtually no systematic understanding of Islamic law, Islamic finance, or Islamic ethics. This curriculum is our answer to that injustice.
            </p>

            <p style={styles.text}>
              Our dual-track curriculum integrates Islamic Law & Shariah with Environmental Stewardship — proving that protecting the earth is not a foreign agenda, but a Quranic obligation revealed 1,400 years ago.
            </p>

            <div style={styles.statsGrid}>
              <div className="reveal" style={styles.stat}>
                <div style={styles.statValue}>Class 1–12</div>
                <div style={styles.statLabel}>FULL CURRICULUM COVERAGE</div>
              </div>
              <div className="reveal" style={styles.stat}>
                <div style={styles.statValue}>USD 12.5M</div>
                <div style={styles.statLabel}>4-YEAR PROJECT BUDGET</div>
              </div>
            </div>

            <a href="#" style={styles.button}>READ THE FULL PROJECT →</a>
          </div>

          <div className="reveal" style={styles.imageContainer}>
            <div style={styles.imagePlaceholder}>
              <span style={styles.imageLabel}>EDUCATION PROGRAMME PHOTO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--cream)',
    padding: '100px 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center'
  },
  content: {
    paddingRight: '20px'
  },
  eyebrow: {
    color: 'var(--gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    borderBottom: '2px solid var(--gold)',
    display: 'inline-block',
    paddingBottom: '8px'
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '30px',
    lineHeight: '1.2',
    color: 'var(--green-deep)'
  },
  headingGold: {
    fontStyle: 'italic',
    color: 'var(--gold)',
    display: 'block'
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#333'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    margin: '40px 0'
  },
  stat: {
    borderLeft: '3px solid var(--gold)',
    paddingLeft: '20px'
  },
  statValue: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '1.5px',
    color: '#666',
    textTransform: 'uppercase'
  },
  button: {
    display: 'inline-block',
    backgroundColor: 'var(--gold)',
    color: '#fff',
    padding: '16px 40px',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    marginTop: '20px'
  },
  imageContainer: {
    height: '100%',
    minHeight: '500px'
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--green-deep)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  imageLabel: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '0.85rem',
    letterSpacing: '2px',
    fontWeight: '600'
  }
};

export default FlagshipProject;
