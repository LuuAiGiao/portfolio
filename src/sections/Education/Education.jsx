import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import './Education.scss';
import EducationIcon from '../../assets/icons/EducationIcon.svg';
import CertiIcon from '../../assets/icons/CertiIcon.svg';

function Education() {
  const educationData = [
    {
      institution: 'FPT University',
      major: 'Bachelor of Software Engineering',
      duration: '2021 - 2025',
      description: 'Honorable Student - Spring 2023\nHonorable Student - Summer 2023',
    },
  ];

  const certificationData = [
    { date: 'May 21, 2023', title: 'Software Development Lifecycle', provider: '(Coursera)' },
    // { date: 'Jan 18, 2023', title: 'Web Design for Everybody', provider: '(Coursera)' },
    { date: 'Oct, 2023', title: 'BootCamp Frontend Conquer ReactJS Technology', provider: '(FPT Software)' },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-column">
          <h3 className="column-title pixel-font"><img src={EducationIcon} alt="education" className="education-icon" />Education</h3>
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              major={edu.major}
              duration={edu.duration}
              description={edu.description}
            />
          ))}
        </div>
        <div className="certification-column">
          <h3 className="column-title pixel-font"><img src={CertiIcon} alt="certification" className="education-icon" />Certification</h3>
            <CertificationCard
              certifications={certificationData}
            />
        </div>
      </div>
    </section>
  );
}

export default Education;