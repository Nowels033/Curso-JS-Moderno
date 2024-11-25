const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

console.log(meses);
console.log(carrito);


// comprobar si esxiste un valor en una array



console.log(meses.includes('Enero'));

//para obejtos
console.log(carrito.some(producto => producto.nombre === 'Celular'));

//find index
meses.forEach( (mes,index)=>{

    if(mes === "Abril"){
        console.log(`Encontrado ${mes} en la posicion : ${index+1}`);
    }

});
//encontrar el indice de abril

const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);


if (indice>=0){


}


//encontrar un indice de una array de objetos

const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2+1);


//reduce

//Ccon for each

let total = 0;

carrito.forEach( producto => total += producto.precio);

console.log(total);

// con reduce;

let resultado = carrito.reduce((total,producto) => total + producto.precio,0)
console.log(resultado);

//filter

let resultado2 = carrito.filter((producto)=> producto.precio > 400);
let resultado3 = carrito.filter((producto)=> producto.precio < 600);
let resultado4 = carrito.filter((producto)=> producto.nombre === "Audifonos");

console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//FIND

// CON FOR EACH

let resultado5 ="";

carrito.forEach((producto,index)=> {
    if(producto.nombre==="Tablet"){
        resultado5 = carrito[index];}
});
console.log(resultado5);

//CON FIND

const resultado6 = carrito.find((producto => producto.nombre === "Audifonos"));
console.log(resultado6);

//EVERY

const resultado7 = carrito.every(producto => producto.precio < 500);

const resultado8 = carrito.some(producto => producto.precio < 500);
console.log(resultado7);
console.log(resultado8);


// cat

const mesesArrglo = meses.concat("ARRAYS A CONCTENAR");

//spread operator
//UNIR ARRAYS
const resultado9 = [...meses,...meses2,...meses3,"otroMes"];
