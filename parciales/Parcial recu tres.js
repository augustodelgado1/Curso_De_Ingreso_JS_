/*
3. En una carga indefinida de datos (hasta que el usuario quiera) 
se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR

Cantidad total de ingreso bruto en USD de cada criptomoneda.
Sabiendo que el coste de electricidad:
BTC es de un 7% y para ETH es un 4%. 
Calcular el ingreso total neto en USD.
Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $220.

*/
function mostrar() {

    var nombreDeLaCriptomoneda;
    var cantidad;
    var cotizacion;
    var aumento;
    var contador;
    var respuesta;
    var impotreTotal;
    var impotreNeto;
    var cantidadTotalDeBtc;
    var cantidadTotalDeEth;


    nombreDeLaCriptomoneda = "no ingresado";

    contador = 0;
    cantidadTotalDeBtc = 0;
    cantidadTotalDeEth = 0;




    do {

        nombreDeLaCriptomoneda = prompt("ingrese nombreDeLaCriptomoneda");

        while (nombreDeLaCriptomoneda != "btc" && nombreDeLaCriptomoneda != "eth") {
            nombreDeLaCriptomoneda = prompt("Error ingrese nombreDeLaCriptomoneda");
        }


        cantidad = prompt("Ingrese cantidad");

        while (cantidad < 0 || cantidad > 10000 || isNaN(cantidad)) {
            cantidad = prompt("Error Ingrese cantidad");
        }
        cantidad = parseInt(cantidad);

        cotizacion = prompt("Ingrese cotizacion");

        while (cotizacion < 0 || cotizacion > 10000 || isNaN(cotizacion)) {
            cotizacion = prompt("Error Ingrese cotizacion");
        }
        cotizacion = parseInt(cotizacion);

        impotreNeto = cotizacion * 220;

        impotreTotal = cantidad * cotizacion;


        switch (nombreDeLaCriptomoneda) {
            case "btc":
                cantidadTotalDeBtc += cotizacion;
                aumento = impotreTotal * 1.07;




                break;

            case "eth":
                cantidadTotalDeEth += cotizacion;
                aumento = impotreTotal * 1.04;

                break;

            default:
                break;
        }

        respuesta = prompt("Quiere añadir otro importe?");
        contador++;

    } while (respuesta == "si");



}//Fin De Todo


/*

Augusto Delgado
Div B 
*/