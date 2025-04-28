import React from 'react';
import '../styles/footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/help">Help</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="footer-copy">© Whisk It Up 2025</div>
    </footer>
  );
}

export default Footer;
