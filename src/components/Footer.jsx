import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">Manideep<span className="dot">.</span></div>
          <div className="footer-nav">
            {['home','about','skills','education','projects','contact'].map(id => (
              <a key={id} href={`#${id}`}
                onClick={e => { e.preventDefault(); scroll(id); }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <div className="footer-social">
            <a href="https://github.com/SaiManideepReddy007" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/sai-manideep-reddy-gujjula-214390341/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="mailto:gujjulasaimanideepreddy@gmail.com"><FiMail /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Sai Manideep Reddy Gujjula &nbsp;·&nbsp; Built with <FiHeart style={{ color:'#ef4444', display:'inline', verticalAlign:'middle' }} /> using React.js</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;