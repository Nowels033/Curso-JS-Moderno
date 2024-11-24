
//objeto literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}


//objeto constructor
function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    this.mostrarInfo = function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}


const producto2 = new Producto("Monitor de 20 pulgadas", 300);

console.log(producto);
console.log(producto2);

