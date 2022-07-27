/*
3.	De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido

Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)

El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos. //Maximo
c. Nombre y apellido del primer empleado que no tiene hijos. //bandera

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 5000
   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

*/


function mostrar() {

	var nombreIngresado;
	var sexoIngresado;
	var apellidoIngresado;
	var cantidadDeHijos;
	var contadorDeFemenino;
	var contadorDeMasculino;
	var contadorDeNb;
	var asignacionFamiliar;
	var pymePagar;
	var porcentajeNb;
	var porcentajeMascilino;
	var nombreSinHijos;
	var apellidoSinHijos;
	var porcentajeFemenino;
	var empleadoNBMasCantidadDeHijos;
	var nombreMasCantidadDeHijos;
	var flag;
	var bandera;


	nombre = "no ingresado";
	sexoIngresado = "no ingresado";
	apellidoIngresado = "no ingresado";

	contadorDeNb = 0;
	contadorDeMasculino = 0;
	contadorDeFemenino = 0;
	asignacionFamiliar = 0;
	bandera = 0;
	flag = 0;



	for (let contador = 0; contador < 10; contador++) {

		nombreIngresado = prompt("ingrese el nombre");
		apellidoIngresado = prompt("ingrese el apellido");


		sexoIngresado = prompt("ingrese el sexoIngresado(f o m o nb)");

		while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb") {
			sexoIngresado = prompt("Error ingrese el sexo(f o m o nb)");
		}

		cantidadDeHijos = prompt("Ingrese  cantidad De Hijos");

		while (cantidadDeHijos < 0) {
			cantidadDeHijos = prompt("Error Ingrese cantidad De Hijos");
		}
		cantidadDeHijos = parseInt(cantidadDeHijos);


		switch (sexoIngresado) {
			case "f":
				contadorDeFemenino++;
				break;

			case "m":
				contadorDeMasculino++;
				break;

			case "nb":
				contadorDeNb++;

				if (cantidadDeHijos > 0) {
					if (flag == 0) {
						empleadoNBMasCantidadDeHijos = cantidadDeHijos;
						nombreMasCantidadDeHijos = nombreIngresado;

						flag = 1;
					} else {
						if (cantidadDeHijos > empleadoNBMasCantidadDeHijos) {
							empleadoNBMasCantidadDeHijos = cantidadDeHijos;
							nombreMasCantidadDeHijos = nombreIngresado;
						}
					}
				}

				break;

			default:
				break;
		}

		if (cantidadDeHijos == 0 && bandera == 0) {
			nombreSinHijos = nombreIngresado;
			apellidoSinHijos = apellidoIngresado;

			bandera = 1;
		}

		if (cantidadDeHijos == 1) {
			asignacionFamiliar = 5000;
		} else {
			if (cantidadDeHijos == 2) {
				asignacionFamiliar = 8000;
			} else {
				if (cantidadDeHijos > 2) {
					asignacionFamiliar = 10000;
				}
			}
		}

		asignacionFamiliar = parseInt(asignacionFamiliar);
		pymePagar += asignacionFamiliar;


	}//Fin Del For

	porcentajeNb = ((contadorDeNb * 100) / 10);
	porcentajeMascilino = ((contadorDeMasculino * 100) / 10);
	porcentajeFemenino = ((contadorDeFemenino * 100) / 10);



	document.write("Porcentaje de empleados masculinos es  " + porcentajeMascilino + "<br>"
		+ "Porcentaje de empleados Femenino es " + porcentajeFemenino + "<br>"
		+ "Porcentaje de empleados No binario es " + porcentajeNb + "<br>"
		+ "El nombre del empleado No Binario con mas cantidad de hijos es " + empleadoNBMasCantidadDeHijos + "<br>"
		+ "Nombre del primer empleado que no tiene hijos es " + nombreSinHijos + "y su apellido es " + apellidoSinHijos + "<br>"
		+ "total de dinero que debera pagar la PYME " + pymePagar + "<br>");

}//Fin De Todo


/*
/*
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 5000
   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

*/

