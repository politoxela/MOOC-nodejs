function agenda(titulo, inic) {
    var _titulo = titulo;
    var _contenido = inic;

    return {
        titulo: function () {
            return _titulo;
        },
        meter: function (nombre, tf) {
            _contenido[nombre] = tf;
        },
        tf: function (nombre) {
            return _contenido[nombre];
        },
        borrar: function (nombre) {
        delete _contenido[nombre];
    },
    toJSON: function () {
        return JSON.stringify(_contenido);
    },
    listar: function () {
        var miLista = "";
        for (var nombre in _contenido) {
            miLista = miLista + nombre + ", " + _contenido[nombre] + " \n";
        };
        console.log(_lista);
    }
}
};



var amigos = agenda("Amigos", {
    Pepe: 113278561,
    José: 157845123,
    Jesús: 178512355
});

amigos.listar();
