import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Inventory Management System</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
