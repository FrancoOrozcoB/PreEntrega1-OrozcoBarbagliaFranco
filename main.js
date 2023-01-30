let nombre = prompt("Ingrese su nombre");
for (i=0; i>=0;i++)
    if (nombre==="" || nombre===NaN ||nombre===null){
        nombre = prompt("Por favor ingrese su nombre");
    }
    else{ 
        (nombre != "");
        alert ("Hola "+ nombre + " para poder darte el mejor seguro, porfavor completa las siguientes preguntas");
        break;
    }
console.log(nombre);

let edad = parseInt (prompt ("Que edad tienes?"));

console.log(edad);

let cantDias = parseInt(prompt("Cuantos días tendrá tu viaje en total?"))

let destino = parseInt( prompt("Cual sería tu destino final? Según tu destino, coloca el número. \n1- Barcelona \n2- Roma \n3- Londres \n4- París \n5- Madrid \n6- Estocolmo \n7- Lisboa"));
switch(destino){
    case 1:
        destino = "Barcelona";
        console.log (destino);
        break;
    case 2:
        destino ="Roma";
        console.log (destino);
        break;
    case 3:
        destino ="Londres";
        console.log (destino);
        break;
    case 4:
        destino ="París";
        console.log (destino);
        break;
    case 5:
        destino ="Madrid";
        console.log (destino);
        break;
    case 6:
        destino ="Estocolmo";
        console.log (destino);
        break;
    case 7:
        destino ="Lisboa";
        console.log (destino);
        break  
    default:
            alert ("Destino no valido");
    }
alert ("Los datos ingresados son los siguientes\n \nNombre: "+ nombre + "\nEdad: "+ edad + "\nDuración del viaje: "+ cantDias +" dias \nDestino: "+ destino + "\n\nAguarde mientras le mandamos su seguro!!\nGracias por viajar con nosotros") ;
let costDest = destino
switch(costDest){
    case "Barcelona":
        costDest=2;
        break;
    case "Roma":
        costDest=3;
        break;
    case "Londres":
        costDest=4;
        break;
    case "París":
        costDest=5;
        break;  
    case "Madrid":
        costDest=6;
        break;
    case "Estocolmo":
        costDest=7;
        break; 
    case "Lisboa":
        costDest=8;
        break;                
}


let costoXEdad = edad * 2;
    console.log (costoXEdad);
let costoXDias = cantDias * 3;
    console.log (costoXDias);
let costoXDestino = costDest * 4;
    console.log (costoXDestino);

function costo(){
    let resultado = costoXEdad + costoXDias + costoXDestino;
    let comision = resultado*0.30
    return (((resultado *1.21)*100)+comision);
    
};

let costoFinal = costo ();
    alert("El costo de tu seguro es de AR$ " + costoFinal+ "\nGracias por viajar con nosotros!!");