import React from 'react';

function Newsletter() {
  return (
    <section style={{
      background: 'var(--gold-pale)',
      padding: '64px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--green-deep)',
              marginBottom: '8px'
            }}>
              Stay Connected with FPJ
            </h3>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem'
            }}>
              Receive updates on our programmes, Islamic reflections, and news from the field.
            </p>
          </div>

          <div style={{
            flex: '1 1 400px',
            display: 'flex',
            gap: '12px'
          }}>
            <input 
              type="email" 
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '14px 20px',
                fontSize: '0.95rem',
                border: '1px solid rgba(184,149,58,0.3)',
                borderRadius: '2px',
                background: 'var(--white)',
                color: 'var(--text-body)',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gold)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(184,149,58,0.3)'}
            />
            <button 
              type="button"
              style={{
                padding: '14px 28px',
                background: 'var(--green-deep)',
                color: 'var(--white)',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--green-mid)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--green-deep)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
