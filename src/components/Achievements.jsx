import React, { useEffect, useRef, useState } from 'react';
import { FiZap } from 'react-icons/fi';
import './Achievements.css';

const achievements = [
  {
    icon: '🏆', color: '#4facfe',
    title: 'Ethical Hacking Hackathon',
    org: 'Supraja Technologies',
    desc: 'Participated in a hackathon on Ethical Hacking and Cyber Security, applying penetration testing concepts and security analysis skills.',
  },
  {
    icon: '💡', color: '#a78bfa',
    title: 'Code-a-Thon',
    org: 'Computer Society of India (CSI)',
    desc: 'Participated in CSI Code-a-Thon — a competitive coding event challenging problem-solving skills and algorithmic thinking under time constraints.',
  },
];

const Achievements = () => {
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
    <section id="achievements" className="achievements" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">Achievements</p>
        <h2 className="section-title">Hackathons & <span className="gradient-text">Events</span></h2>
        <p className="section-subtitle">Competitions and events I've participated in.</p>
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <div className="ach-card card" key={i}
              style={{ animationDelay: `${i*0.15}s`, borderLeft: `3px solid ${a.color}` }}>
              <div className="ach-top">
                <span className="ach-emoji">{a.icon}</span>
                <FiZap style={{ color: a.color, fontSize: '1.2rem' }} />
              </div>
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-org" style={{ color: a.color }}>{a.org}</p>
              <p className="ach-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;