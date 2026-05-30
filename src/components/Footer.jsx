import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Globe, Mail, Link as LinkIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Video className="logo-icon" size={28} />
            <span className="logo-text text-gradient">SignSpeak AI</span>
          </Link>
          <p className="footer-tagline">
            Transforming Indian Sign Language into Digital Communication.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><Mail size={20} /></a>
            <a href="#" className="social-link"><LinkIcon size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h3>Quick Links</h3>
            <Link to="/recognize">Start Recognition</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/learning">Learn ISL</Link>
          </div>
          <div className="link-group">
            <h3>Legal</h3>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SignSpeak AI. All rights reserved.</p>
        <p>Built with ❤️ for accessibility.</p>
      </div>
    </footer>
  );
};

export default Footer;
