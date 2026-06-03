import React, { useEffect, useRef, useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import './About.css';

const stats = [
  { value: '1+',   label: 'Projects'    },
  { value: '3',    label: 'Internships' },
  { value: '8.52', label: 'CGPA'        },
];

const About = () => {
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
    <section id="about" className="about" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">About Me</p>
        <h2 className="section-title">
          Passionate about code,<br />
          <span className="gradient-text">driven by curiosity.</span>
        </h2>

        <div className="about-grid">

          {/* Left: Code Window */}
          <div className="about-illustration">
            <div className="code-window">
              <div className="code-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="code-lines">
                <div className="code-line">
                  <span className="keyword">const</span>{' '}
                  <span className="var">developer</span> = {'{'}
                </div>
                <div className="code-line pl">
                  <span className="ckey">name</span>:{' '}
                  <span className="str">"Sai Manideep"</span>,
                </div>
                <div className="code-line pl">
                  <span className="ckey">college</span>:{' '}
                  <span className="str">"VJIT Hyderabad"</span>,
                </div>
                <div className="code-line pl">
                  <span className="ckey">stack</span>:{' '}
                  <span className="str">"MERN"</span>,
                </div>
                <div className="code-line pl">
                  <span className="ckey">passion</span>:{' '}
                  <span className="str">"Building Apps"</span>,
                </div>
                <div className="code-line pl">
                  <span className="ckey">status</span>:{' '}
                  <span className="str">"Learning 🚀"</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <p className="about-bio">
              Hello! I'm <strong>Gujjula Sai Manideep Reddy</strong>, a passionate
              CSE (Data Science) student at VJIT, Hyderabad. I have a strong
              interest in Full Stack Development and enjoy building responsive,
              user-friendly web applications.
            </p>
            <p className="about-bio">
              With a solid foundation in HTML, CSS, JavaScript, SQL, DBMS and OOPs,
              I'm actively enhancing my skills in React.js, Node.js and the MERN
              stack — committed to building innovative solutions and growing as
              a software professional.
            </p>

            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-card card" key={s.label}>
                  <strong className="gradient-text">{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;