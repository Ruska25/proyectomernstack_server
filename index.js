/*const express = require('express')
const app = express()

let puerto = process.env.Port || 4000;

//importar conexion MongoDB

const archivoBD = require('./conexion')

//importacion del archivo de rutas y modelo usuario

const rutausuario = require('./rutas/usuario')

//importar body-parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) =>{
    res.end('Bienvenidos al servidor backend node.js Corriendo...')
})

//configurar server basico

app.listen(puerto, function(){
    console.log('El servidor esta node correcto  corriendo correctamente')
})
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

let puerto = process.env.Port || 4000;

// middleware
app.use(cors());

// Cambiar la conexión a la base de datos para usar MongoDB Atlas
const mongoURI =
  "mongodb+srv://user:1998@proyectofullstack.0vnyome.mongodb.net/";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const objetobd = mongoose.connection;

objetobd.on("connected", () => {
  console.log("Conexión exitosa a MongoDB Atlas");
});

objetobd.on("error", (err) => {
  console.error("Error en la conexión a MongoDB Atlas: " + err);
});

// Importación del archivo de rutas y modelo de usuario
const rutausuario = require("./rutas/usuario");

// Importar body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/api/usuario", rutausuario);

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor backend node.js Corriendo...");
});

// Configurar el servidor básico
app.listen(puerto, function () {
  console.log(
    "El servidor está corriendo correctamente en el puerto " + puerto
  );
});
