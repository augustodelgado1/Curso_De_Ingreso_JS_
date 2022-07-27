/*
1. En una veterinaria se están realizando censos para evaluar los animales ingresados por día.
Por este motivo, se le realizará una consulta a los primeros 10 ingresos.
Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
INFORMAR

*Cuál es la mascota más vieja entre los tamaños medianos o grandes.
*Cuál es el promedio de edad de las gatas.
*El porcentaje de cada tipo de mascota

*/
function mostrar() {

    var tamañoDeMascota;
    var sexoDeLaMascota
    var tipoDeMascota;
    var edadDeLaMascota;
    var edadGatas;
    var cotadorDeGatos;
    var contadorDePerro;
    var contadorDeOtro;
    var promedio;
    var porcentajeDePerros;
    var porcentajeDeOtros;
    var porcentajeDeGatos;
    var tipoMaximo;
    var maximoEdad;
    var flag;


    tamañoDeMascota = "no ingresado";
    sexoDeLaMascota = "no ingresado";
    tipoMaximo = "no ingresado";
    maximoEdad = "no ingresado";

    contadorDeOtro = 0;
    cotadorDeGatos = 0;
    contadorDePerro = 0;
    edadGatas=0;
    flag = 0;



    for (let contador = 0; contador < 10; contador++) {

        tamañoDeMascota = prompt("ingrese tamaño De Mascota");

        while (tamañoDeMascota != "chica" && tamañoDeMascota != "mediana" && tamañoDeMascota != "grande") {
            tamañoDeMascota = prompt("Error ingrese tamañoDeMascota");
        }

        sexoDeLaMascota = prompt("ingrese sexo De La Mascota");

        while (sexoDeLaMascota != "hembra" && sexoDeLaMascota != "macho") {
            sexoDeLaMascota = prompt("Error ingrese sexo De La Mascota");
        }

        tipoDeMascota = prompt("ingrese tipo De Mascota");

        while (tipoDeMascota != "gato" && tipoDeMascota != "perro" && tipoDeMascota != "otro") {
            tipoDeMascota = prompt("Error ingrese tipo De Mascota");
        }

        edadDeLaMascota = prompt("Ingrese edad De La Mascota");
        while (edadDeLaMascota < 0 || isNaN(edadDeLaMascota)) {
            edadDeLaMascota = prompt("Error ingrese edad De La Mascota ");
        }
        edadDeLaMascota = parseInt(edadDeLaMascota);

        if (tamañoDeMascota == "mediana" || tamañoDeMascota == "grande") {
            
            if (flag == 0) {
              maximoEdad = edadDeLaMascota;
              tipoMaximo = tipoDeMascota;

            flag = 1;  
            }else {
            if (edadDeLaMascota > maximoEdad) {
                maximoEdad = edadDeLaMascota;
                tipoMaximo = tipoDeMascota;
            }
            
        } 
        }
        
        switch (tipoDeMascota) {
            case "gato":

            if (sexoDeLaMascota == "hembra") {
                edadGatas += edadDeLaMascota;
            }
                
                cotadorDeGatos++;
                break;

            case "perro":

                contadorDePerro++;

                break;

            case "otro":

                contadorDeOtro++;



                break;

            default:
                break;
        }

    }//Fin Del For
        
        
        




    promedio = edadGatas / cotadorDeGatos;

    porcentajeDePerros = (contadorDePerro * 100) / 10;
    porcentajeDeOtros = (contadorDeOtro * 100) / 10;
    porcentajeDeGatos = (cotadorDeGatos * 100) / 10;

    document.write("la mascota más vieja entre los tamaños medianos o grandes " + tipoMaximo + " " + maximoEdad  + "<br>"
        + "el promedio de edad de las gata es " + promedio + "<br>"
        + "El porcentaje de perros es " + porcentajeDePerros + "<br>"
        + "El porcentaje de Gatos es  " + porcentajeDeGatos + "<br>"
        + "El porcentaje de Otros es " + porcentajeDeOtros + "<br>");

}//Fin De Todo
/*
Augusto Delgado
Div B 
*/





