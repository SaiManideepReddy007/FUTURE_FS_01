import React, { useEffect, useRef, useState } from 'react';
import {
  SiHtml5, SiJavascript, SiReact,

  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava, FaCode, FaCss3Alt } from 'react-icons/fa';
import './Skills.css';

const skills = [
  { name: 'HTML5',       icon: <SiHtml5 />,       color: '#e34f26' },
  { name: 'CSS3',  icon: <FaCss3Alt />,  color: '#264de4' },
  { name: 'JavaScript',  icon: <SiJavascript />,  color: '#f7df1e' },
  { name: 'React.js',    icon: <SiReact />,       color: '#61dafb' },
  { name: 'Node.js',     icon: <SiNodedotjs />,   color: '#339933' },
  { name: 'Express.js',  icon: <SiExpress />,     color: '#aaaaaa' },
  { name: 'MongoDB',     icon: <SiMongodb />,     color: '#47a248' },
  { name: 'SQL / MySQL', icon: <SiMysql />,       color: '#4479a1' },
  { name: 'Python',      icon: <SiPython />,      color: '#3776ab' },
  { name: 'Java',        icon: <FaJava />,        color: '#f89820' },
  { name: 'Git',         icon: <SiGit />,         color: '#f05032' },
  { name: 'GitHub',      icon: <SiGithub />,      color: '#ffffff' },
  { name: 'DSA',         icon: <FaCode />,        color: '#4facfe' },
];

const Skills = () => {
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
    <section id="skills" className="skills" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">My Tech Stack</p>
        <h2 className="section-title">
          Technologies and <span className="gradient-text">Tools I use.</span>
        </h2>
        <p className="section-subtitle">
          Skills built through projects, courses and internships.
        </p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card card" key={skill.name}
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;