import './Header.scss';

function Header({ scrollToHome, scrollToAbout, scrollToEducation, scrollToSkill, scrollToProjects, scrollToContact, activeSection }) {
  return (
    <header className="pixel-header">
      <nav className="pixel-nav">
        <div className={`pixel-nav-item ${activeSection === 'home' ? 'active' : ''} pixel-font`} onClick={scrollToHome}>
          Home
        </div>
        <div className={`pixel-nav-item ${activeSection === 'about' ? 'active' : ''} pixel-font`} onClick={scrollToAbout}>
          About Me
        </div>
        <div className={`pixel-nav-item ${activeSection === 'education' ? 'active' : ''} pixel-font`} onClick={scrollToEducation}>
          Education
        </div>
        <div className={`pixel-nav-item ${activeSection === 'skill' ? 'active' : ''} pixel-font`} onClick={scrollToSkill}>
          Skill
        </div>
        <div className={`pixel-nav-item ${activeSection === 'projects' ? 'active' : ''} pixel-font`} onClick={scrollToProjects}>
          Projects
        </div>
        <div className={`pixel-nav-item ${activeSection === 'contact' ? 'active' : ''} pixel-font`} onClick={scrollToContact}>
          Contact
        </div>
      </nav>
    </header>
  );
}

export default Header;