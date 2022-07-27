/*
2. En una partida de todos contra todos de CS-GO (Juego de disparos) 
un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR

Nombre del jugador más joven.
El promedio de bajas.
Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.


*/
function mostrar() {

    var nombreIngresado;
    var cantidadDeBajas;
    var cantidadDeMuertes;
    var contador;
    var edad;
    var jugadoresEdad20o30;
    var promedio;
    var acumuladorDeBajas;
    var jugadorMasJoven;
    var nombreDelMasJoven;
    var flag;


    nombreIngresado = "no ingresado";
    jugadorMasJoven = "no ingresado";
    nombreDelMasJoven = "no ingresado";

    contador = 0;
    jugadoresEdad20o30 = 0;
    acumuladorDeBajas = 0;
    flag = 0;



    for (let contador = 0; contador < 5; contador++) {

        nombreIngresado = prompt("ingrese el nombre");

        edad = prompt("Ingrese edad");

        while (edad < 18 || isNaN(edad)) {
            edad = prompt("Error Ingrese edad");
        }
        edad = parseInt(edad);

        cantidadDeBajas = prompt("Ingrese cantidad De Bajas");

        while (cantidadDeBajas < 0 || isNaN(cantidadDeBajas)) {
            cantidadDeBajas = prompt("Error Ingrese cantidad De Bajas");
        }
        cantidadDeBajas = parseInt(cantidadDeBajas);

        cantidadDeMuertes = prompt("Ingrese cantidad De Muertes");

        while (cantidadDeMuertes < 0 || isNaN(cantidadDeMuertes)) {
            cantidadDeMuertes = prompt("Error Ingrese cantidad De Muertes");
        }
        cantidadDeMuertes = parseInt(cantidadDeMuertes);

        if (flag == 0) {
            jugadorMasJoven = edad;
            nombreDelMasJoven = nombreIngresado;

            flag = 1;
        } else {

            {
                if (edad < jugadorMasJoven) {
                    jugadorMasJoven = edad;
                    nombreDelMasJoven = nombreIngresado;
                }
            }
        }

        if (edad >= 20 && edad < 30 && cantidadDeBajas >= 10 && cantidadDeBajas < 15 ) {
            jugadoresEdad20o30++;
        } 


        acumuladorDeBajas += cantidadDeBajas;
        
    }

    promedio = cantidadDeBajas / 5;


    document.write("Nombre del jugador más joven " + nombreDelMasJoven + "<br>"
        + "El promedio de bajas es " + promedio + "<br>"
        + "La Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15 es " + jugadoresEdad20o30 + "<br>");

}//Fin De Todo

/*
Nombre del jugador más joven.
El promedio de bajas.
Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
Augusto Delgado
Div B 
*/


