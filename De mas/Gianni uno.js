/*
Ejercicio 1

El laboratorio Rossi necesita desarrollar un programa que permita obtener algunos datos estadísticos 
sobre las muestras de sangre que recibe el sector de "Derivaciones", se sabe que dicho sector recibe:
Tipo de muestra: "Sangre", "Orina", y "Otros" (validar)
Cantidad de tubos, (validar, no pueden ser menos de 3 tubos y no más de 7 tubos de muestras)
Procedencia de las muestras: Argerich, Duran, Fernández, Rapela (validar)
Precio de la prestación: (validar valor mínimo 10.000 y valor máximo 55.000)

Se necesita saber:

// 1) Del primer ingreso: tipo de muestra, precio y su procedencia
// 2) Del quinto ingreso de muestra (si existe) solo el precio y la cantidad de tubos
// 3) El promedio de dinero ganado en total
// 4) Del mayor precio de prestación: la cantidad de tubos, su procedencia y el tipo de muestras
// 5) Si el total de dinero recaudado supera los 500.000 pesos AFIP hace de las suyas 
// y toca pagar ingresos brutos del 25% y si supera los 750.000 es 40%



*/
function mostrar() {

    var tipo;
    var cantidadDeTubos;
    var procedenciaDeMuestra;
    var primerProcedencia;
    var primerPrecio;
    var primerTipoDeMuestra;
    var precio;
    var respuesta;
    var banderaDelQuinto;
    var quintoprecio;
    var ingresosBrutos;
    var promedio;
    var acumuladorDePrecio;
    var quintoCantidadDeTubos;
    var tipoDelMasCaro;
    var maximoCantidadDeTubos;
    var procedenciaDelMaximo;
    var contador;
    var maximoPrestacion;
    var flag;
    var bandera;


    nombre = "no ingresado";
    tipo = "no ingresado";
    procedenciaDeMuestra = "no ingresado";

    contador = 0;
    contadorDe1 = 0;
    contadorDe2 = 0;
    contadorDe3 = 0;
    acumuladorDePrecio = 0;
    banderaDelQuinto = 0;
    bandera = 0;
    flag = 0;



    do {


        tipo = prompt("ingrese tipo");

        while (tipo != "sangre" && tipo != "orina" && tipo != "otros") {
            tipo = prompt("Error ingrese tipo");
        }

        procedenciaDeMuestra = prompt("ingrese procedencia De Muestra");

        while (procedenciaDeMuestra != "argerich" && procedenciaDeMuestra != "duran" && procedenciaDeMuestra != "fernandez" && procedenciaDeMuestra != "rapela") {
            procedenciaDeMuestra = prompt("Error ingrese procedencia De Muestra");
        }

        cantidadDeTubos = prompt("Ingrese  cantidad De Tubos de prestacion");

        while (cantidadDeTubos < 3 || cantidadDeTubos > 7) {
            cantidadDeTubos = prompt("Ingrese  cantidad De Tubos de prestacion");
        }
        cantidadDeTubos = parseInt(cantidadDeTubos);


        precio = prompt("Ingrese  precio de prestacion");

        while (precio < 10000 || precio > 55000) {
            precio = prompt("Ingrese  precio de prestacion");
        }
        precio = parseInt(precio);





        if (bandera == 0) {

            primerProcedencia = procedenciaDeMuestra;
            primerPrecio = precio;
            primerTipoDeMuestra = tipo;
            bandera = 1;
        }

        if (contador == 5 && banderaDelQuinto == 0) {
            quintoprecio = precio;
            quintoCantidadDeTubos = cantidadDeTubos;
            banderaDelQuinto = 1;

        }

        if (flag == 0) {
            maximoPrestacion = precio;
            tipoDelMasCaro = tipo;
            maximoCantidadDeTubos = cantidadDeTubos;
            procedenciaDelMaximo = procedenciaDeMuestra;

            flag = 1;
        } else {
            if (precio > maximoPrestacion) {
                maximoPrestacion = precio;
                tipoDelMasCaro = tipo;
                maximoCantidadDeTubos = cantidadDeTubos;
                procedenciaDelMaximo = procedenciaDeMuestra;
            }
        }

        respuesta = prompt("Quiere añadir otro importe?");
        acumuladorDePrecio += precio;
        contador++;

    } while (respuesta == "si");

    promedio = acumuladorDePrecio / contador;

    if (acumuladorDePrecio > 750000) {
        ingresosBrutos = acumuladorDePrecio * 1.40;
        document.write("mas 25% de Ingresos Brutos el total es de " + ingresosBrutos);
    } else {
        if (acumuladorDePrecio > 500000) {
            ingresosBrutos = acumuladorDePrecio * 1.25;
            document.write("mas 40% de Ingresos Brutos el total es de " + ingresosBrutos);
        }


    }
    
document.write("tipo de muestra Del primer ingreso " + primerTipoDeMuestra + " y su precio es " + primerPrecio + " y su procedencia es " + primerProcedencia + "<br>"
        + "El promedio total es " + promedio + "<br>"
        + "la mayor precio de prestación es " + maximoPrestacion + " y su cantidad es " + cantidadDeTubos + "<br>"
        + "el precio de prestacion del maximo es " + maximoPrestacion + "<br>"
        + "la procedencia del maximo es " + procedenciaDelMaximo + "<br>");

    if (contador >= 5) {

        document.write("precio del quinto Ingreso " + quintoprecio + " y su cantidad es " + quintoCantidadDeTubos + "<br>")
    } else {
        document.write("no hubo quinto ingreso" + "<br>");
    }

}//Fin De Todo
/*
Augusto Delgado
Div B 
*/

