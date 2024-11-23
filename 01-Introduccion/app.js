const nombre = prompt('Cual es tu nombre?');
// tiene que tener apostrofes
 
document.querySelector('.contenido').innerHTML = `Bienvenido ${nombre}`;
// COMENTARIO UNA LINEA
console.error(`hola ${nombre} algo salio mal`);
/* 
COMENTARIO MULTILINEA
*/

console.warn('Advertencia');
console.log('Esto es un log');
console.info('Informacion');
console.error('Error');

console.time('Tiempo');
console.log('1');
console.log('2');
console.log('3');   
console.log('4');
console.timeEnd('Tiempo');

const obj = {nombre: 'Juan', apellido: 'Perez'};
console.table(obj);

//SIGUIENTE VIDEO

//esto funciona sin punto y coma

console.log("hola")
console.log("mundo");

function hola(){
    console.log("hola mundo");
    console.log("hola mundo");
    console.log("hola mundo");
}
hola();
