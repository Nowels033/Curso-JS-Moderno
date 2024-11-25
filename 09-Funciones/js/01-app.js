//declaracion de funcion
function sumar(){
    console.log(2+2);
}
sumar();

//funciones de javaScript standar

alert("hola");
console.log("hola");
 let hola = prompt("cual es tu nombre");
confirm("estas seguro");
parseInt("100");
parseFloat("100.2");
Number("100");

function saludar(nombre="No tiene nombre", apellido="No tiene apellido"){
    console.log(`hola ${nombre} ${apellido}`);

}

saludar();
saludar("Juan");
saludar("Juan", "Perez");

function iniciarApp(){
    console.log("iniciando app");
}
function segundaFuncionon(){
    console.log("segunda funcion");
    iniciarApp();
}
segundaFuncionon();

//FUNCIONES CON RETORNO

function sumar(a,b){
    return a+b;
}
console.log(sumar(2,2));

//FUNCIONES FLECHA
const sumarFlecha = (a,b) => a+b;
console.log(sumarFlecha(2,2));

//FUNCIONES FLECHA SIN LLAVES
const sumarFlecha2 = (a,b) => a+b;
console.log(sumarFlecha2(2,2));


//FUNCIONES FLECHA CON RETURN
const sumarFlecha3 = (a,b) => {
    return a+b;
}
console.log(sumarFlecha3(2,2));

//FUNCIONES FLECHA CON OBJETOS
const sumarFlecha4 = (a,b) => ({a,b});
console.log(sumarFlecha4(2,2));

const reproductor = {
    volumen: 1,
    reproducir:() =>console.log("Reproduciendo"),
    pausar:() =>console.log("Pausando"),
    borrar:() =>console.log("Borrando"),
     // Setter para modificar el volumen
     set vol(volumen) {
        this.volumen = volumen;
    },

    // Getter para obtener el volumen (opcional)
    get vol() {
        return this.volumen;
    }

    };

reproductor.reproducir();

reproductor.borrar = function(id){
    console.log(`Borrando ${id}`);
};

reproductor.borrar(3);

// arrow function

const aprendiendo =() => console.log(`Aprendiendo `);
aprendiendo();

//funcion de map

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisión de 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50 },
    {nombre: 'Celular', precio: 500},
];

