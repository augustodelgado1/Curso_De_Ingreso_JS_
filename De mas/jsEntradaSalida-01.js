/*
Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),
cantidad de días que durará el viaje.

informar:
a)el lugar más elegido //contador comparacion
b)el nombre del titular que más días viaje. // maximonombre
c)el promedio de días por viaje, de la temporada verano. // contador y acumulador temporadaverano 

*/

function mostrar() {

    var nombreIngresado;
    var temporada;
    var cantidadDeDias;
    var lugar;
    var lugarMasElegido;
    var respuesta;
    var contadorDePuertoMadryn;
    var contadorDeCordoba;
    var contadorDeVillaGessel;
    var promedio;
    var nombreMasDias;
    var cantidadDeDiasMaximo;
    var acumuladorDeDiasVerano;
    var contador;
    var flag;
    var bandera;


    nombre = "no ingresado";
    tipo = "no ingresado";
    temporada = "no ingresado";
    lugar = "no ingresado";

    contador=0;
    contadorDePuertoMadryn = 0;
    contadorDeVillaGessel = 0;
    contadorDeCordoba = 0;
    acumuladorDeDiasVerano =0;

    bandera = 0;
    flag = 0;



    do {
       
        nombreIngresado = prompt("ingrese el nombre");

        lugar = prompt("ingrese el lugar");

        while (lugar != "puerto madryn" && lugar != "villa gessel" && lugar != "cordoba") {
            lugar = prompt("ingrese el lugar");
        }

        temporada = prompt("ingrese el temporada");

        while (temporada != "otoño" && temporada != "primavera" && temporada != "invierno" && temporada != "verano") {
            temporada = prompt("ingrese temporada");
        }

        cantidadDeDias = prompt("ingrese la cantidad de dias");

        while (isNaN(cantidadDeDias)) {
            cantidadDeDias = prompt("ingrese la cantidad de dias");
        }
        cantidadDeDias = parseInt(cantidadDeDias)

        switch (lugar) {
            case "puerto madryn":
                contadorDePuertoMadryn++;
                break;

            case "villa gessel":
                contadorDeVillaGessel++;
                break;

            case "cordova":
                contadorDeCordoba++;
                break;

            default:
                break;
        }

        if (contadorDePuertoMadryn > contadorDeVillaGessel && contadorDePuertoMadryn > contadorDeCordoba) {
            lugarMasElegido = "puerto Madryn";
        
        } else {
            if (contadorDeVillaGessel > contadorDeCordoba && contadorDeVillaGessel > contadorDePuertoMadryn) {
                lugarMasElegido = "Villa Gessel";
        
            } else {
        
                lugarMasElegido = "Cordoba";
        
            }
        }


        if (flag == 0) {
            nombreMasDias = nombreIngresado;
            cantidadDeDiasMaximo = cantidadDeDias;

            flag = 1;
        } else {
            if (cantidadDeDias > cantidadDeDiasMaximo) {
                nombreMasDias = nombreIngresado;
                cantidadDeDiasMaximo = cantidadDeDias;
            }
        }

        if (temporada == "verano") {
            
            acumuladorDeDiasVerano += cantidadDeDias;
            contador++;
        }

        respuesta = prompt("Quiere añadir otro importe?");
        

    } while (respuesta == "si");

    promedio = acumuladorDeDiasVerano / contador;

    document.write("el lugar más elegido  " + lugarMasElegido + "<br>"
        + "el nombre del titular que más días viaje es " + nombreMasDias + "<br>"
        + "el promedio de días por viaje, de la temporada verano es " + promedio + "<br>");

}//Fin De Todo
