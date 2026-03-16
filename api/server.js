const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Orígenes permitidos - agrega tu dominio de producción en ALLOWED_ORIGIN
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  process.env.ALLOWED_ORIGIN,
].filter(Boolean);

// CORS restringido solo a orígenes de confianza
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  methods: ['GET'],
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi API con Express');
});

app.get('/saludo', (req, res) => {
  res.json({ saludo: 'Hola, este es un saludo desde mi API' });
});

app.post('/api/proyectos', (req, res) => {
  try {
    const proyectos = ['website', 'juegos', 'Mobileapp'];
    res.status(201).json({ MisProyectos: proyectos });
  } catch (error) {
    res.status(400).json({ error: 'Faltan datos o formato incorrecto' });
  }
});

// Obtiene repositorios de GitHub - username fijo para prevenir SSRF
app.get('/api/repos', async (req, res) => {
  try {
    const GITHUB_USERNAME = 'wilkerylr';
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    if (!response.ok) throw new Error('Error al obtener los repositorios');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error al obtener los repositorios:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
