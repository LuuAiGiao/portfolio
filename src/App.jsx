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
    setActiveSection(ref.current.id);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sectionRefs = [
      homeRef,
      aboutRef,
      educationRef,
      skillRef,
      projectsRef,
      contactRef,
    ];

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
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
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={educationRef} id="education">
          <Education />
        </div>
        <div ref={skillRef} id="skill">
          <Skill />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>

    </>
  );
}

export default App;