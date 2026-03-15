import { useGithubRepos } from '../hooks/useGithubRepos';

// Componente que muestra los repositorios de GitHub
const Repositories = () => {
  // Hook personalizado que obtiene los repositorios desde la API de GitHub
  const { repos, loading, error } = useGithubRepos('Wilkerylr');

  return (
    <section className="repositorios">
      <h2>Repositorios de GitHub</h2>
      <ul className="repositorios_list">
        {/* Mensaje de carga */}
        {loading && <li>Cargando repositorios...</li>}

        {/* Mensaje de error si falla la petición */}
        
        {error && <li>Error: {error}</li>}
        {/* Mapeo de repositorios para crear lista dinámica */}
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
              {repo.name}{repo.description ? `: ${repo.description}` : ''}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
