"use strict";
//para que no se pueda reasignar sus valores


const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
//para congelar y si se pueda modificar pero no eliminar o añadir
Object.seal(producto);
console.log(producto);


//delete producto.disponible;