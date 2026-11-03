import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './sections/hero';
import About from './sections/About';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Footer from './components/Footer';

import Background from './components/backgroundlines';
import AmbientBackground from './components/AmbientBackground';
import BackToTop from './components/BackToTop';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <>
      <AmbientBackground />
      <Background />

      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;