import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <span>A faith-based humanitarian organisation | Est. 2026 | Dhaka, Bangladesh</span>
        <div className="top-bar-right">
          <a href="#transparency">Transparency</a>
          <a href="#safeguarding">Safeguarding</a>
          <a href="tel:+8801890099686">☎ +880 1890 099 686</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
