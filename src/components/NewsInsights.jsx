import React, { useEffect, useRef } from 'react';

const NewsInsights = () => {
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

  const articles = [
    {
      category: '📚 ISLAMIC EDUCATION',
      title: 'Why Bangladesh Needs Islamic Law in Its Schools',
      description: 'An accessible, evidence-based introduction to the Islamic education gap — and why filling it is one of the most urgent investments for the Muslim world.',
      image: null
    },
    {
      category: '🌿 ENVIRONMENT',
      title: 'Surah Ar-Rahman and the Climate Crisis — What the Quran Says About the Balance We Have Broken',
      description: 'A Quranic reflection on the divine Mizan — the ecological balance set by Allah — and what it means for Bangladesh\'s coastal communities today.',
      image: null
    },
    {
      category: '📖 QURANIC REFLECTIONS',
      title: 'Founding FPJ — Why I Started This Organisation',
      description: 'Mohammad Salauddin Razzak\'s founding statement — an honest account of why this organisation was established, what it promises, and what it will never claim to be.',
      image: null
    }
  ];

  return (
    <section ref={sectionRef} style={styles.section}>
      <div className="container">
        <div style={styles.header} className="news-header">
          <div className="reveal">
            <div style={styles.eyebrow}>NEWS & INSIGHTS</div>
            <h2 style={styles.heading}>Stories from Our Work and Community</h2>
          </div>
          <a href="#news" style={styles.viewAll}>VIEW ALL ARTICLES →</a>
        </div>

        <div style={styles.grid} className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="reveal" style={styles.card}>
              <div style={styles.imagePlaceholder}>
                <span style={styles.imageIcon}>🌿</span>
              </div>
              <div style={styles.content}>
                <div style={styles.category}>{article.category}</div>
                <h3 style={styles.title}>{article.title}</h3>
                <p style={styles.description}>{article.description}</p>
                <a href="#news-article" style={styles.readMore}>READ MORE →</a>
              </div>
            </div>
          ))}
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '60px'
  },
  eyebrow: {
    color: 'var(--gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    marginBottom: '15px',
    textTransform: 'uppercase',
    borderBottom: '3px solid var(--gold)',
    display: 'inline-block',
    paddingBottom: '8px'
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '3rem',
    fontWeight: '700',
    color: 'var(--green-deep)',
    lineHeight: '1.2'
  },
  viewAll: {
    color: 'var(--gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    marginTop: '10px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px'
  },
  card: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  imagePlaceholder: {
    width: '100%',
    height: '250px',
    backgroundColor: 'var(--green-mid)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageIcon: {
    fontSize: '3rem',
    opacity: 0.3
  },
  content: {
    padding: '30px'
  },
  category: {
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '1px',
    color: 'var(--gold)',
    marginBottom: '15px'
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--green-deep)',
    marginBottom: '15px',
    lineHeight: '1.3'
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#555',
    marginBottom: '20px'
  },
  readMore: {
    color: 'var(--gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textDecoration: 'none',
    transition: 'opacity 0.3s'
  }
};

export default NewsInsights;
