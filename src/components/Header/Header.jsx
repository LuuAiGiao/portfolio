import './Header.scss';

function Header() {
  return (
    <header className="pixel-header">
      <nav className="pixel-nav">
        <div className="pixel-nav-item active pixel-font">Home</div>
        <div className="pixel-nav-item pixel-font">About Me</div>
        <div className="pixel-nav-item pixel-font">Education</div>
        <div className="pixel-nav-item pixel-font">Skill</div>
        <div className="pixel-nav-item pixel-font">Projects</div>
        <div className="pixel-nav-item pixel-font">Contact</div>
      </nav>
    </header>
  );
};

export default Header;