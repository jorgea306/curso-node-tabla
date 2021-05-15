const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


console.clear();
//Forma tradicional
// const [ , , arg3='base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base)

// console.log(process.argv);
// console.log(argv);



crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.black, 'Archivo creado') )
    .catch(error => console.log(error))
