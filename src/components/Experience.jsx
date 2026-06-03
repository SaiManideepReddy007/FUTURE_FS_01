import React, { useEffect, useRef, useState } from 'react';
import { FiCode, FiShield, FiMonitor } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    icon: <FiCode />,
    role: 'Full Stack Web Development Intern',
    company: 'Future Interns',
    duration: 'May 2026 – Present',
    type: 'Virtual Internship',
    color: '#4facfe',
    points: [
      'Building full stack web applications using MERN stack',
      'Working on real-world projects to enhance development skills',
      'Learning industry best practices for web development',
    ],
  },
  {
    icon: <FiMonitor />,
    role: 'Web Development Intern',
    company: 'VaultofCodes',
    duration: 'May 2026 – Present',
    type: 'Virtual Internship',
    color: '#00f2fe',
    points: [
      'Developing personal portfolio website using React.js',
      'Applying HTML, CSS, JavaScript concepts in real projects',
      'Building responsive and user-friendly web interfaces',
    ],
  },
  {
    icon: <FiShield />,
    role: 'Cyber Security & Ethical Hacking Intern',
    company: 'Supraja Technologies',
    duration: 'Ongoing',
    type: 'Virtual Internship',
    color: '#a78bfa',
    points: [
      'Gaining knowledge of cybersecurity concepts and network security',
      'Learning ethical hacking and basic penetration testing methods',
      'Understanding system vulnerabilities and cyber threats',
    ],
  },
];

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Internship <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle">Real-world experience through virtual internships.</p>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-item" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="exp-dot"
                style={{ background: exp.color, boxShadow: `0 0 14px ${exp.color}` }}>
              </div>
              <div className="exp-card card">
                <div className="exp-header">
                  <div className="exp-icon" style={{ color: exp.color }}>{exp.icon}</div>
                  <div className="exp-info">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-badge"
                    style={{ borderColor: exp.color, color: exp.color }}>
                    {exp.type}
                  </span>
                </div>
                <div className="exp-meta">
                  <span className="meta-tag">🗓️ {exp.duration}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>
                      <span className="point-dot" style={{ background: exp.color }}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;