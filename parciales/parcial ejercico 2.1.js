/*
Un aficionado a las cartas coleccionables desea organizar su colección, para esto necesita ingresar en un programa:
nombre, tipo de carta (validar monstruo, arma, mágica) y su cantidad. Además deberá 
Especificar su rareza (validar común, rara, legendaria), 
precio (validar entre $250 y $5000). dejar ingresar hasta que el usuario quiera e informar lo siguiente:

*La cantidad de cartas de cada tipo.
*De las cartas raras la que menos precio tiene y su nombre
*El valor de la colección entera
*Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)
*/
//do While
function mostrar() {

	var nombreIngresado;
	var tipo;
	var cantidad;
	var rareza;
	var contador;
	var precio;
	var respuesta;
	var contadorDe1;
	var contadorDe2;
	var contadorDe3;
	var promedio;
	var porcentajeComunes;
	var porcentajeLegendarias;
	var porcentajeRaras;
	var acumuladorDe1;
	var acumuladorDe2;
	var acumuladorDe3;
    var acumuladorDeMagica;
    var acumuladorDeArma;
    var acumuladorDeMounstro;
    var acumuladorDeCartas;
	var precioBruto;
	var minimoPrecio;
    var nombreMinimoPrecio;
	var flag;
	var bandera;


	nombre = "no ingresado";
	tipo = "no ingresado";
	rareza = "no ingresado";
	minimoPrecio = "no ingresado";
	nombreMinimoPrecio = "no ingresado";

	contador = 0;
	contadorDe1 = 0;
	contadorDe2 = 0;
	contadorDe3 = 0;
    acumuladorDeCartas=0;
    acumuladorDeMagica =0;
    acumuladorDeArma =0;
    acumuladorDeMounstro =0;
	acumuladorDe1 = 0;
	acumuladorDe2 = 0;
	acumuladorDe3 = 0;
	bandera = 0;
	flag = 0;



	do {
		nombreIngresado = prompt("ingrese el nombre");

		tipo = prompt("ingrese tipo");

		while (tipo != "monstruo" && tipo != "arma" && tipo != "magica") {
			tipo = prompt("Error ingrese tipo");
		}

        cantidad = prompt("Ingrese cantidad");

		while (isNaN(cantidad)) {
			cantidad = prompt("Error Ingrese cantidad");
		}
		cantidad = parseInt(cantidad);

		rareza = prompt("ingrese rareza");

		while (rareza != "comun" && rareza != "legendaria" && rareza != "rara") {
			rareza = prompt("Error ingrese rareza");
		}

		precio = prompt("Ingrese precio");

		while (precio < 250 || precio > 5001 || isNaN(precio)) {
			precio = prompt("Error Ingrese precio");
		}
		precio = parseInt(precio);



		//console.log(tipo + nombreIngresado + rareza + precio);

        switch (tipo) {
			case "mounstro":
				acumuladorDeMounstro += cantidad;
				break;

			case "arma":
				acumuladorDeArma += cantidad;
				break;

			case "magica":
				acumuladorDeMagica += cantidad;
				break;

			default:
				break;
		}



		switch (rareza) {
			case "legendaria":
				acumuladorDe1 += cantidad;
				break;

			case "rara":
				acumuladorDe2 += cantidad;
                if (flag == 0) {
                    minimoPrecio = precio;
                    nombreMinimoPrecio = nombreIngresado;
                   
                
                    flag = 1;
                } else {
                
                    {
                        if (precio < minimoPrecio) {
                            minimoPrecio = precio;
                            nombreMinimoPrecio = nombreIngresado;

                        }
                    }
                }
				break;

			case "comun":
				acumuladorDe3 += cantidad;
				break;

			default:
				break;
		}

		respuesta = prompt("Quiere añadir otro importe?");
        precioBruto = precio*cantidad;
        acumuladorDeCartas = cantidad;
		contador++;

	} while (respuesta == "si");

	porcentajeComunes = ((acumuladorDe3 * 100) / acumuladorDeCartas);
	porcentajeRaras = ((acumuladorDe2 * 100) / acumuladorDeCartas);
	porcentajeLegendarias = ((acumuladorDe1 * 100) / acumuladorDeCartas);


	document.write("La cantidad de cartas Mounstro " + acumuladorDeMounstro + "<br>"
		+ "La cantidad de cartas Arma " + acumuladorDeArma + "<br>"
		+ "La cantidad de cartas Magica " + acumuladorDeMagica + "<br>"
		+ "El valor de la colección entera es " + precioBruto + "<br>"
		+ "porcentaje de las cartas Comunes" +  porcentajeComunes + "<br>"
		+ "porcentaje de las cartas Raras " + porcentajeRaras + "<br>"
		+ "porcentaje de las cartas Legendarias " + porcentajeLegendarias + "<br>"
        + "la carta rara la que menos precio tiene es " + nombreMinimoPrecio + "y su precio es " + minimoPrecio);

}//Fin De Todo
/*
Augusto Delgado
Div B 
*/


