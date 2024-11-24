

const carrito = [];

carrito.push({
    nombre: 'Monitor de 20 pulgadas',
    precio: 500
});

carrito.push({
    nombre: 'Televisión de 50 pulgadas',
    precio: 700
});

carrito.push({
    nombre: 'Tablet',
    precio: 300    
});

carrito.push({            
    nombre: 'Audifonos',
    precio: 200    
});

const producto = {
    nombre: 'Teclado',
    precio: 50    
};

// eliminar el ultimo elemento
carrito.pop();

// eliminar el primer elemento
carrito.shift();

// eliminar un elemento por su indice
carrito.splice(0, 1);

// agregar un elemento por su indice
carrito.splice(1, 0, producto);

console.table(carrito);