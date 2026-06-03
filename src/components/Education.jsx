import React, { useEffect, useRef, useState } from 'react';
import { FiAward, FiBook, FiCheckCircle } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    icon: <FiAward />,
    degree: 'B.Tech in CSE (Data Science)',
    school: 'Vidya Jyothi Institute of Technology',
    location: 'Hyderabad, India',
    year: '2024 – 2028',
    grade: 'CGPA: 8.52',
    status: '🟢 2nd Year — Ongoing',
    color: '#4facfe',
  },
  {
    icon: <FiBook />,
    degree: 'Intermediate (MPC) +2',
    school: 'SR Junior College',
    location: 'Karimnagar, India',
    year: '2022 – 2024',
    grade: 'Percentage: 99.2%',
    status: '✅ Completed',
    color: '#00f2fe',
  },
  {
    icon: <FiCheckCircle />,
    degree: 'Secondary School Certificate (SSC)',
    school: 'ZPHS Shanigaram',
    location: 'Siddipet, India',
    year: 'Completed May 2022',
    grade: 'GPA: 10.0',
    status: '✅ Completed',
    color: '#a78bfa',
  },
];

const Education = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">Education</p>
        <h2 className="section-title">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-subtitle">My educational background and qualifications.</p>

        <div className="timeline">
          {education.map((edu, i) => (
            <div className="timeline-item" key={i}
              style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="timeline-dot"
                style={{ background: edu.color, boxShadow: `0 0 14px ${edu.color}` }}>
              </div>
              <div className="timeline-card card">
                <div className="timeline-header">
                  <div className="tl-icon" style={{ color: edu.color }}>
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-school">{edu.school}</p>
                  </div>
                </div>
                <div className="timeline-meta">
                  <span className="meta-tag">📅 {edu.year}</span>
                  <span className="meta-tag">📍 {edu.location}</span>
                  <span className="meta-tag grade-tag">{edu.grade}</span>
                </div>
                <p className="edu-status" style={{ color: edu.color }}>
                  {edu.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;