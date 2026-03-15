const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
