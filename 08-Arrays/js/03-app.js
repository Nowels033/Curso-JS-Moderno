const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


//cuanto mide la array
console.log(meses.length);

//acceder a un elemento de la array
console.log(meses[0]);


for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

//modificar un elemento de la array
meses[0] = 'Enero Modificado';

//agregar un elemento a la array
meses[7] = 'Agosto';

console.table(meses);

