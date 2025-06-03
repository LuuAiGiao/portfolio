import SpotlightCard from '../../../Reactbits/SpotlightCard/SpotlightCard';
import './CertificationCard.scss';

function CertificationCard({ certifications }) {
  return (
    <SpotlightCard className="certification-group" spotlightColor="rgba(159, 122, 234, 0.3)">
      <div className="group-header pixel-font">MY CERTIFICATIONS</div>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="certification-content">
              <p className="certification-date pixel-font">{cert.date}</p>
              <h4 className="certification-title pixel-font">{cert.title}</h4>
              <p className="certification-provider pixel-font">{cert.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

export default CertificationCard;