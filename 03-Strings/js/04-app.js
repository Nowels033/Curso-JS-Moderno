const producto = "              Monitor de 20 pulgadas          ";

console.log("Tamaño de producto : "+producto.length);

// elimina espacios al inicio 
console.log(producto.trimStart());
// elimina espacios al final
console.log(producto.trimEnd());
// elimina espacios al inicio y al final
console.log(producto.trimStart().trimEnd());

// elimina espacios al inicio y al final
console.log(producto.trim());


