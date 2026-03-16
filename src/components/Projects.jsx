import ProjectCard from './ProjectCard.jsx';
import SectionBadge from './SectionBadge.jsx';

// Componente que muestra los proyectos destacados
const Projects = () => {
  // Para agregar proyectos, descomenta los bloques comentados y rellena los datos
  const projects = [
    {
      title: 'Nombre del Proyecto',
      description: 'Descripción breve de la tecnología usada y el problema resuelto.',
      tags: ['tecnologia1', 'tecnologia2'],
      link: ''
    },
    /*{
      title: 'Nombre del proyecto',
      description: 'Optimización de procesos internos con bases de datos SQL.',
      tags: ['Node.js', 'PostgreSQL'],
      link: ''
    }*/
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-header">
        <h2>Proyectos Destacados</h2>
        <SectionBadge text="🚧 En construcción" />
      </div>
      <p className="proyectos-aviso">Esta sección está siendo actualizada. Pronto encontrarás mis proyectos aquí.</p>
      <div className="grid-proyectos">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
