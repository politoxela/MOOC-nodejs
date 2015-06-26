var express = require('express');
var app = express();

app.get('/user/:id', function (req, res, next) {
    if (req.params.id === "Ana" || req.params.id === "Eva") {
        res.send('Usuario del sistema');
    } else {
        next(new Error('Usuario Desconocido'));
    }
});

app.get('*', function (req, res) {
    res.send('Operacion Invalida');
});

//middleware de Error
app.use(function (err, req, res, next) {
    res.send(err.toString()); //Envia error
});

app.listen(8000);
console.log("Escuchando el puerto 8000");
