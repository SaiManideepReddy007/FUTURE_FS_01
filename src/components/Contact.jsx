import React, { useState, useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const contacts = [
  { icon: <FiMail />,     label: 'Email',    value: 'gujjulasaimanideepreddy@gmail.com', href: 'mailto:gujjulasaimanideepreddy@gmail.com' },
  { icon: <FiPhone />,    label: 'Phone',    value: '+91-8309596136', href: 'tel:+918309596136' },
  { icon: <FiMapPin />,   label: 'Location', value: 'Hyderabad, India', href: null },
  { icon: <FiGithub />,   label: 'GitHub',   value: 'SaiManideepReddy007', href: 'https://github.com/SaiManideepReddy007' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'sai-manideep-reddy-gujjula', href: 'https://www.linkedin.com/in/sai-manideep-reddy-gujjula-214390341/' },
];

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sub  = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:gujjulasaimanideepreddy@gmail.com?subject=${sub}&body=${body}`);
    setSent(true);
    setForm({ name:'', email:'', subject:'', message:'' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <p className="section-subtitle">Open to opportunities, collaborations, or just a chat!</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              I'm actively looking for internship and entry-level opportunities.
              If you have a project, want to collaborate, or just want to say hi
              — my inbox is always open!
            </p>
            <div className="contact-links">
              {contacts.map((c, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <p className="contact-label">{c.label}</p>
                    {c.href
                      ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'}
                           rel="noreferrer" className="contact-value">{c.value}</a>
                      : <p className="contact-value">{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            {sent && <div className="sent-msg">✅ Opening your email client...</div>}
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="john@example.com" required
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?"
                value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Your message here..." required
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;