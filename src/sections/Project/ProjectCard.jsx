import { FiGithub, FiEye, FiUsers, FiCode } from 'react-icons/fi';
import './ProjectCard.scss';

const ProjectCard = ({ 
  project, 
  onClick,
  isDetailView = false 
}) => {
  return (
    <div 
      className={`project-card ${project.type}-card ${isDetailView ? 'detail-view' : ''}`}
      onClick={!isDetailView ? onClick : null}
    >
      {/* Badge */}
      <div className="card-badge pixel-font">
        {project.type === 'team' ? <FiUsers size={14} /> : <FiCode size={14} />}
        {project.type.toUpperCase()}
      </div>
      
      {/* Thumbnail */}
      <div className="card-thumbnail">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          onError={(e) => e.target.src = '/fallback-project.jpg'}
        />
      </div>
      
      {/* Content */}
      <div className="card-content">
        <h3 className="title pixel-font">{project.title}</h3>
        <p className="project-role pixel-font">{project.role}</p>
        
        {isDetailView && (
          <>
            <div className="features-list">
              <h4 className="pixel-font">MY CONTRIBUTIONS:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i} className="pixel-font">
                    <span className="pixel-bullet">◈</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="tech-tags">
              {project.techs.map(tech => (
                <span key={tech} className="pixel-font">{tech}</span>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Footer */}
      <div className="card-footer">
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            <FiGithub className="icon" />
          </a>
        )}
        {project.demoLink && (
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            <FiEye className="icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;