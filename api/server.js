const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi primer API con Express');
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

// Obtiene los repositorios de GitHub y los retorna al cliente
app.get('/api/repos', async (req, res) => {
    try {
        const response = await fetch('https://api.github.com/users/wilkerylr/repos');
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
