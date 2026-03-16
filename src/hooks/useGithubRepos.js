import { useState, useEffect } from 'react';

const GITHUB_URL = 'https://api.github.com/users/Wilkerylr/repos';

// Hook personalizado para obtener repositorios directamente desde la API de GitHub
export const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_URL);
        if (!response.ok) throw new Error('Error al obtener los repositorios');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
        console.error('Error al obtener los repositorios:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};
