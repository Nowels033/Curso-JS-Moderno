
//fizz buzz 

// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
// 15 30 45 ... fizzbuzz

for (let i = 0; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 == 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 == 0) {
        console.log(`${i} Buzz`);
    }
};


//while

let i = 0;

while (i <= 10) {   
    console.log("NUMERO: ",i); 
   
    i++;
}   ;


//do while

let j = 0;

do {
    console.log("NUMERO: ",j);
    j++;    
} while (j <= 10);


 const pendientes =[
    'Tarea 1',
    'Tarea 2',    
    'Tarea 3',
    'Tarea 4',
    'Tarea 5',
    'Tarea 6',];

    pendientes.forEach(pendiente => console.log(pendiente));
    pendientes.forEach((pendiente,indice )=> console.log(pendiente+" "+indice));


    //map
    const numeros = [1,2,3,4,5,6,7,8,9,10];

    const dobles = numeros.map(num => num * 2);

    console.log(numeros);
    console.log(dobles);

    //for off

    const carrito = [
        { nombre: 'Monitor de 20 pulgadas', precio: 500 },
        { nombre: 'Televisión de 50 pulgadas', precio: 700 },
        { nombre: 'Tablet', precio: 300 },
        { nombre: 'Audifonos',precio: 200 }];

        for(let pendiente of carrito){
            console.log(pendiente);
        };


//for in

        for(let i in carrito){
            console.log(carrito[i]);
        };

        //for of

        for(let [llave,valor] of Object.entries(carrito)){
            console.log(llave,valor);
        };

    //filter

    const numeros2 = [1,2,3,4,5,6,7,8,9,10];

    const pares = numeros2.filter(num => num % 2 == 0);

    console.log(numeros2);
    console.log(pares);


    //reduce

    const productos = [
        { nombre: 'Monitor de 20 pulgadas', precio: 500 },    
        { nombre: 'Televisión de 50 pulgadas', precio: 700 },
        { nombre: 'Tablet', precio: 300 },
        { nombre: 'Audifonos',precio: 200 },
        { nombre: 'Teclado',precio: 50 }];

    const total = productos.reduce((acumulador,producto) => acumulador + producto.precio,0);

    console.log(productos);
    console.log(total);

    