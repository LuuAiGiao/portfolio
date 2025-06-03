import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Education from './sections/Education/Education';
import Skill from './sections/Skill/Skill';
import Projects from './sections/Project/Projects';
import Contact from './sections/Contact/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    const sections = [
      homeRef.current,
      aboutRef.current,
      educationRef.current,
      skillRef.current,
      projectsRef.current,
      contactRef.current,
    ].filter((ref) => ref !== null);

    sections.forEach((section) => {
      section.setAttribute('data-section', section.querySelector('div')?.id || section.id);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToSkill={() => scrollToSection(skillRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        activeSection={activeSection}
      />

      <div className="portfolio-container">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={skillRef}>
          <Skill />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;