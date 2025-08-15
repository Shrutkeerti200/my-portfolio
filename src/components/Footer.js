import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../css/Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-icons">
        <a href="https://github.com/Shrutkeerti200" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/shrutkeerti-sangolkar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:sangolkar.s@northeastern.edu" aria-label="Email">
          <FaEnvelope size={22} />
        </a>
        <a href="tel:+1 8573519673" aria-label="Phone">
          <FaPhoneAlt size={20} />
        </a>
      </div>
      <p className="footer-text">&copy; 2025 Shrutkeerti Sangolkar | All rights reserved</p>
    </footer>
  );
}

export default Footer;
