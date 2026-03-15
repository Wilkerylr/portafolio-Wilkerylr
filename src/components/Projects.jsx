<<<<<<< HEAD
// Componente que muestra los proyectos destacados
const Projects = () => {
  // Array con la información de los proyectos
=======
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
  const projects = [
    {
      title: 'Nombre del Proyecto',
      description: 'Descripción breve de la tecnología usada y el problema resuelto.',
<<<<<<< HEAD
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
=======
      tags: ['tecnologia1', 'tecnologia2'],
      link: ''
    },

    /*{
      title: 'Nombre del proyecto',
      description: 'Optimización de procesos internos con bases de datos SQL.',
      tags: ['Node.js', 'PostgreSQL'],
      link: ''
    }*/
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <h2>Proyectos Destacados</h2>
<<<<<<< HEAD
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
=======
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
        ))}
      </div>
    </section>
  );
};

export default Projects;
