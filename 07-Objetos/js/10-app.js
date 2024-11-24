
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const resultado = Object.assign(producto, medidas);

console.log(resultado);


// spread operator

const resultado2 = {...producto,...medidas};

console.log(resultado2);

const fabricacion = {
    pais: 'China'
}

const informacion = {
    medidas,
    fabricacion 
}

