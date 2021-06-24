
const fs = require('fs');  //importar el file system 
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {


    
        let salida = '';
    
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
    
        }
        if(listar){
            console.log('==========================='.blue);
            console.log(`Tabla del: ${base}`.red);
            console.log('==========================='.blue);
            console.log(salida.rainbow);
        }

    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return`tabla-${base}.txt`;
    } catch (error) {
            throw error;
    }

  
    
}


// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject)=>{
//         console.log('===========================');
//         console.log(`Tabla del: ${base}`);
//         console.log('===========================');
    
//         let salida = '';
    
    
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
    
//         }
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla del ${base} creada`);
//     })



// }

module.exports = {
    crearArchivo
}