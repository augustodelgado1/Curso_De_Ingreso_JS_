/*
Ejercicio 3
UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el 
mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), el 
precio por asiento es 1500 pesos, informar:

A) La cantidad total asientos ocupados
Dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento

Según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento

B) La recaudación total del vuelo

*/

function mostrar() {

    var nombreIngresado;
    var destino;
    var cantidadDeAsientos;
    var kilometros;
    var precio;
    var edad;
    var respuesta;
    var contador;
    var precioBruto;
    var precioPorAsiento;
    var acumuladorDe2;
    var recaudacionTotal;


    nombre = "no ingresado";
    destino = "no ingresado";

    contador = 0;
    precioPorAsiento = 0;
    recaudacionTotal = 0;

    precioBruto = 0;




    do {
        nombreIngresado = prompt("ingrese el nombre");

        destino = prompt("ingrese el destino");

        while (destino != "rio de janeiro" && destino != "italia" && destino != "japon" && destino != "cancun") {
            destino = prompt("Error ingrese el destino");
        }

        precio = 1500;
        precio = parseInt(precio);
        
        cantidadDeAsientos = prompt("Ingrese  cantidadDeAsientos");
        
        while (cantidadDeAsientos < 1 || cantidadDeAsientos > 5) {
        cantidadDeAsientos = prompt("Error Ingrese cantidadDeAsientos");
        }
        cantidadDeAsientos = parseInt(cantidadDeAsientos);

        edad = prompt("Ingrese  edad");

        while (edad < 18 || edad > 35) {
            edad = prompt("Error Ingrese edad");
        }
        edad = parseInt(edad);

        kilometros = prompt("Ingrese  kilometros");

        while (kilometros < 3000 || kilometros > 18000) {
            kilometros = prompt("Error Ingrese kilometros");
        }
        kilometros = parseInt(kilometros);

        precioPorAsiento += precio * cantidadDeAsientos;


        switch (destino) {
            case "japon":
                precioBruto = precioPorAsiento * 1.4;
                break;

            case "rio de janeiro":
                precioBruto = precioPorAsiento * 0.90;
                break;

            case "italia":
                precioBruto = precioPorAsiento * 1.25;
                break;

            default:
                precioBruto = precioPorAsiento * 0.95;
                break;
        }

        switch (cantidadDeAsientos) {
            case 1:
                precioBruto = precioBruto * 0.90;
                break;
            case 2:
            case 3:
                precioBruto = precioBruto * 0.85;
                break;

            case 4:
            case 5:
                precioBruto = precioBruto * 0.80;

                break;

            default:
                break;
        }

        recaudacionTotal += precioBruto;

        respuesta = prompt("Quiere añadir otro importe?");
        contador++;

    } while (respuesta == "si");


}//Fin De Todo
