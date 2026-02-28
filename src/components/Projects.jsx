// Componente que muestra los proyectos destacados
const Projects = () => {
  // Array con la información de los proyectos
  const projects = [
    {
      title: 'Nombre del Proyecto',
      description: 'Descripción breve de la tecnología usada y el problema resuelto.',
      tags: ['React', 'API']
    },
    {
      title: 'Nombre del proyecto',
      description: 'Optimización de procesos internos con bases de datos SQL.',
      tags: ['Node.js', 'PostgreSQL']
    },
    {
      title: 'Nombre del proyecto',
      description: 'Optimización de procesos internos con bases de datos SQL.',
      tags: ['Node.js', 'PostgreSQL']
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <h2>Proyectos Destacados</h2>
      <div className="grid-proyectos">
        {/* Mapeo de proyectos para crear tarjetas dinámicamente */}
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="card-img"></div>
            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {/* Mapeo de etiquetas de tecnologías */}
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
