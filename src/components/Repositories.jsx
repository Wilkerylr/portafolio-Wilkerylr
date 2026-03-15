import { useGithubRepos } from '../hooks/useGithubRepos';
import { RepoFolderIcon, ExternalLinkIcon } from './RepoIcons.jsx';
import '../styles/Repositories.css';

// Componente que muestra los repositorios de GitHub en formato tarjeta
const Repositories = () => {
  // Hook personalizado que obtiene los repositorios desde la API de GitHub
  const { repos, loading, error } = useGithubRepos('Wilkerylr');

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

              {/* Lenguaje principal del repositorio */}
              {repo.language && (
                <span className="repo-language">{repo.language}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Repositories;
