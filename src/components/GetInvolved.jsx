import React, { useEffect, useRef } from 'react';

const GetInvolved = () => {
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

  const options = [
    {
      icon: '💰',
      title: 'Donate',
      description: 'Your Zakat, Sadaqah, or donation funds Islamic education, emergency relief, and community development. Every amount is a Sadaqah Jariyah — its reward never ends.',
      buttonText: 'DONATE NOW',
      buttonLink: '#'
    },
    {
      icon: '🤝',
      title: 'Partner With Us',
      description: 'Are you an organisation, institution, scholar, or government body? Let us explore how we can work together for justice, knowledge, and peace — and earn reward together.',
      buttonText: 'CONTACT US',
      buttonLink: '#'
    },
    {
      icon: '📢',
      title: 'Volunteer & Advocate',
      description: 'Share our work. Speak about Islamic education in your mosque, university, or community. Volunteer your skills. Every voice that carries our message forward is part of the Ummah\'s response.',
      buttonText: 'GET INVOLVED',
      buttonLink: '#'
    }
  ];

  return (
    <section ref={sectionRef} style={styles.section}>
      <div className="container">
        <div className="reveal" style={styles.header}>
          <div style={styles.eyebrow}>GET INVOLVED</div>
          <h2 style={styles.heading}>Join Us in This Work</h2>
        </div>

        <div style={styles.grid} className="get-involved-grid">
          {options.map((option, index) => (
            <div key={index} className="reveal" style={styles.card}>
              <div style={styles.icon}>{option.icon}</div>
              <h3 style={styles.title}>{option.title}</h3>
              <p style={styles.description}>{option.description}</p>
              <a href={option.buttonLink} style={styles.button}>{option.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--gold)',
    padding: '100px 0'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  eyebrow: {
    color: 'rgba(255, 255, 255, 0.8)',
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
    color: '#fff',
    lineHeight: '1.2'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0'
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '60px 40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '450px',
    borderRight: '1px solid rgba(255, 255, 255, 0.15)'
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '30px'
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2rem',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '20px'
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '30px',
    flex: '1'
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#fff',
    color: 'var(--gold)',
    padding: '16px 40px',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }
};

export default GetInvolved;
