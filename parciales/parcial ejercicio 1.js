/*
*Ejercicio 1
Se pide cargar la ficha médica para 5 jugadores de fútbol categoría mayores.
Se solicita Nombre, Edad (entre 18 y 36), Peso y Altura. Se solicita:
//  A) Nombre del jugador más joven. 
//  B) El peso del jugador más alto.
//  C) Promedio de altura del equipo.
//  D) Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg.
 */
//for
function mostrar() {

    var nombreIngresado;
    var tipo;
    var altura;
    var nombreMasJoven;
    var contadorDe1;
    var edad;
    var peso;
    var promedio;
    var alturaDelEquipo;
    var pesoDeMasAlto;
    var jugadorMasAlto;
    var jugadorMasJoven;
    var flag;
    var bandera;

    nombre = "no ingresado";
    tipo = "no ingresado";
    pesoDeMasAlto = "no ingresado";
    jugadorMasJoven = "no ingresado";
    jugadorMasAlto = "no ingresado";

    alturaDelEquipo = 0;
    contadorDe1=0
    bandera = 0;
    flag = 0;



    for (let contador = 0; contador < 3; contador++) {

    nombreIngresado = prompt("ingrese el nombre");

    peso = prompt("Ingrese peso");
    while (isNaN(peso)) {
        peso = prompt("Error ingrese peso ");
    }
    peso = parseInt(peso);

    altura = prompt("Ingrese altura");
    while (isNaN(altura)) {
        altura = prompt("Error ingrese altura ");
    }
    altura = parseInt(altura);


    edad = prompt("Ingrese  edad");

    while (edad < 18 || edad > 36 || isNaN(edad)) {
        edad = prompt("Error Ingrese edad");
    }
    edad = parseInt(edad);

   if (flag == 0) {
        jugadorMasJoven = edad;
        nombreMasJoven = nombreIngresado;

        flag = 1;
    } else {

        {
            if (edad < jugadorMasJoven) {
                jugadorMasJoven = edad;
                nombreMasJoven = nombreIngresado;
            }
        }
    }

    if (bandera == 0) {
        jugadorMasAlto = altura;
        pesoDeMasAlto = peso;
    
        bandera = 1;
    } else {
        if (altura > jugadorMasAlto) {
            jugadorMasAlto = altura;
            pesoDeMasAlto = peso;
        }
    }

    if (edad > 20 && edad <= 30 && peso >= 70 && peso <= 90) {
        contadorDe1++;
    } 

    alturaDelEquipo += altura;
    

    

    }//Fin Del For

promedio = alturaDelEquipo / 5;


document.write("Nombre del jugador más joven es " + nombreMasJoven + "<br>"
        + "El peso del jugador más alto es " + pesoDeMasAlto + "<br>"
        + "Promedio de altura del equipo es " + promedio + "<br>"
        + "El valor de la colección entera es " + promedio + "<br>"
        + "Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg " + contadorDe1 + "<br>");

}//Fin De Todo
/*
Augusto Delgado
Div B 
*/


