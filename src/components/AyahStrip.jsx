import React, { useState, useEffect } from 'react';

function AyahStrip() {
  const ayahs = [
    { 
      text: '"You are the best nation produced for mankind — you enjoin what is right, forbid what is wrong, and believe in Allah."', 
      ref: 'Surah Ali Imran, 3:110' 
    },
    { 
      text: '"Verily, Allah does not change the condition of a people until they change what is within themselves."', 
      ref: 'Surah Ar-Ra\'d, 13:11' 
    },
    { 
      text: '"Read in the name of your Lord who created — He taught by the pen, taught man what he did not know."', 
      ref: 'Surah Al-Alaq, 96:1-5' 
    },
    { 
      text: '"He has set up the balance, so that you may not exceed the measure."', 
      ref: 'Surah Ar-Rahman, 55:7-8' 
    },
    { 
      text: '"Whoever does an atom\'s weight of good will see it."', 
      ref: 'Surah Az-Zalzalah, 99:7' 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ayahs.length);
        setFade(true);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, [ayahs.length]);

  return (
    <section className="ayah-strip">
      <div className="container">
        <div className="ayah-strip-inner">
          <div 
            className="ayah-text" 
            style={{ 
              opacity: fade ? 1 : 0, 
              transition: 'opacity 0.4s ease' 
            }}
          >
            {ayahs[currentIndex].text}
          </div>
          <div 
            className="ayah-ref" 
            style={{ 
              opacity: fade ? 1 : 0, 
              transition: 'opacity 0.4s ease' 
            }}
          >
            {ayahs[currentIndex].ref}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AyahStrip;
