var pdf = require('html-pdf');
const { crearArchivo } = require ('./helpers/multiplicar4')
const colors = require('colors')
const argv = require('./config/yargs2')
if(argv.b <= 10){
console.clear();

console.log(argv);



crearArchivo(argv.b, argv.c, argv.i, argv.n, argv.a, argv.l)
                .then(console.log('Proceso completado'))
                .catch(err => console.log(err))

   
}else{
    console.log('El limite de tiempo es de 10 años');
}
