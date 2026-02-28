import { useState, useEffect } from 'react';

// Hook personalizado para obtener repositorios de GitHub
export const useGithubRepos = (username) => {
  // Estados para manejar los repositorios, carga y errores
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto que obtiene los repositorios al montar el componente
  useEffect(() => {
    // Función asíncrona para hacer la petición a la API de GitHub
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
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
  }, [username]);

  return { repos, loading, error };
};
