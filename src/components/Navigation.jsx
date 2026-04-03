import React, { useState, useEffect } from 'react';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className={`nav-wrap ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <nav>
            <a href="/" className="nav-logo">
              <span className="nav-logo-en">Foundation for Peace & Justice</span>
              <span className="nav-logo-ar">مؤسسة السلام والعدالة</span>
            </a>

            <ul className="nav-links">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About Us
                  <svg viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 7L1 3h8z"/>
                  </svg>
                </a>
                <div className="dropdown">
                  <a href="#who-we-are">Who We Are</a>
                  <a href="#vision">Vision & Mission</a>
                  <a href="#faith">Our Faith</a>
                  <a href="#story">Founding Story</a>
                  <a href="#transparency">Transparency</a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#programmes" className="nav-link">
                  Programmes
                  <svg viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 7L1 3h8z"/>
                  </svg>
                </a>
                <div className="dropdown">
                  <a href="#relief">Emergency Relief</a>
                  <a href="#justice">Justice & Advocacy</a>
                  <a href="#education">Islamic Education</a>
                  <a href="#environment">Environment</a>
                  <a href="#development">Development</a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#impact" className="nav-link">Our Impact</a>
              </li>
              <li className="nav-item">
                <a href="#faith" className="nav-link">Our Faith</a>
              </li>
              <li className="nav-item">
                <a href="#news" className="nav-link">News</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Get Involved
                  <svg viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 7L1 3h8z"/>
                  </svg>
                </a>
                <div className="dropdown">
                  <a href="#donate">Donate</a>
                  <a href="#volunteer">Volunteer</a>
                  <a href="#partner">Partner With Us</a>
                  <a href="#contact">Contact Us</a>
                </div>
              </li>
            </ul>

            <a href="#donate" className="nav-cta">DONATE NOW</a>

            <button 
              className="nav-hamburger" 
              id="hamburger" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobileNav">
        <a href="#about" onClick={closeMobileMenu}>About Us</a>
        <div className="m-eyebrow">Programmes</div>
        <a href="#relief" onClick={closeMobileMenu}>Emergency Relief</a>
        <a href="#justice" onClick={closeMobileMenu}>Justice & Advocacy</a>
        <a href="#education" onClick={closeMobileMenu}>Islamic Education</a>
        <a href="#environment" onClick={closeMobileMenu}>Environment</a>
        <div className="m-eyebrow">More</div>
        <a href="#impact" onClick={closeMobileMenu}>Our Impact</a>
        <a href="#news" onClick={closeMobileMenu}>News</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        <a href="#donate" className="m-cta" onClick={closeMobileMenu}>☪ Donate Now</a>
      </div>
    </>
  );
}

export default Navigation;
