import { useState, useEffect } from 'react';

// Hook personalizado para obtener repositorios de GitHub
export const useGithubRepos = (username) => {
  // Estados para manejar los repositorios, carga y errores
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto que obtiene los repositorios al montar el componente
  useEffect(() => {
<<<<<<< HEAD
    // Función asíncrona para hacer la petición a la API 
    const fetchRepos = async () => {
      try {
        const response = await fetch(`http://localhost:4321/api/repos`);
=======
    // Función asíncrona para hacer la petición a la API de GitHub
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
        if (!response.ok) throw new Error('Error al obtener los repositorios');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
<<<<<<< HEAD
        if (process.env.NODE_ENV === 'development') {
          console.error('Error al obtener los repositorios:', err);
        }
=======
        console.error('Error al obtener los repositorios:', err);
      } finally {
        setLoading(false);
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};
