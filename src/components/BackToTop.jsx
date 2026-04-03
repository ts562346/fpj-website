import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        width: '52px',
        height: '52px',
        background: 'var(--gold)',
        color: 'var(--white)',
        fontSize: '1.5rem',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none',
        transition: 'opacity 0.3s, transform 0.2s, background 0.2s',
        zIndex: 1000
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gold-light)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--gold)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      ↑
    </button>
  );
}

export default BackToTop;
