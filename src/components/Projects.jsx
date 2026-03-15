import ProjectCard from './ProjectCard.jsx';

// Componente que muestra los proyectos destacados
const Projects = () => {
  // Array con la información de los proyectos
  // Para agregar más proyectos, descomenta los bloques comentados y rellena los datos
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
      <h2>Proyectos Destacados</h2>
      {/* Mapeo de proyectos usando el componente ProjectCard */}
      <div className="grid-proyectos">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
