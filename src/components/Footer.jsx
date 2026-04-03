import React from 'react';

function Footer() {
  return (
    <footer id="contact" style={{
      background: 'var(--green-deep)',
      color: 'rgba(255,255,255,0.7)',
      padding: '80px 0 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              color: 'var(--white)',
              marginBottom: '8px'
            }}>
              Foundation for Peace & Justice
            </h4>
            <span style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '1.1rem',
              color: 'var(--gold)',
              direction: 'rtl',
              display: 'block',
              marginBottom: '16px'
            }}>
              مؤسسة السلام والعدالة
            </span>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginBottom: '16px'
            }}>
              A faith-based humanitarian organisation serving humanity through the light of the 
              Quran and the Sunnah of Prophet Muhammad ﷺ. Founded in Bangladesh, reaching the world.
            </p>
            <p style={{
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.85rem',
              marginBottom: '20px'
            }}>
              "Change her story. Change the world.<br/>
              Change their knowledge. Change everything."
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['f', 'in', '𝕏', 'li', '▶'].map((icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  title={['Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'YouTube'][idx]}
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    color: 'var(--gold)',
                    fontSize: '1.1rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--green-deep)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px'
            }}>
              About Us
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { text: 'Who We Are', href: '#about' },
                { text: 'Vision & Mission', href: '#vision' },
                { text: 'Our Faith', href: '#faith' },
                { text: 'Theory of Change', href: '#toc' },
                { text: 'Governance', href: '#governance' },
                { text: 'Transparency', href: '#transparency' },
                { text: 'News & Insights', href: '#news' }
              ].map((link, idx) => (
                <li key={idx} style={{ marginBottom: '10px' }}>
                  <a 
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px'
            }}>
              Our Programmes
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { text: 'Emergency Relief', href: '#relief' },
                { text: 'Justice & Human Rights', href: '#justice' },
                { text: 'Islamic Education', href: '#education' },
                { text: 'Environmental Stewardship', href: '#environment' },
                { text: 'Community Development', href: '#development' },
                { text: 'Women & Children', href: '#women' },
                { text: 'Peacebuilding', href: '#peace' }
              ].map((link, idx) => (
                <li key={idx} style={{ marginBottom: '10px' }}>
                  <a 
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Donate */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px'
            }}>
              Contact & Donate
            </h5>
            <p style={{ marginBottom: '12px' }}>
              <strong>Founder:</strong><br/>
              Mohammad Salauddin Razzak
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Mobile:</strong><br/>
              <a 
                href="tel:+8801890099686"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                +880 1890 099 686
              </a>
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Email:</strong><br/>
              <a 
                href="mailto:salauddin.razzak@gmail.com"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                salauddin.razzak@gmail.com
              </a>
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Website:</strong><br/>
              <a 
                href="https://www.foundationpj.org"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                www.foundationpj.org
              </a>
            </p>
            <a 
              href="#donate"
              style={{
                display: 'inline-block',
                background: 'var(--gold)',
                color: 'var(--white)',
                padding: '12px 24px',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ☪ &nbsp;Donate Now
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '32px 0',
          fontSize: '0.85rem'
        }}>
          <p>
            ©2026 The Foundation for Peace & Justice. All rights reserved.<br/>
            Registered in Bangladesh. Organisation No. [Pending Registration] | www.foundationpj.org
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { text: 'Privacy Policy', href: '#privacy' },
              { text: 'Terms of Use', href: '#terms' },
              { text: 'Donor Charter', href: '#donor' },
              { text: 'Safeguarding', href: '#safeguarding' }
            ].map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                style={{
                  color: 'inherit',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
