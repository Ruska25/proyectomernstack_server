/*const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', eschemausuario);
module.exports = router;

// Agregar usuarios
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });


nuevousuario.save()
.then(result => {
    res.send('usuario agregado correctamente');
})
.catch(error => {
    res.send(error);
});
})




router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});



router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({ idusuario: req.body.idusuario })
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});




router.post('/actualizarusuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate(
        { idusuario: req.body.idusuario },
        {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
    )
    .then(docs => {
        res.send('Usuario actualizado correctamente');
    })
    .catch(err => {
        res.send(err);
    });
});















router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario })
        .then(docs => {
            res.send('Usuario eliminado correctamente');
        })
        .catch(err => {
            res.send(err);
        });
});*/






const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const eschemausuario = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', eschemausuario);

// Agregar usuarios
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });

    nuevousuario.save()
        .then(result => {
            res.send('Usuario agregado correctamente');
        })
        .catch(error => {
            res.send(error);
        });
});

router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({ idusuario: req.body.idusuario })
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/actualizarusuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate(
        { idusuario: req.body.idusuario },
        {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
    )
    .then(docs => {
        res.send('Usuario actualizado correctamente');
    })
    .catch(err => {
        res.send(err);
    });
});

router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario })
        .then(docs => {
            res.send('Usuario eliminado correctamente');
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;









