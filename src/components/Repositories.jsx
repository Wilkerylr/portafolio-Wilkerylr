import { useGithubRepos } from '../hooks/useGithubRepos';
import RepoItem from './RepoItem';
import '../styles/Repositories.css';

const Repositories = () => {
  const { repos, loading, error } = useGithubRepos('Wilkerylr');

  return (
    <section className="repositorios">
      <h2>Repositorios de GitHub</h2>
      <ul className="repositorios_list">
        {loading && <li>Cargando repositorios...</li>}
        {error && <li>Error: {error}</li>}
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
