
let elemento ;

elemento = document;
elemento = document.all;
elemento = document.head.title;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0].classList;
elemento = document.links;
elemento = document.links[4].classList;
elemento = document.images;
elemento = document.scripts;





//console.log(elemento);


//SELECCIONAR ELEMENTOS POR SU CLASE

const header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

// si las clases existen mas de una 1 vez

const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

//SELECCIONAR ID`s

const formulario = document.getElementById('formulario');

console.log(formulario);

//QUERY SELECTOR


const card = document.querySelector('.card');
console.log(card);

//PODEMOS TENER SELECTORES ESPECIFICOS COMO CSS

const info = document.querySelector('.premium .info');
console.log(info);


const segundoCard = document.querySelector('.section.hospedaje .card:nth-child(2)');

//SELECCIONAR FORMULARIO

const formulario2 = document.querySelector('#formulario');

console.log(formulario2);

//SELECCIONAR ELEMENTOS HTML

const navegacion = document.querySelector('h1');
console.log(navegacion);

const navegacion2 = document.querySelectorAll('h1');
console.log(navegacion2);