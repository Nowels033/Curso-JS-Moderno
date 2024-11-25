

//swicht case
function imprimirInformacion(vehiculo){
    switch(vehiculo){
        case "coche":
            console.log("Es un coche");
            break;
        case "moto":
            console.log("Es una moto");
            break;
        case "bicicleta": 
            console.log("Es una bicicleta");
            break;
        default:
            console.log("No es un vehiculo");
    }
}

imprimirInformacion("coche");
imprimirInformacion("moto");
imprimirInformacion("bicicleta");
imprimirInformacion("camion");

//ternario  

function imprimirInformacion(vehiculo){
    vehiculo === "coche" ? console.log("Es un coche") : console.log("No es un coche");
}

//if anidado ternario

function imprimirInformacion2(vehiculo){   
    if(vehiculo === "coche"){
        console.log("Es un coche");
    }else if(vehiculo === "moto"){
        console.log("Es una moto");
    }else if(vehiculo === "bicicleta"){
        console.log("Es una bicicleta");
    }else{
        console.log("No es un vehiculo");   
    }   

}
 