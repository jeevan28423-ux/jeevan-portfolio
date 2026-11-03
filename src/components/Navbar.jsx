
import { useEffect, useState } from 'react';

import '../styles/navbar.css';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

function Navbar({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState('home');

  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">

      <a
        href="#home"
        className="navbar-logo"
        onClick={() => setActiveSection('home')}
      >
        Jeevan<span>.A</span>
      </a>

      <nav className="navbar-links">
        {items.map((item) => {
          const section = item.href.substring(1);

          return (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === section ? 'active' : ''}
              aria-current={
                activeSection === section ? 'location' : undefined
              }
              onClick={() => setActiveSection(section)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="navbar-actions">

        <ThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        <Button
          text="Let's Talk"
          href="#contact"
          className="navbar-cta"
        />

      </div>

    </header>
  );
}

export default Navbar;
