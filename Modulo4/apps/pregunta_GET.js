var express = require('express');
var app = express();

//Transacion 1: carga del formulario
//   -> GET form ...

app.get('/form', function (req, res) {
    res.send('<html><body>' + '<form method="get" action="/proc">' + 'Su nombre: <br>' + '<input type="text" name="user"' + 'value="teclee su nombre" />' + '<br><input type="submit" value="Enviar" />' + '</form></body></html>');
});

//Transacon 2 : envio y proceso de datos
//  -> GET /hola?user=Paco  ...
app.get('/proc', function (req, res) {
    // ....... (los datos se procesan)
    res.send('Gracias por sus datos ' + req.query.user);
});

app.listen(8000);
console.log("Escuchando el puerto 8000");
