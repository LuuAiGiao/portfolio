import './About.scss';
import CircularGallery  from '../../../Reactbits/CircularGallery/CircularGallery';
import SparklingIcon from '../../assets/icons/SparklingIcon.svg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-gallery">
          <h2 className="section-title-about-me pixel-font"><img src={SparklingIcon} alt="heart" className="sparkling-icon" />About Me <img src={SparklingIcon} alt="heart" className="sparkling-icon" /></h2>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          <div className="about-facts pixel-font">
            <p><strong>Year of Birth:</strong> 2003</p>
            <p><strong>Hobbies:</strong> Badminton, UI design, pixel art, astronomy</p>
            <p><strong>Working style:</strong> Fast learner, detail-focused</p>
          </div>
        </div>
        <div className="about-text">
          <p className="about-description pixel-font">
            I’m a front-end developer with a fresh degree and a focused mind. My strongest tools are React, TypeScript, and an eye for user experience — I like making things simple, smooth, and pixel-perfect (literally).
          </p>
          <p className="about-description pixel-font">
            I may not have years of experience, but I bring curiosity, speed, and consistency to the table. I actively leverage AI tools to speed up development, debug faster, and automate repetitive tasks — which helps me focus more on delivering quality.
          </p>
          <p className="about-description pixel-font">
            While my English is at a basic level, I’m actively improving it to collaborate better with international teams.
          </p>
          <p className="about-description pixel-font">
            If you're looking for someone who grows fast and codes with care, I’d love to be part of your team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;