import { useGithubRepos } from '../hooks/useGithubRepos';
<<<<<<< HEAD

// Componente que muestra los repositorios de GitHub
const Repositories = () => {
  // Hook personalizado que obtiene los repositorios desde la API de GitHub
=======
import RepoItem from './RepoItem';
import '../styles/Repositories.css';

const Repositories = () => {
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
  const { repos, loading, error } = useGithubRepos('Wilkerylr');

  return (
    <section className="repositorios">
      <h2>Repositorios de GitHub</h2>
      <ul className="repositorios_list">
<<<<<<< HEAD
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
=======
        {loading && <li>Cargando repositorios...</li>}
        {error && <li>Error: {error}</li>}
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
