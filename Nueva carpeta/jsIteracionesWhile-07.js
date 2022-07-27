//for
function mostrar() {

	var nombre;
	var tipo;
	var rareza
	var cantidad;
	var precio;
	var peso;
	var contadorDe1;
	var contadorDe2;
	var contadorDe3;
	var promedio;
	var acumuladorDe1;
	var acumuladorDe2;
	var acumuladorDe3;
	var acumuladorDe4;
	var maximoDe;
	var minimoDe;
	var flag;
	var bandera;

	nombre = "no ingresado";
	tipo = "no ingresado";
	rareza = "no ingresado";
	minimoDe = "no ingresado";
	maximoDe = "no ingresado";

	contadorDe3 = 0;
	contadorDe1 = 0;
	contadorDe2 = 0;
	acumuladorDe1 = 0;
	acumuladorDe2 = 0;
	acumuladorDe3 = 0;
	acumuladorDe4 = 0;
	bandera = 0;
	flag = 0;



	for (let contador = 0; contador < 5; contador++) {

		nombre = prompt("ingrese el nombre");

		
		tipo = prompt("ingrese tipo");

		while (tipo != "f" && tipo != "m" && tipo != "nb") {
			tipo = prompt("Error ingrese tipo");
		}

		rareza = prompt("ingrese rareza");

		while (rareza != "f" && rareza != "m" && rareza != "nb") {
			rareza = prompt("Error ingrese rareza");
		}

		peso = prompt("Ingrese peso");
		while (isNaN(peso)) {
			peso = prompt("Error ingrese peso ");
		}
		peso = parseInt(peso);


		precio = prompt("Ingrese  precio");

	while (precio < 0 || precio > 10000 || isNaN(precio)) {
			precio = prompt("Error Ingrese precio");
		}
		precio = parseInt(precio);

		
		
		
		
	}//Fin Del For
	
	promedio = s / 5;
	
	
	
	console.log(tipo + nombreIngresado + rareza + precio);
	
	document.write("La cantidad de cartas Mounstro " + contadorDe1 + "<br>"
		+ "La cantidad de cartas Arma " + contadorDe2 + "<br>"
		+ "La cantidad de cartas Magica " + contadorDe3 + "<br>"
		+ "El valor de la colección entera es " + promedio + "<br>"
		+ "porcentaje de las cartas Comunes" + acumuladorDe1 + "<br>"
		+ "porcentaje de las cartas Raras " + acumuladorDe2 + "<br>"
		+ "porcentaje de las cartas Legendarias " + acumuladorDe3 + "<br>");

}//Fin De Todo



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
	var maximoDe;
	var minimoDe;
	var flag;
	var bandera;


	nombre = "no ingresado";
	tipo = "no ingresado";
	rareza = "no ingresado";
	minimoDe = "no ingresado";
	maximoDe = "no ingresado";

	contador = 0;
	contadorDe1 = 0;
	contadorDe2 = 0;
	contadorDe3 = 0;
	acumuladorDe1 = 0;
	acumuladorDe2 = 0;
	acumuladorDe3 = 0;
	bandera = 0;
	flag = 0;



	do {
		nombreIngresado = prompt("ingrese el nombre");

		tipo = prompt("ingrese tipo");

		while (tipo != "f" && tipo != "m" && tipo != "nb") {
			tipo = prompt("Error ingrese tipo");
		}

		rareza = prompt("ingrese rareza");

		while (rareza != "f" && rareza != "m" && rareza != "nb") {
			rareza = prompt("Error ingrese rareza");
		}

		precio = prompt("Ingrese precio");

		while (precio < 0 || precio > 10000 || isNaN(precio)) {
			precio = prompt("Error Ingrese precio");
		}
		precio = parseInt(precio);

		switch (estadoCivil) {
			case "casado":
				contadorDe1++;
				break;

			case "soltero":
				contadorDe2++;
				break;

			case "divorciado":
				contadorDe3++;
				break;

			default:
				break;
		}

		respuesta = prompt("Quiere añadir otro importe?");
		contador++;

	} while (respuesta == "si");

	promedio = s / contador;

	porcentajeComunes = ((cantidadComunes * 100) / cantidadCartasTotales);
	porcentajeRaras = ((cantidadRaras * 100) / cantidadCartasTotales);
	porcentajeLegendarias = ((cantidadLegendarias * 100) / cantidadCartasTotales);


	document.write("La cantidad de cartas Mounstro " + porcentajeComunes + "<br>"
		+ "La cantidad de cartas Arma " + porcentajeLegendarias + "<br>"
		+ "La cantidad de cartas Magica " + porcentajeRaras + "<br>"
		+ "El valor de la colección entera es " + precioBruto + "<br>"
		+ "porcentaje de las cartas Comunes" + promedio + "<br>"
		+ "porcentaje de las cartas Raras " + acumuladorDe + "<br>"
		+ "porcentaje de las cartas Legendarias " + acumuladorDe1 + "<br>");

}//Fin De Todo


/*
if (cantidadCasados > cantidadSolteros && cantidadCasados > cantidadDivorciados) {
	CantidadMayorEstadoCivil = "casados";

} else {
	if (cantidadSolteros > cantidadDivorciados && cantidadSolteros > cantidadCasados) {
		CantidadMayorEstadoCivil = "solteros";

	} else {

		CantidadMayorEstadoCivil = "divorciados";


	}
}
console.log(CantidadMayorEstadoCivil);

if (edad >= 18) {
          acumuladorDeMayores += nota;
          contadorDeMayores++;
      } else {
          if (edad > 13 && edad <= 17) {
              acumuladorDeAdolecentes += nota
              contadorAdolecentes++;
          } else {
              if (edad <= 12) {
                acumuladorDeMenoresDeEdad += nota;
                contadorDeMenores++;
              }
              
          }
          
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


 

*/











