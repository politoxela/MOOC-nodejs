var express = require('express');
var app = express();

//Transacion 1: carga del formulario principal
//   -> GET form ...

app.get('/preguntas', function (req, res) {
    res.send('<html><body>'
    + '<title>Ejercicio Modulo 4</title>'
    + '<h1>Conteste alguna de las preguntas que se le presentan.</h1>'
    + '<form method="get" action="/respuesta">'
    + '<input type="hidden" name="id" value="1"/>'
    + '¿Quién descubrió América?: <br>'
    + '<input type="text" name="respuesta"'
    + 'value="teclee su respuesta" />'
    + '<br><input type="submit" value="Enviar" />'
    + '</form>'
    + '<form method="get" action="/respuesta">'
    + '<input type="hidden" name="id" value="2"/>'
    + '¿Capital de Portugal?: <br>'
    + '<input type="text" name="respuesta"'
    + 'value="teclee su respuesta" />'
    + '<br><input type="submit" value="Enviar" />'
    + '</form>'
    +'</body></html>');
});

//Transacon 2 : envio y proceso de datos
app.get('/respuesta', function (req, res, next) {
  var titulo = '<title>Respuesta</title>'+'<h2>Mi respuesta es:</h2>'
  if (req.query.id==='1')
  {
    res.send(titulo+pregunta1(req.query.respuesta)+botonVolver());
  }
  else if (req.query.id==='2')
  {
    res.send(titulo+pregunta2(req.query.respuesta)+botonVolver());
  }
  else
  {
    next();
  }
});

app.get('*', function (req, res) {
    res.send('Operacion Invalida');
});

var pregunta1 = function (respuesta){
  if(respuesta==='Cristóbal Colón'|| respuesta==='cristóbal colón' || respuesta==='CRISTÓBAL COLÓN'){
    return 'Correcta. Felicitaciones.'
  }else{
    return 'Incorrecta, la respuesta correcta es Cristóbal Colón.'
  }
};

var pregunta2 = function (respuesta){
  if(respuesta==='Lisboa'|| respuesta==='lisboa' || respuesta==='LISBOA'){
    return 'Correcta. Felicitaciones.'
  }else{
    return 'Incorrecta, la respuesta correcta es Lisboa.'
  }
};

var botonVolver = function(){
  return '<form method="get" action="/preguntas">'
  + '<br><input type="submit" value="Volver" />'
  + '</form>'
}

//middleware de Error
app.use(function (err, req, res, next) {
    res.send(err.toString()); //Envia error
});

app.listen(8000);
console.log("Escuchando el puerto 8000");
