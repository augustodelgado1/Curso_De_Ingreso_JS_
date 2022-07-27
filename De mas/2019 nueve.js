/*
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/
function mostrar()
{
    var sexoIngresado; //(validar el sexo “f” o “m” o "nb")
	var notaFinalIngresada; //(validar)
	var nombreIngresado;
	var edadIngresada;
    var respuesta;
    var promediodemenoresdeedad;
    var promedioDeAdolecentes;
    var contadorM;
    var promedioDeMayores
    var promedioM;
    var acumuladorMasculino;
    var promedioF;
    var varonesAprobados;
    var MayoresDeEdad;
    var acumuladorDeNotasDeMayor;
    var Adolecentes;
    var acumuladorDeNotasDeAdolecente;
    var Menores;
    var acumuladorDeNotasDeMenores;
    var acumuladorFemeninos;
    var contadorF;
    
       
    

    varonesAprobados=0;
    MayoresDeEdad=0;
    acumuladorDeNotasDeMayor=0;
    contadorF=0;
    contadorM=0;
    acumuladorFemeninos=0;
    acumuladorMasculino=0;
    Adolecentes=0;
    acumuladorDeNotasDeAdolecente=0;
    Menores=0;
    acumuladorDeNotasDeMenores=0
   
       
    

    do{
        nombreIngresado = prompt("Ingrese el nombre");

        edadIngresada = prompt("Ingrese la edad");
        while (edadIngresada < 0) {
            edadIngresada = prompt("Ingrese la edad");
        }

        notaFinalIngresada = prompt("Ingrese la nota (entre 0 o 10)");
        notaFinalIngresada = parseInt(notaFinalIngresada);
        while (notaFinalIngresada < 0 || notaFinalIngresada > 10) {
            notaFinalIngresada = prompt("Error Ingrese la nota (entre 0 o 10)");
        }
        sexoIngresado= prompt("ingrese el sexo(f o m o nb)");
        while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb" ) 
        {
            sexoIngresado= prompt("ingrese el sexo(f o m o nb)");
        }
        
       
  

    if (edadIngresada >= 18) {
        
        MayoresDeEdad++;
        acumuladorDeNotasDeMayor += notaFinalIngresada;
    } else {
        if (edadIngresada >= 13 && edadIngresada < 17) 
        {
            Adolecentes++;
            acumuladorDeNotasDeAdolecente += notaFinalIngresada;
        } else {
            Menores++;
            acumuladorDeNotasDeMenores += notaFinalIngresada;
            
        }
        
    }

    if (sexoIngresado == "f") {
        contadorF++;
        acumuladorFemeninos += notaFinalIngresada
    } else {
        contadorM++;
        acumuladorMasculino += notaFinalIngresada;

        if (sexoIngresado == "m" && notaFinalIngresada >= 6) 
        {
            varonesAprobados++;
            
        } 

    }


        respuesta = prompt("Quiere ingresar datos de otro estudiante");
  
        } while (respuesta == "si");

        promedioDeAdolecentes =   acumuladorDeNotasDeAdolecente / Adolecentes;
        promedioDeMayores = acumuladorDeNotasDeMayor / MayoresDeEdad;
        promediodemenoresdeedad =  acumuladorDeNotasDeMenores / Menores;
        promedioF = acumuladorFemeninos / contadorF;
        promedioM = acumuladorMasculino / contadorM;

        console.log("La cantidad de varones aprobados es "+varonesAprobados);
        console.log("El promedio de notas de los menores de edad es " + promediodemenoresdeedad);
        console.log("El promedio de notas de los adolescentes es "+promedioDeAdolecentes);
        console.log("El promedio de notas de los mayores es "+promedioDeMayores);
        console.log("El promedio de notas por sexo masculino es "+promedioM);
        console.log("El promedio de notas por sexo femenino es " + promedioF);
      

    
}       
