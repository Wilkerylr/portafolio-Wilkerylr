const RepoItem = ({ repo }) => {
  return (
    <li>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
        {repo.name}{repo.description ? `: ${repo.description}` : ''}
      </a>
    </li>
  );
};

export default RepoItem;
