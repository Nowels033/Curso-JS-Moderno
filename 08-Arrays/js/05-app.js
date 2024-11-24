const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

meses[0] = 'Enero Modificado';
meses[7] = 'Agosto';


//agregar un elemento a la array sin saber cuantas posiciones tiene
meses.push('Septiembre');
meses.push('Octubre');




console.table(meses);


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


carrito.unshift(producto);

console.table(carrito);