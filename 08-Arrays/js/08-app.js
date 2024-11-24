const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

//destructuring
const { nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

// Destructuring de una Array

const numeros = [10,20,30,40,50];

const [,...tercero] = numeros;

//console.log(primero);
//console.log(segundo);
console.log(tercero);


