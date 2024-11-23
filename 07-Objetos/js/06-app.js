const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
        peso: '1kg',
        medida: '1m'
        },
        fabricacion: {
        pais: 'China'
    }
    }
}



const medidas = producto.informacion.medidas;


console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);