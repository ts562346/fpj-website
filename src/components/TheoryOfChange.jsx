import React, { useEffect, useRef } from 'react';

const TheoryOfChange = () => {
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

  const stages = [
    {
      icon: '📚',
      label: 'INPUTS',
      description: 'Knowledge, people, funds, scholarly oversight & validated curriculum'
    },
    {
      icon: '⚙️',
      label: 'ACTIVITIES',
      description: 'Teaching, training, advocacy, community engagement & environmental action'
    },
    {
      icon: '📦',
      label: 'OUTPUTS',
      description: 'Trained teachers, textbooks, certified graduates, planted trees & monitored rivers'
    },
    {
      icon: '📝',
      label: 'OUTCOMES',
      description: 'Islamic legal literacy, ethical character, community wellbeing & ecological restoration'
    },
    {
      icon: '☀️',
      label: 'IMPACT',
      description: 'A just, knowledgeable & ecologically responsible Ummah — aligned with Maqasid Al-Shariah'
    }
  ];

  return (
    <section ref={sectionRef} style={styles.section}>
      <div className="container">
        <div className="reveal" style={styles.header}>
          <div style={styles.eyebrow}>THEORY OF CHANGE</div>
          <h2 style={styles.heading}>From Knowledge to Justice — The Prophetic Change Model</h2>
        </div>

        <div className="reveal" style={styles.flowContainer}>
          <div style={styles.stages} className="theory-stages">
            {stages.map((stage, index) => (
              <React.Fragment key={index}>
                <div style={styles.stageCard}>
                  <div style={styles.icon}>{stage.icon}</div>
                  <div style={styles.label}>{stage.label}</div>
                  <div style={styles.description}>{stage.description}</div>
                </div>
                {index < stages.length - 1 && (
                  <div style={styles.arrow} className="theory-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="reveal" style={styles.buttonContainer}>
          <a href="#theory" style={styles.button}>READ OUR FULL THEORY OF CHANGE →</a>
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
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  eyebrow: {
    color: 'var(--gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    marginBottom: '20px',
    textTransform: 'uppercase'
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'var(--green-deep)',
    lineHeight: '1.2'
  },
  flowContainer: {
    marginBottom: '60px'
  },
  stages: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    className: 'theory-stages'
  },
  stageCard: {
    flex: '1',
    backgroundColor: '#fff',
    padding: '40px 30px',
    textAlign: 'center',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    color: 'var(--gold)',
    marginBottom: '15px',
    textTransform: 'uppercase'
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#555'
  },
  arrow: {
    fontSize: '2rem',
    color: 'var(--gold)',
    fontWeight: '600',
    flexShrink: 0
  },
  buttonContainer: {
    textAlign: 'center'
  },
  button: {
    display: 'inline-block',
    backgroundColor: 'var(--gold)',
    color: '#fff',
    padding: '18px 50px',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }
};

export default TheoryOfChange;
