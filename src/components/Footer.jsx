import './Footer.css';

/**
 * Footer component with links and copyright information
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Infiniti InfoWays</span>
            </div>
            <p className="footer-description">
              We Build Smart Digital Solutions 
              for Your Business
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/category/coding-ai">Contact us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#about">Web development</a></li>
              <li><a href="#contact">Mobile App development</a></li>
              <li><a href="#privacy">UI / UX Design</a></li>
              <li><a href="#terms">Digital Marketing</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2026 Infiniti Infoway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;