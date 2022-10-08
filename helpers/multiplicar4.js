const fs = require ('fs')
var pdf = require('html-pdf');
var _ = require('lodash');
var colors = require('colors');
////////////PARA PDF
let PDFDocument = require('pdfkit');

let doc = new PDFDocument;
//FIN PARA PDF

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
                salida += `Mes  ${i}       ${cuota}                    ${interesmen}                           ${cuotamen}\n`;
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


                        // CREACION DE ARCHIVO PDF.
            // doc.pipe(fs.createWriteStream('example5.pdf'));
            doc.pipe(fs.createWriteStream(`${apellido}.pdf`));
            
            // Adding functionality
            doc

            .fontSize(27)//tamaño de letra
            .text(`BANCO EL AMIGO\n\n`, 170, 20)//texto y 150 = x, 20 = y
            .fontSize(17)
            .text('Plan de Pago\n', 230,50) 

            .fontSize(11)
            //.text(`La cantidad prestada es de: Q${cantidad} por ${base} año(s).`, 20, 60);//y=--- x=|
            .text(`Cliente: ${nombre} ${apellido}`, 30, 90)
            .text(`Plazo de Credito: ${tiempo} Meses`, 30, 105)
            .text(`Cuota ${cuota} Mensual`, 30, 120)
            .text(`Tasa de  ${interes}% Anual`, 30, 135)
            .text(`Cantidad Desembolsado Q.${cantidad}`, 30, 150)
    
            .fontSize(10)
            .text(`Fecha`, 110, 200)
            .text(`Capital Mensual`, 180, 200) 
            .text(`Intereses Mensual`, 290, 200)
            .text(`Capital+Intereses`, 410, 200)
            .text(`${salida}\n`, 110, 215);
      
            // Adding image in the pdf.
            
            // doc.image('download3.jpg', {
            // doc.image('Direccion.png', {
            //     fit: [300, 300],
            //     align: 'center',
            //     valign: 'center'
            // });
            
            // Apply some transforms and render an SVG path with the 
            // 'even-odd' fill rule
            doc
            .scale(0.6)
            .translate(470, -380)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();
            
            // Finalize PDF file
            doc.end();

            
        } catch (err) {
    
            throw err
    
        }
}



module.exports = {
    crearArchivo
}
