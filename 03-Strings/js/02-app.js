const producto = "Monitor de 20 pulgadas";

console.log(producto);
// metodo de saber la cantidad de letras de un String
console.log(producto.length);

console.log(producto.indexOf("Monitor"));
console.log(producto.indexOf("Tablet"));
console.log(producto.indexOf("20 pulgadas"));

// para saber si un string empieza con algo
console.log(producto.startsWith("Tablet"));
console.log(producto.startsWith("Monitor"));

// para saber si un string termina con algo
console.log(producto.endsWith("Monitor"));
console.log(producto.endsWith("Tablet"));

// para saber si un string contiene algo
console.log(producto.includes("Monitor"));
console.log(producto.includes("Tablet"));

// para saber si un string es un numero
console.log(Number.isNaN(producto));
