import SpotlightCard from '../../../Reactbits/SpotlightCard/SpotlightCard';
import './EducationCard.scss';

function EducationCard({ institution, major, duration, description }) {
  return (
    <SpotlightCard className="education-card" spotlightColor="rgba(127, 85, 177, 0.3)">
      <div className="education-header pixel-font">
        <span className="education-icon">🎓</span>
        <h3 className="education-institution">{institution}</h3>
      </div>
      
      <div className="education-timeline">
        {/* <div className="timeline-dot"></div> */}
        <div className="timeline-line"></div>
      </div>

      <div className="education-content">
        <p className="education-major pixel-font">{major}</p>
        <p className="education-duration pixel-font">{duration}</p>
        <div className="education-description">
          {description.split('\n').map((line, i) => (
            <p key={i} className="description-line pixel-font">
              <span className="bullet">◆</span> {line}
            </p>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default EducationCard;