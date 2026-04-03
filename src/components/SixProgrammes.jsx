import React, { useEffect, useRef } from 'react';

const SixProgrammes = () => {
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

  const programmes = [
    {
      icon: '🩹',
      title: 'Emergency Relief & Food Aid',
      description: 'We respond to disaster, displacement, and food insecurity with the speed of mercy. When a family cannot wait, neither can we — because the Prophet ﷺ commanded us to remove harm from the path of others.'
    },
    {
      icon: '⚖️',
      title: 'Justice & Human Rights',
      description: 'Silence in the face of injustice is not neutrality in Islam. We advocate for the rights of the marginalised, the displaced, and the forgotten — because Adl is a Quranic obligation, not a political preference.'
    },
    {
      icon: '📚',
      title: 'Islamic Education & Literacy',
      description: 'The first word Allah revealed was Iqra — Read. Our flagship national curriculum introduces Islamic Law, Shariah ethics, and Quranic wisdom into Bangladesh\'s mainstream schools from Class 1 through Class 12.'
    },
    {
      icon: '🕊️',
      title: 'Peacebuilding & Dialogue',
      description: 'Following the Prophetic tradition of Sulh, we facilitate reconciliation between divided communities and train leaders in Islamic mediation — building bridges where there are walls.'
    },
    {
      icon: '🌱',
      title: 'Community Development',
      description: 'We invest in Islamic microfinance, Waqf endowments, green livelihoods, and financial literacy — so communities are not merely helped but permanently empowered to build their own flourishing.'
    },
    {
      icon: '👶',
      title: 'Women & Child Welfare',
      description: 'Islam placed women and children at the very centre of the Maqasid Al-Shariah. We uphold their rights, protect their dignity, and equip them to become leaders and agents of change in their communities.'
    }
  ];

  return (
    <section ref={sectionRef} style={styles.section}>
      <div className="container">
        <div className="reveal" style={styles.header}>
          <div style={styles.eyebrow}>OUR PROGRAMMES</div>
          <h2 style={styles.heading}>Six Programmes. One Purpose.</h2>
          <p style={styles.subtitle}>
            Every act of service is an act of Ibadah. Six interconnected programmes, unified<br />
            by a single Islamic vision of justice, knowledge, and human dignity.
          </p>
        </div>

        <div style={styles.grid} className="six-programmes-grid">
          {programmes.map((programme, index) => (
            <div key={index} className="reveal" style={styles.card}>
              <div style={styles.icon}>{programme.icon}</div>
              <h3 style={styles.cardTitle}>{programme.title}</h3>
              <p style={styles.cardDescription}>{programme.description}</p>
              <a href="#programmes" style={styles.link}>LEARN MORE →</a>
            </div>
          ))}
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
    marginBottom: '25px',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '800px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px'
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '40px 30px',
    borderTop: '3px solid var(--gold)',
    transition: 'all 0.3s ease'
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '20px'
  },
  cardTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.5rem',
    marginBottom: '15px',
    fontWeight: '600'
  },
  cardDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '20px'
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

export default SixProgrammes;
