
const carrito = [
{
    nombre: 'Monitor de 20 pulgadas',
    precio: 500
},
{
    nombre: 'Televisión de 50 pulgadas',
    precio: 700
},
{
    nombre: 'Tablet',
    precio: 300    
},
{
    nombre: 'Audifonos',
    precio: 200    
},
{
    nombre: 'Teclado',
    precio: 50    
},
{
    nombre: 'Celular',
    precio: 500,
    disponible: true    
}

];

//FOR LOOP
for (let i = 0; i < carrito.length; i++) {
    console.log("Nombre:"+carrito[i].nombre);
    console.log("Precio:"+carrito[i].precio);
    console.log("Disponible:"+carrito[i].disponible);

}
//FOREACH
carrito.forEach(function(producto){
    console.log("Nombre:"+producto.nombre);
    console.log("Precio:"+producto.precio);
    console.log("Disponible:"+producto.disponible);

});


