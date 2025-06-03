// import React from 'react';
// import { FiGithub, FiEye, FiUsers, FiCode } from 'react-icons/fi';
// import './ProjectDetailCard.scss';

// const ProjectDetailCard = ({ project }) => {
//   return (
//     <div className={`project-detail-card ${project.type}-card`}>
//       {/* Header */}
//       <div className="card-header">
//         <div className="card-badge pixel-font">
//           {project.type === 'team' ? <FiUsers size={14} /> : <FiCode size={14} />}
//           {project.type.toUpperCase()}
//         </div>

//         <h3 className="card-title pixel-font">{project.title}</h3>
//         <p className="project-role pixel-font">{project.role}</p>
//       </div>

//       {/* Content */}
//       <div className="card-content">
//         <div className="features-section">
//           <h4 className="pixel-font">MY CONTRIBUTIONS</h4>
//           <div className="features-grid">
//             {project.features.map((feature, i) => (
//               <div key={i} className="feature-item pixel-font">
//                 <span className="feature-icon">◈</span>
//                 <p>{feature}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="tech-section">
//           <h4 className="pixel-font">TECHNOLOGIES USED</h4>
//           <div className="tech-tags">
//             {project.techs.map(tech => (
//               <span key={tech} className="pixel-font">{tech}</span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="card-footer">
//         {project.githubLink && (
//           <a 
//             href={project.githubLink} 
//             target="_blank" 
//             rel="noreferrer"
//             className="project-link"
//           >
//             <FiGithub className="icon" />
//             <span>View Code</span>
//           </a>
//         )}
//         {project.demoLink && (
//           <a 
//             href={project.demoLink} 
//             target="_blank" 
//             rel="noreferrer"
//             className="project-link"
//           >
//             <FiEye className="icon" />
//             <span>Live Demo</span>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailCard;
import React from 'react';
import { FiGithub, FiEye, FiUsers, FiCode } from 'react-icons/fi';
import './ProjectDetailCard.scss';

const ProjectDetailCard = ({ project }) => {
  return (
    <div className={`project-detail-card ${project.type}-card`}>
      {/* Header */}
      <div className="card-header">
        <div className="card-badge pixel-font">
          {project.type === 'team' ? <FiUsers size={14} /> : <FiCode size={14} />}
          {project.type.toUpperCase()}
        </div>

        <h3 className="card-title pixel-font">{project.title}</h3>
        <p className="project-role pixel-font">{project.role}</p>
      </div>

      {/* Content */}
      <div className="card-content">
        {/* Project Overview Section */}
        <div className="overview-section">
          <h4 className="pixel-font">PROJECT OVERVIEW</h4>
          <div className="overview-container">
            <div className="overview-image">
              <img
                src={project.thumbnail}
                alt={`${project.title} Overview`}
                onError={(e) => e.target.src = '/fallback-project.jpg'}
              />
            </div>
            <div className="overview-text">
              <p>{project.overview}</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h4 className="pixel-font">MY CONTRIBUTIONS</h4>
          <div className="features-grid">
            {project.features.map((feature, i) => {
              // Tách phần title và description bằng dấu ":"
              const [title, ...descriptionParts] = feature.split(':');
              const description = descriptionParts.join(':').trim();

              return (
                <div key={i} className="feature-item pixel-font">
                  <span className="feature-icon">◈</span>
                  <p>
                    <strong>{title}:</strong> {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Section */}
        <div className="tech-section">
          <h4 className="pixel-font">TECHNOLOGIES USED</h4>
          <div className="tech-tags">
            {project.techs.map(tech => (
              <span key={tech} className="pixel-font">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <FiGithub className="icon" />
            <span>View Code</span>
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <FiEye className="icon" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailCard;