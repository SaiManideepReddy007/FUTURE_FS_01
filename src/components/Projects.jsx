import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiCode, FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1, icon: '🛒', color: '#4facfe',
    title: 'Shopping Cart',
    description: 'A dynamic Shopping Cart app with real-time cart management built with vanilla JavaScript.',
    longDesc: 'A Shopping Cart web application developed using HTML, CSS, and JavaScript. Users can browse products, add or remove items from the cart, and view total cost dynamically. Demonstrates DOM manipulation, event handling, and responsive UI design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Browse and select products',
      'Add / remove items dynamically',
      'Real-time total cost calculation',
      'Responsive user interface',
      'DOM manipulation & event handling',
    ],
    github: null, live: null,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const openModal  = (p) => { setSelected(p);    document.body.style.overflow = 'hidden'; };
const closeModal = ()  => { setSelected(null); document.body.style.overflow = '';       };
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've <span className="gradient-text">Built.</span></h2>
        <p className="section-subtitle">Hands-on projects that show my skills in action.</p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card card" key={p.id}
              style={{ animationDelay: `${i * 0.15}s` }}
              onClick={() => openModal(p)}>
              <div className="project-icon-wrap" style={{ background: `${p.color}18` }}>
                <span className="project-emoji">{p.icon}</span>
              </div>
              <div className="project-num" style={{ color: p.color }}>0{p.id}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <span className="view-details">View Details →</span>
            </div>
          ))}

          <div className="project-card card project-coming">
            <FiCode size={38} style={{ color: 'var(--text-muted)', marginBottom: '14px' }} />
            <h3 style={{ color: 'var(--text-secondary)' }}>More Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '8px' }}>
              Currently working on new projects...
            </p>
          </div>
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box card" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}></button>  
            <div className="modal-header">
              <span className="modal-emoji">{selected.icon}</span>
              <div>
                <p className="section-label" style={{ margin: 0 }}>Project Case Study</p>
                <h2 className="modal-title">{selected.title}</h2>
              </div>
            </div>
            <p className="modal-desc">{selected.longDesc}</p>
            <div className="modal-grid">
              <div>
                <h4>Key Features</h4>
                <ul className="modal-features">
                  {selected.features.map((f, i) => (
                    <li key={i}><span style={{ color: selected.color }}>▸</span> {f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Technologies Used</h4>
                <div className="modal-tags">
                  {selected.tags.map(t => (
                    <span key={t} className="tag"
                      style={{ borderColor: selected.color, color: selected.color }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {(selected.github || selected.live) && (
              <div className="modal-links">
                {selected.github && <a href={selected.github} target="_blank" rel="noreferrer" className="btn-outline"><FiGithub /> Code</a>}
                {selected.live   && <a href={selected.live}   target="_blank" rel="noreferrer" className="btn-primary"><FiExternalLink /> Live</a>}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;