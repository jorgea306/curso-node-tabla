const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias:'listar',
            type: 'boolean',
            default: false,
            describe: 'Sirve para listar en pantalla la tabla seleccionada'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Muestra la cantidad de multiplos que va a tener la tabla'
        })
        .check( (argv,option) => {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un numero'
            }
            return true;
        })
        .argv;

module.exports = argv;
