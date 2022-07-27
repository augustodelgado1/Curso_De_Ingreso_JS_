/*
2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):
*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una
comisión del 10% sobre ese total.De no alcanzar esta cifra, su comision sera del 5%.

Mostrar:
// a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
// b. El nombre del vendedor que mas dinero recaudo en comisiones
*/
//do While
function mostrar() {

	var nombreDeVendedor;
	var contador;
	var importe;
	var respuesta;
	var contadorDeJuan;
	var contadorMaria;
	var contadorDePedro;
	var acumuladorJuan;
	var acumuladorMaria;
	var acumuladorPedro;
	var flag;
	var bandera;
	var comisioJuan;
	var comisioPedro;
	var comisioMaria;
    var mayorVendedor;
    

	nombreDeVendedor = "no ingresado";
	mayorVendedor = "no ingresado";

	contador = 0;
	contadorDeJuan = 0;
	contadorMaria = 0;
	contadorDePedro = 0;
	acumuladorJuan = 0;
	acumuladorMaria = 0;
	acumuladorPedro = 0;
    comisioMaria =0;
    comisioPedro =0;
    comisioJuan =0;
	bandera = 0;
	flag = 0;



	do {

		nombreDeVendedor = prompt("ingrese nombre De Vendedor");

		while (nombreDeVendedor != "juan" && nombreDeVendedor != "maria" && nombreDeVendedor != "pedro") {
			nombreDeVendedor = prompt("Error ingrese nombre De Vendedor");
		}

		importe = prompt("Ingrese importe");

		while (importe < 0 || importe > 10000 || isNaN(importe)) {
			importe = prompt("Error Ingrese importe");
		}
		importe = parseInt(importe);

		switch (nombreDeVendedor) {
			case "juan":
				contadorDeJuan++;
                acumuladorJuan += importe;

                if (acumuladorJuan > 500000) {
                    comisioJuan = acumuladorJuan * 0.10;
                } else {
                    comisioJuan = acumuladorJuan * 0.05;
                }
				break;

			case "maria":
				contadorMaria++;
                acumuladorMaria += importe;
                if (acumuladorMaria > 500000) {
                    comisioMaria = acumuladorMaria * 0.10;
                } else {
                    comisioMaria = acumuladorMaria * 0.05;
                }
				break;

			case "pedro":
				contadorDePedro++;
                acumuladorPedro += importe;
                if (acumuladorPedro > 500000) {
                    comisioPedro = acumuladorPedro * 0.10;
                } else {
                    comisioPedro = acumuladorPedro * 0.05;
                }
				break;

			default:
				break;
		}

        if (comisioJuan > comisioMaria && comisioJuan > comisioPedro) {
            mayorVendedor = "Juan";
        
        } else {
            if (comisioMaria > comisioPedro && comisioMaria > comisioJuan) {
                mayorVendedor = "Maria";
        
            } else {
        
                mayorVendedor = "Pedro";
        
        
            }
        }

		respuesta = prompt("Quiere añadir otro importe?");
		contador++;

	} while (respuesta == "si");

	


	document.write(" Importe total de ventas Juan " + acumuladorJuan + " cantidad de ventas "+ contadorDeJuan + " comision "+ comisioJuan + "<br>"
		+ "Importe total de ventas Maria " + acumuladorMaria + " cantidad de ventas "+ contadorMaria + " comision "+ comisioMaria + "<br>"
		+ "Importe total de ventas Pedro " + acumuladorPedro +" cantidad de ventas "+ contadorDePedro + " comision "+ comisioPedro + "<br>"
		+ "El nombre del vendedor que mas dinero recaudo en comisiones " + mayorVendedor + "<br>");

}//Fin De Todo
/*
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
// b. El nombre del vendedor que mas dinero recaudo en comisiones
Augusto Delgado
Div B 
*/