/*
Para una veterinaria se pide clasificar el ingreso de pacientes hasta que el usuario quiera (se limita a 1 perrito por ingreso), 
se les pide: nombre, precio de la consulta, raza: (validar entre caniche, ovejero, siberiano), edad y peso 
determinar:
// El nombre y la raza del perro con más peso
// El promedio de edad por raza.
// La facturación en bruto de la veterinaria
// La cantidad de siberianos cuya edad esté entre 2 y 5 años.
5) El precio final de cada oferta teniendo en cuenta los siguientes descuentos:
    A) Si paga con efectivo: 45% de descuento 
    B) Si paga con tarjeta de crédito: 15% de aumento
    C) Si paga con debito el precio se mantiene igual
    D) Si paga con MercadoPago: 5% de descuento
*/

//do While
function mostrar() {

    var nombreIngresado;
    var raza;
    var modoDePago;
    var peso;
    var edad;
    var precio;
    var respuesta;
    var precioTotal;
    var contadorDesiberianoEdad;
    var contador;
    var nombreDelMasPeso;
    var razaMasPeso;
    var promedioEdadOvejero;
    var promedioEdadSiberiano;
    var promedioEdadCaniche;
    var acumuladorEdadOvejero;
    var acumuladorEdadCaniche;
    var acumuladorEdadSiberiano;
    var contadorDeovejero;
    var precioBruto;
    var contadorDeCaniche;
    var contadorDeSiberiano;
    var maximoPeso;
    var flag;
    var bandera;


    nombre = "no ingresado";
    raza = "no ingresado";
    nombreDelMasPeso = "no ingresado";
    razaMasPeso = "no ingresado";
    maximoPeso = "no ingresado";

    contador = 0;
    contadorDesiberianoEdad = 0;
    precioTotal = 0;
    precioBruto = 0;
    acumuladorEdadOvejero = 0;
    acumuladorEdadCaniche = 0;
    acumuladorEdadSiberiano = 0;
    contadorDeovejero = 0;
    contadorDeCaniche = 0;
    contadorDeSiberiano = 0;
    bandera = 0;
    flag = 0;



    do {
        nombreIngresado = prompt("ingrese el nombre");

        raza = prompt("ingrese raza");

        while (raza != "ovejero" && raza != "caniche" && raza != "siberiano") {
            raza = prompt("Error ingrese raza");
        }

        precio = prompt("Ingrese precio");

        while (precio < 0 || precio > 10000 || isNaN(precio)) {
            precio = prompt("Error Ingrese precio");
        }
        precio = parseInt(precio);

        edad = prompt("Ingrese edad");

        while (isNaN(edad)) {
            edad = prompt("Error Ingrese edad");
        }
        edad = parseInt(edad);


        peso = prompt("Ingrese peso");

        while (isNaN(peso)) {
            peso = prompt("Error Ingrese peso");
        }
        peso = parseInt(peso);

        modoDePago = prompt("ingrese modo De Pago");

        while (modoDePago != "efecivo" && modoDePago != "tarjeta de credito" && modoDePago != "debito" && modoDePago != "mercado pago") {
            modoDePago = prompt("Error ingrese modo De Pago");
        }

        if (flag == 0) {
            maximoPeso = peso;
            nombreDelMasPeso = nombreIngresado;
            razaMasPeso = raza;

            flag = 1;
        } else {
            if (peso > maximoPeso) {
                maximoPeso = peso;
                nombreDelMasPeso = nombreIngresado;
            }
        }

        //5) El precio final de cada oferta teniendo en cuenta los siguientes descuentos:
        // A) Si paga con efectivo: 45% de descuento 
        // B) Si paga con tarjeta de crédito: 15% de aumento
        // C) Si paga con debito el precio se mantiene igual
        // D) Si paga con MercadoPago: 5% de descuento

        switch (modoDePago) {
            case "mercado pago":
                precioBruto = precio * 0.95;
                break;

            case "efectivo":
                precioBruto = precio * 0.55;
                break;
            case "targeta de credito":
                precioBruto = precio * 1.15;

                break;

            case "debito":
                precioBruto = precio;

            default:
                break;
        }


        switch (raza) {
            case "ovejero":
                acumuladorEdadOvejero += edad;
                contadorDeovejero++;
                break;

            case "caniche":
                acumuladorEdadCaniche += edad;
                contadorDeCaniche++;

                break;

            case "siberiano":
                acumuladorEdadSiberiano += edad;
                contadorDeSiberiano;

                if (edad > 2 && edad <= 5) {
                    contadorDesiberianoEdad++;
                }

                break;

            default:
                break;
        }





        respuesta = prompt("Quiere añadir otro importe?");
        precioTotal += precioBruto;
        contador++;

    } while (respuesta == "si");

    promedioEdadOvejero = acumuladorEdadOvejero / contadorDeovejero;
    promedioEdadCaniche = acumuladorEdadCaniche / contadorDeCaniche;
    promedioEdadSiberiano = acumuladorEdadSiberiano / contadorDeSiberiano;




    document.write(" El maximo es " + maximoPeso + " y el nombre es " + nombreDelMasPeso + " y la raza del perro es " + razaMasPeso + "<br>"
        + "El promedio de edad de caniche es " + promedioEdadCaniche + "<br>"
        + "El promedio de edad de siberiano es " + promedioEdadSiberiano + "<br>"
        + "El promedio de edad de ovejero es " + promedioEdadOvejero + "<br>"
        + "La cantidad de siberianos cuya edad esté entre 2 y 5 años " + contadorDesiberianoEdad + "<br>"
        + "La facturación en bruto de la veterinaria es " + precioTotal);

}//Fin De Todo.
/*
Augusto Delgado
Div B 
*/

