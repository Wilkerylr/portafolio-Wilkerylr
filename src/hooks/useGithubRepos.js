import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:4321/api/repos';
const GITHUB_URL = (username) => `https://api.github.com/users/${username}/repos`;

// Hook personalizado para obtener repositorios de GitHub
// Intenta primero la API propia, si falla hace fallback directo a GitHub
export const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Intenta obtener repos desde la API propia
        let data = null;

        try {
          const response = await fetch(API_URL);
          if (response.ok) {
            data = await response.json();
          }
        } catch {
          // API propia no disponible, se usará fallback
          console.warn('API propia no disponible, usando GitHub directamente.');
        }

        // Fallback directo a GitHub si la API propia falló
        if (!data) {
          const response = await fetch(GITHUB_URL(username));
          if (!response.ok) throw new Error('Error al obtener los repositorios');
          data = await response.json();
        }

        setRepos(data);
      } catch (err) {
        setError(err.message);
        console.error('Error al obtener los repositorios:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};
