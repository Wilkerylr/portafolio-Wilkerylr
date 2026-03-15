const express =require ("express");
const cors = require ("cors");


require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Bienvenidos a mi primer api con Express");
});



app .get("/saludo", (req, res) => {
    res.send({"saludo": "Hola, este es un saludo desde mi API"});
});

app.post("/api/proyectos", async (req, res) => {
    
    try{
        const proyectos = ["website", "juegos", "Mobileapp"];

        console.log("me hicieron una peticion post ");

        const datos = req.body;

        //console.log(req.body);
        
        res.status(201).json({
            MisProyectos: proyectos
        });
    }
        catch(error){
            res.status(400).send({"error": "faltan datos o formato incorrecto"});
        }
    });




app .get("/api/repos", async (req, res) => {
    try {
        const response = await fetch(`https://api.github.com/users/wilkerylr/repos`);
        if (!response.ok) throw new Error('Error al obtener los repositorios');
        const data = await response.json();
        const repositorios= res.json(data);
        

        console.log(repositorios);
        res.send(repositorios);

    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error('Error al obtener los repositorios:', err);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});