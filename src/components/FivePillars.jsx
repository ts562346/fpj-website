import React, { useEffect, useRef } from 'react';

function FivePillars() {
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

  const pillars = [
    {
      number: '01',
      arabic: 'الشَّهَادَة',
      transliteration: 'SHAHADA',
      title: 'The Declaration of Faith',
      description: "The Shahada is FPJ's organisational compass. Every programme we design asks: does this serve Allah's command? It is why we publish honest reports even when results are difficult — our accountability is to Allah first.",
      delay: '0s'
    },
    {
      number: '02',
      arabic: 'الصَّلاة',
      transliteration: 'SALAH',
      title: 'The Prayer',
      description: 'Salah represents the discipline, consistency, and spiritual grounding every humanitarian organisation must have. Our education curriculum is built on the Salah model — structured, consistent, deeply personal, and communal simultaneously.',
      delay: '0.1s'
    },
    {
      number: '03',
      arabic: 'الزَّكَاة',
      transliteration: 'ZAKAT',
      title: 'The Obligatory Charity',
      description: "Zakat is Islam's built-in mechanism for economic justice — obligatory redistribution. FPJ receives Zakat from donors and teaches every student exactly how to calculate and distribute it. Our Emergency Relief programme is Zakat in action.",
      delay: '0.2s'
    },
    {
      number: '04',
      arabic: 'الصَّوْم',
      transliteration: 'SAWM',
      title: 'The Fast',
      description: 'The fast of Ramadan is an annual immersion in the experience of the hungry and the deprived. For FPJ, Sawm represents empathy as a spiritual discipline — we approach every beneficiary community with solidarity, not pity.',
      delay: '0s'
    },
    {
      number: '05',
      arabic: 'الحَجّ',
      transliteration: 'HAJJ',
      title: 'The Pilgrimage',
      description: "Hajj is the most visible expression of Islamic universalism — five million Muslims from every nation, standing together as one Ummah. FPJ's peacebuilding programmes draw directly from this vision of shared humanity and accountability to Allah.",
      delay: '0.1s'
    }
  ];

  return (
    <section 
      className="section-pad" 
      id="five-pillars" 
      ref={sectionRef}
      style={{
        background: 'var(--gold-pale)'
      }}
    >
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow">Our Faith</span>
          <div className="divider-gold center"></div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: 'var(--green-deep)',
            marginBottom: '24px',
            lineHeight: 1.2,
            maxWidth: '900px',
            margin: '0 auto 24px'
          }}>
            The Five Pillars of Islam — The Foundation of Everything We Do
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto 64px',
            lineHeight: 1.7
          }}>
            At FPJ we do not separate our faith from our work. The Five Pillars are not merely 
            religious observances — they are the structural framework of every programme we 
            design and every decision we make.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '32px'
        }} className="pillars-grid-top">
          {pillars.slice(0, 3).map((pillar, index) => (
            <div 
              key={index}
              className="reveal pillar-card"
              style={{
                transitionDelay: pillar.delay,
                background: 'var(--white)',
                padding: '48px 36px',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '460px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Number watermark */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                fontWeight: 700,
                color: 'rgba(184,149,58,0.08)',
                lineHeight: 1,
                pointerEvents: 'none'
              }}>
                {pillar.number}
              </div>

              {/* Arabic text */}
              <div style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '2.5rem',
                color: 'var(--gold)',
                marginBottom: '8px',
                direction: 'rtl',
                lineHeight: 1.2
              }}>
                {pillar.arabic}
              </div>

              {/* Transliteration */}
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '20px'
              }}>
                {pillar.transliteration}
              </div>

              {/* English title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--green-deep)',
                marginBottom: '16px',
                fontWeight: 700
              }}>
                {pillar.title}
              </h3>

              {/* Description */}
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                flex: 1
              }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '800px',
          margin: '0 auto'
        }} className="pillars-grid-bottom">
          {pillars.slice(3, 5).map((pillar, index) => (
            <div 
              key={index}
              className="reveal pillar-card"
              style={{
                transitionDelay: pillar.delay,
                background: 'var(--white)',
                padding: '48px 36px',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '460px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Number watermark */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                fontWeight: 700,
                color: 'rgba(184,149,58,0.08)',
                lineHeight: 1,
                pointerEvents: 'none'
              }}>
                {pillar.number}
              </div>

              {/* Arabic text */}
              <div style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '2.5rem',
                color: 'var(--gold)',
                marginBottom: '8px',
                direction: 'rtl',
                lineHeight: 1.2
              }}>
                {pillar.arabic}
              </div>

              {/* Transliteration */}
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '20px'
              }}>
                {pillar.transliteration}
              </div>

              {/* English title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--green-deep)',
                marginBottom: '16px',
                fontWeight: 700
              }}>
                {pillar.title}
              </h3>

              {/* Description */}
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                flex: 1
              }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FivePillars;
