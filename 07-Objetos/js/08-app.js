"use strict";
//para que no se pueda reasignar sus valores


const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
//para congelar y no se pueda reasignar
Object.freeze(producto);
console.log(producto);


//delete producto.disponible;