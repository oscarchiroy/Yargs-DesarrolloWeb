var colors = require('colors');
//algoritmos
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Tiempo en año'
                })
                .option('c', {
                    alias: 'cantidad',
                    type: 'number',
                    demandOption: true,
                    describe: 'El monto para prestamo'.blue
                })
                .option('i', {
                    alias: 'interes',
                    type: 'number',
                    demandOption: true,
                    describe: 'Interes anual'.blue
                })
                .option('n', {
                    alias: 'nombre',
                    type: 'string',
                    demandOption: true,
                    describe: 'Nombre del cliente separado por guion bajo( )'.blue
                })
                .option('a', {
                    alias: 'apellido',
                    type: 'string',
                    demandOption: true,
                    describe: 'Apellido del cliente separado por guion bajo( )'.blue
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    describe: 'Muestra la tabla en consola'.blue
                })
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un número'.red
                    }
                    return true;
                })
                .argv

module.exports = argv;