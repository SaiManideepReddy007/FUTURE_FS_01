import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const roles = [
  'Computer Science Student',
  'Aspiring Full Stack Developer',
  'MERN Stack Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">

      {/* Left Social Sidebar */}
      <div className="hero-social">
        <a href="https://github.com/SaiManideepReddy007"
           target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/sai-manideep-reddy-gujjula-214390341/"
           target="_blank" rel="noreferrer"><FiLinkedin /></a>
        <a href="mailto:gujjulasaimanideepreddy@gmail.com"><FiMail /></a>
        <div className="social-line"></div>
      </div>

      <div className="hero-container">

        {/* Left: Text */}
        <div className="hero-content">
          <div className="hero-badge">✨ Open to Opportunities</div>

          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">
            Sai Manideep<br />
            <span className="gradient-text">Reddy Gujjula</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">
            A passionate CSE (Data Science) student from Hyderabad,
            building responsive web apps and growing into a Full Stack
            developer through hands-on projects and continuous learning.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#projects" className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}>
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="hero-avatar-wrap">
          <div className="avatar-ring-outer">
            <div className="avatar-ring-inner">
              <div className="avatar-circle">
                <span className="avatar-initials">Manideep</span>
                <div className="avatar-overlay">
                  <span>Full Stack</span>
                  <span className="avatar-dev">Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="avatar-badge-cgpa">
            <span>CGPA</span>
            <strong>8.52</strong>
          </div>
          <div className="avatar-badge-role">🎓 CSE Student</div>
          <div className="float-dot d1"></div>
          <div className="float-dot d2"></div>
          <div className="float-dot d3"></div>
        </div>

      </div>

      <div className="scroll-indicator"><FiArrowDown /></div>
    </section>
  );
};

export default Hero;