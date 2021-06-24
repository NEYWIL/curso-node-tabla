const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');
const colors = require('colors');


//const base = 8;
console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs' , argv.base);

// const[ , ,arg3 = 'base = 5']=process.argv;
// const [ , base=5] =arg3.split('=');


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=> console.log(nombreArchivo.green))
    .catch(err=>console.log(err))

    // crearArchivo(base)
    // .then(nombreArchivo=> console.log(nombreArchivo))
    // .catch(err=>console.log(err))




// fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     if(err) throw err;

//     console.log(`tabla del ${base} creada`);

// })





