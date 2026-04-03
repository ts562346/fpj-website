import React from 'react';

function ImpactStrip() {
  const impactData = [
    { number: '2026', label: 'Year Founded' },
    { number: '20', label: 'Pilot Schools — Year 1' },
    { number: '500+', label: 'Schools by Year 3' },
    { number: '8,000+', label: 'Certifications by 2029' }
  ];

  return (
    <section className="impact-strip">
      <div className="container">
        <div className="impact-grid">
          {impactData.map((item, index) => (
            <div key={index} className="impact-item">
              <span className="impact-number">{item.number}</span>
              <span className="impact-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactStrip;
