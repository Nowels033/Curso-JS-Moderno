const producto = "Monitor de 20 pulgadas";

//.repeat te va permitir repetir una cadena de texto
const texto = " en oferta ".repeat(3);

console.log(texto);
console.log(`${producto}${texto}!!!!`);

//split te va permitir dividir una cadena de texto
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'leer, escuchar musica, jugar videojuegos';

console.log(hobbies.split(','));

const tweet = "Aprendiendo javaScript #JSModerno";
console.log(tweet.split("#"));