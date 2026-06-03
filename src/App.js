import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Education      from './components/Education';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Achievements   from './components/Achievements';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import { FiArrowUp }  from 'react-icons/fi';
import './App.css';

const Bubbles = () => (
  <div className="bubbles-container">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="bubble"></div>
    ))}
  </div>
);

function AppContent() {
  const { isDark } = useTheme();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <Bubbles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
      <button
        className={`scroll-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FiArrowUp />
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;