
const carrito = [
    {
        nombre: 'Monitor de 20 pulgadas',
        precio: 500,
        disponible: true
    },
    {
        nombre: 'Televisión de 50 pulgadas',
        precio: 700,
        disponible: true
    },
    {
        nombre: 'Tablet',
        precio: 300,    
        disponible: true    
    },
    {
        nombre: 'Audifonos',
        precio: 200,    
        disponible: true    
    },
    {
        nombre: 'Teclado',
        precio: 50,    
        disponible: true    
    },
    {
        nombre: 'Celular',
        precio: 500,
        disponible: true    
    }
    
    ];
    //FOREACH
    carrito.forEach(function(producto){
        console.log("Nombre:"+producto.nombre);
        console.log("Precio:"+producto.precio);
        console.log("Disponible:"+producto.disponible);
    
    });

    //MAP
    const array = carrito.map(function(producto){

        if(producto.precio > 300){
            return producto.precio;
        }
       
    });
    console.log(array);


     //MAP2
     const array2 = carrito.map(function(producto){
        const arrayCreadaEnMap =[];
        if(producto.precio > 300){
            arrayCreadaEnMap.push(producto.precio);
        }
        else{
            arrayCreadaEnMap.push("No es mayor a 300");
        }
        return arrayCreadaEnMap
       
    });
    console.table(array2);
    // Filtrando productos con precio mayor a 300
const filtrados = carrito.filter(producto => producto.precio > 300);

// Creando un array solo con los precios de los productos filtrados
const preciosFiltrados = filtrados.map(producto => producto.precio);

console.log(filtrados); // Muestra los productos filtrados
console.log(preciosFiltrados); // Muestra solo los precios de los productos filtrados