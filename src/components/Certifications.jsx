import React, { useEffect, useRef, useState } from 'react';
import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const certs = [
  { icon: '💻', title: 'C Programming & Python', issuer: 'Code Tantra',         color: '#4facfe' },
  { icon: '🐧', title: 'Linux Fundamentals',      issuer: 'Red Hat',             color: '#ef4444' },
  { icon: '🐍', title: 'Python Programming',      issuer: 'Cisco',               color: '#00f2fe' },
  { icon: '🗄️', title: 'DBMS & SQL',              issuer: 'Infosys Springboard', color: '#a78bfa' },
];

const Certifications = () => {
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
    <section id="certifications" className="certifications" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Courses & <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Verified learning from reputed platforms.</p>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div className="cert-card card" key={i}
              style={{ animationDelay: `${i * 0.1}s`, borderTop: `3px solid ${c.color}` }}>
              <div className="cert-top">
                <div className="cert-icon-wrap" style={{ background: `${c.color}18` }}>
                  <span className="cert-emoji">{c.icon}</span>
                </div>
                <FiAward style={{ color: c.color, fontSize: '1.3rem' }} />
              </div>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <span className="cert-status" style={{ color: c.color }}>✅ Certified</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;