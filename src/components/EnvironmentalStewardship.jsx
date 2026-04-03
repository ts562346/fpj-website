import React, { useEffect, useRef } from 'react';

const EnvironmentalStewardship = () => {
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
        <div style={styles.grid} className="environmental-grid">
          <div className="reveal" style={styles.leftColumn}>
            <div style={styles.eyebrow}>ENVIRONMENTAL STEWARDSHIP</div>
            
            <h2 style={styles.heading}>
              He set up the <span style={styles.headingGold}>Balance.</span><br />
              We must not disrupt it.
            </h2>

            <p style={styles.text}>
              Bangladesh contributes less than 0.35% of global greenhouse gas emissions — yet bears catastrophic consequences: rising seas, intensifying cyclones, and the looming displacement of tens of millions. This is Zulm — oppression — and it demands a response.
            </p>

            <p style={styles.text}>
              The Islamic framework for environmental protection — Khalifah, Mizan, Hima, Israf — was revealed 1,400 years before the Paris Agreement. Our environmental stewardship programmes teach this framework to every student, in every school.
            </p>

            <div style={styles.statsGrid} className="environmental-stats-grid">
              <div className="reveal" style={styles.stat}>
                <div style={styles.statValue}>250K</div>
                <div style={styles.statLabel}>Trees planted by 2029 as<br />Sadaqah Jariyah</div>
              </div>
              <div className="reveal" style={styles.stat}>
                <div style={styles.statValue}>50</div>
                <div style={styles.statLabel}>Rivers adopted & monitored by<br />students</div>
              </div>
              <div className="reveal" style={styles.stat}>
                <div style={styles.statValue}>0.35%</div>
                <div style={styles.statLabel}>Bangladesh's share of global<br />emissions</div>
              </div>
              <div className="reveal" style={styles.stat}>
                <div style={styles.statValue}>Art. 7</div>
                <div style={styles.statLabel}>Hima zones align with Paris<br />Agreement adaptation</div>
              </div>
            </div>
          </div>

          <div className="reveal" style={styles.rightColumn}>
            <div style={styles.quoteBox}>
              <div style={styles.arabic}>وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا</div>
              <p style={styles.translation}>
                "Do not spread corruption on earth after it has been set in order. And invoke Him in fear and aspiration. Indeed, the mercy of Allah is near to the doers of good."
              </p>
              <div style={styles.reference}>SURAH AL-ARAF, 7:56</div>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.infoText}>
                Our Islamic Convergence Table maps 7 Quranic concepts directly to 7 Paris Agreement articles — making the case that Islamic education is the most powerful climate action investment available to Bangladesh.
              </p>
              <a href="#donate" style={styles.link}>DOWNLOAD CLIMATE PROPOSAL →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--green-deep)',
    padding: '100px 0',
    color: '#fff'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'start'
  },
  leftColumn: {
    paddingRight: '20px'
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
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
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '30px',
    lineHeight: '1.2'
  },
  headingGold: {
    fontStyle: 'italic',
    color: 'var(--gold)'
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '25px',
    marginTop: '40px'
  },
  stat: {
    borderLeft: '3px solid var(--gold)',
    paddingLeft: '20px'
  },
  statValue: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '0.85rem',
    lineHeight: '1.5',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  quoteBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '40px',
    borderLeft: '4px solid var(--gold)'
  },
  arabic: {
    fontFamily: 'Noto Naskh Arabic, serif',
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: 'var(--gold)',
    direction: 'rtl',
    lineHeight: '1.8'
  },
  translation: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    fontStyle: 'italic',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  reference: {
    fontSize: '0.75rem',
    letterSpacing: '1.5px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '600'
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '30px'
  },
  infoText: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.85)'
  },
  link: {
    color: 'var(--gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textDecoration: 'none',
    transition: 'opacity 0.3s'
  }
};

export default EnvironmentalStewardship;
