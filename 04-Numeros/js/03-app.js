const numero1 = 30;
const numero2 = 20;


let resultado;

//REDONDEAR NUMEROS DECIMALES hacia el mas cercano
resultado= Math.round(2.8);
console.log(resultado);
resultado= Math.round(2.3);
console.log(resultado);
//REDONDEAR NUMEROS DECIMALES hacia arriba
resultado= Math.ceil(2.8);
console.log(resultado);
resultado= Math.ceil(2.3);
console.log(resultado);
//REDONDEAR NUMEROS DECIMALES hacia abajo
resultado= Math.floor(2.8);
console.log(resultado);
resultado= Math.floor(2.3);
console.log(resultado);

//Raiz cuadrada
resultado= Math.sqrt(144);
console.log(resultado);

//valor absoluto
resultado= Math.abs(-500);
console.log(resultado);


//Potencia
resultado= Math.pow(2,3);
console.log(resultado);

//Minimo
resultado= Math.min(2,3,4,5);
console.log(resultado);

//Maximo
resultado= Math.max(2,3,4,5);
console.log(resultado);

//Aleatorio
resultado= Math.random();
console.log(resultado);
resultado= Math.random() * 20;
console.log(resultado);
resultado= Math.floor(Math.random() * 20);
console.log(resultado);

//aleatorio dentro de un rango

resultado= Math.floor(Math.random() * 100);//100 es el rango del numero aleatorio
console.log(resultado);





console.log();