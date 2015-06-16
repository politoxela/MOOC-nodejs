var fs = require('fs'); //importa el modulo file system
var i = 3;

if (process.argv.length < 4) { //Comprueba la contidad de parametros
    console.log('sintaxis: <dest> <f1> <f2> .. <fn>');
    console.log(process.argv.length)
    process.exit();
};

do {
    fs.readFile(
        process.argv[i],
        function (err, data) {
            fs.appendFile(
                process.argv[2],
                data,
                function (err) {
                    if (err) throw err;
                    console.log('archivo unido a '+ process.argv[2]);
                }
            )
        }
    );
    i++;
} while (i < process.argv.length);
