const carrito = [];
// Elimina un elemento por su indice

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 500
};
const producto2 = {
    nombre: 'Televisión de 50 pulgadas',
    precio: 700
};
const producto3 = {
    nombre: 'Tablet',
    precio: 300
};



let resultado;

resultado= [...carrito, producto];
resultado= [...resultado, producto2];
resultado= [producto3,...resultado];


//console.log(resultado);


console.table(resultado);

console.log(carrito);






