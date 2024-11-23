const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    
}


console.log(producto.nombre);

//const nombre = producto.nombre;

//console.log(nombre);



//desestructuracion de objetos
const{nombre,precio,disponible}=producto;

console.log(nombre);
console.log(precio);
console.log(disponible);


