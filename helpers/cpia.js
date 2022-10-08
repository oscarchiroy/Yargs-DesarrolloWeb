const fs = require ('fs')
var pdf = require('html-pdf');
var _ = require('lodash');
var colors = require('colors');

//nombre = nombre del usuario
//base = al tiempo que requiere el prestamo
//listar = listar las cuotas
//interes = el porcentaje del interes

const crearArchivo = async(base = 2, cantidad =0, interes=0, nombre, apellido, listar=false) => {
    // if(base <= 10){
        try {

            // console.log('La cantidad prestada es de: Q',cantidad)
            console.log(`La cantidad prestada es de: Q${cantidad} por ${base} año(s).`);
            console.log(`La taza de interes es del: ${interes}% anual(es)`);
    
            //total de interes por el tiempo prestado
            var interestotal = interes * base;
            console.log(`El total del interes por el tiempo de ${base} año(s) es del  ${interestotal}%`);
            
    
            //se convierte años a meses
            let tiempo = base * 12;
            //se calcula la cuota mensual
            let cuota = cantidad / tiempo;
            console.log('la cuota mensual es de: Q', cuota)
            //se hace la operacion para pasar el interes a decimales
            let taza = interes * 0.01;
    
            //se calcula el interes mensual, por el tiempo pedido
            let tmenusal = interes / tiempo;
            // let inmensual = (tmenusal * 0.01) * 
            // console.log(`La taza de interes mensual es de: ${tmenusal}%, es decir Q${}`);
    
            //total de interes convertido a dinero
            var totalint = (interes * 0.01) * cantidad;
            console.log('Interes convertido en  quetzales, es de : Q', totalint, 'anual');
            //total de dinero de interes del tiempo prestado
            interestiempo = totalint * base;
            console.log(`Total de dinero de interes por los ${base} año(s), es de Q${interestiempo}`); 
            
            //cuota mensual de interes
            let interesmen = interestiempo / tiempo;
            console.log(`La cuota mensual de interes es de Q${interesmen}`);
    
            // CUOTAS MENSUALES (CUOTA MENSUAL +  CUOTA MENUSAL DE INTERES)
            let cuotamen = cuota + interesmen;
            console.log(`La cuota mensual mas cuota de interes es de: Q${cuotamen} por ${base} año(s).`);
    
    
        
            let salida = '';
            
            for (let i =1; i <= tiempo; i++){
                salida += `Mes ${i} = ${cuotamen}\n`;
            }
    
    
    
    
    
    
            if (listar){
    
                console.log('\n***********************************************************');
                console.log('* Seguimiento de Credito del señor:'.black, nombre.blue,'',apellido.blue);
                console.log('***********************************************************');
                console.log(salida);
                // _.times(tiempo, () => {
                //     console.log('Cuota cada mes, es de', cuotamen);
                // })
                let ingreso = cuotamen * tiempo;
                console.log('El ingreso generado por el prestamo es de Q', ingreso);

                let ganancia = ingreso - cantidad;
                console.log('La ganancia obtenida por el prestamo es de: Q', ganancia);
    
            }
    
            // fs.writeFileSync(`tabla-${base}.txt`, salida);
    
            // return `tabla-${base}.txt`;

            
        } catch (err) {
    
            throw err
    
        }
    
    // }else{
    //     console.log('El limite de tiempo es de 10 años');
    // }



}



module.exports = {
    crearArchivo
}