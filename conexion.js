/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{
    console.log('conexion correcta a Mongodb')
})

objetobd.on('error', ()=>{
    console.log('error en la conexion  Mongodb')
})

module.exports = mongoose*/


const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://user:1998@proyectofullstack.0vnyome.mongodb.net/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
  console.log('Conexión exitosa a MongoDB Atlas');
});

dbConnection.on('error', (error) => {
  console.error('Error en la conexión a MongoDB:', error);
});

module.exports = mongoose;
