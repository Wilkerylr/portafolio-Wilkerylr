import { useGithubRepos } from '../hooks/useGithubRepos';
import { RepoFolderIcon, ExternalLinkIcon } from './RepoIcons.jsx';
import '../styles/Repositories.css';

// Componente que muestra los repositorios de GitHub en formato tarjeta
const Repositories = () => {
  // Hook que obtiene los repositorios directamente desde GitHub
  const { repos, loading, error } = useGithubRepos();

  return (
    <section id="repositorios" className="repositorios">
      <h2>Repositorios de GitHub</h2>

      {/* Mensaje de carga */}
      {loading && <p className="repo-status">Cargando repositorios...</p>}

      {/* Mensaje de error si falla la petición */}
      {error && <p className="repo-status repo-error">Error: {error}</p>}

      {/* Grid de tarjetas de repositorios */}
      <div className="repo-grid">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
          >
            {/* Línea de acento superior */}
            <div className="repo-card-accent" />

            <div className="repo-card-body">
              <div className="repo-card-header">
                <RepoFolderIcon />
                <ExternalLinkIcon />
              </div>

              {/* Nombre del repositorio */}
              <h3 className="repo-name">{repo.name}</h3>

              {/* Descripción del repositorio */}
              <p className="repo-description">
                {repo.description || 'Sin descripción'}
              </p>

              {/* Solo muestra tecnologías si el repositorio tiene topics definidos */}
              {repo.topics?.length > 0 && (
                <div className="repo-topics">
                  {repo.topics.map((topic, i) => (
                    <span key={i} className="repo-topic">{topic}</span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Repositories;
