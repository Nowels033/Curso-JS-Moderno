const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    
}

//agregar nuevos valores

producto.imagen = "imagen.jpg";



console.log(producto);

//Borrar propiedades de un objeto

delete producto.disponible;
console.log(producto);