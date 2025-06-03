import './About.scss';
import RollingGallery from '../../../Reactbits/RollingGallery/RollingGallery'; // Import RollingGallery
import CircularGallery  from '../../../Reactbits/CircularGallery/CircularGallery';
import me3 from '../../assets/images/me3.png';
import me4 from '../../assets/images/me4.jpg';
import me5 from '../../assets/images/me5.jpg';
import me6 from '../../assets/images/me6.jpg';
import me7 from '../../assets/images/me7.jpg';
import me8 from '../../assets/images/me8.jpg';
import me9 from '../../assets/images/me9.jpg';
import SparklingIcon from '../../assets/icons/SparklingIcon.svg';

function About() {
  // const myImages = [me3, me4, me5, me6, me7, me8, me9];
  return (
    <section id="about" className="about-section">
      {/* <h2 className="section-title pixel-font">About Me</h2> */}
      <div className="about-content">
        {/* Bên trái: RollingGallery với 2 ảnh */}
        <div className="about-gallery">
          <h2 className="section-title-about-me pixel-font"><img src={SparklingIcon} alt="heart" className="sparkling-icon" />About Me <img src={SparklingIcon} alt="heart" className="sparkling-icon" /></h2>
          
          {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />

          
        </div>

        {/* Bên phải: Thông tin */}
        <div className="about-text">
          <p className="about-description pixel-font">
            I’m a front-end developer with a fresh degree and a focused mind. My strongest tools are React, TypeScript, and an eye for user experience — I like making things simple, smooth, and pixel-perfect (literally).
          </p>
          <p className="about-description pixel-font">
            I may not have years of experience, but I bring curiosity, speed, and consistency to the table. If you're looking for someone who grows fast and codes with care, I’d love to be part of your team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;