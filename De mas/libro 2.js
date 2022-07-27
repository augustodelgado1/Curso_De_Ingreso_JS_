/*
Ejercicio 2
Se debe llevar a cabo el registro de los ingresos a la guardia, los mismos se dividen en tres grupos:
clínica,  pediátrica y traumatológica . Se pide el ingreso del nombre del paciente, la edad y el tipo de
atención (anteriormente mencionado). Al momento de la recepción se solicita el tipo de prestación 
(prepaga - obra social - sin prestación). El valor de la consulta es de $1800, en caso de contar con 
prepaga la cobertura es del 100%, para obra social es del 80%.
se precisa saber:

La cantidad de pacientes de cada grupo. // contador
Total de dinero que deberán reintegrar las obras sociales. // ac
Total de dinero recaudado en total 
Qué tipo de atención es la más requerida (clínica, pediatría o traumatológica). // comparacion

*/
function mostrar() {

	var nombreIngresado;
	var tipo;
	var cantidadDe;
	var tipoDePrestacion;
	var edad;
    var precioTotal; 
    var precioBruto;
	var respuesta;
	var contadorDeClinica;
	var contadorDeTraumatologia;
	var contadorDePediatrica;
	var promedio;
	var acumuladorObrasocial;
    var formatoMasPedido;
	var acumuladorDe;
	var maximoDe;
	var minimoDe;
	var flag;
	var bandera;


	nombre = "no ingresado";
	tipo = "no ingresado";
	tipoDePrestacion = "no ingresado";

	contador = 0;
	contadorDeClinica = 0;
	contadorDeTraumatologia = 0;
	contadorDePediatrica = 0;
	acumuladorObrasocial = 0;
    precioTotal = 0;
    precioBruto = 0;
	bandera = 0;
	flag = 0;



	do {
		nombreIngresado = prompt("ingrese el nombre");

		tipoDePrestacion = prompt("ingrese el tipoDePrestacion");

		while (tipoDePrestacion != "prepago" && tipoDePrestacion != "obra social" && tipoDePrestacion != "sin prestacion") {
			tipoDePrestacion = prompt("Error ingrese el tipoDePrestacion");
		}
        
        tipo = prompt("ingrese el tipo");

		while (tipo != "clinica" && tipo != "traumatologia" && tipo != "pediatrica") {
			tipo = prompt("Error ingrese el tipo");
		}

		edad = prompt("Ingrese  edad");

		while (edad < 0) {
			edad = prompt("Error Ingrese edad");
		}
		edad = parseInt(edad);


		switch (tipo) {
			case "clinica":
				contadorDeClinica++;
				break;

			case "traumatologia":
				contadorDeTraumatologia++;
				break;

			case "pediatrica":
				contadorDePediatrica++;
				break;

			default:
				break;
		}

        if (contadorDeClinica > contadorDeTraumatologia && contadorDeClinica > contadorDePediatrica) {
            formatoMasPedido = "clinica";
        
        } else {
            if (contadorDeTraumatologia > contadorDePediatrica && contadorDeTraumatologia > contadorDeClinica) {
                formatoMasPedido = "traumatologia";
        
            } else {
        
                formatoMasPedido = "pediatrica";
        
        
            }
        }

        switch (tipoDePrestacion) {
            case "obra social":
                precioBruto = 1800 * 0.20;
                acumuladorObrasocial +=  1800 * 0.20;
                
                break;
            
            case "prepago":
                precioBruto = 0;
                break;

            case "sin prestacion":
                precioBruto = 1800;
                break;
        
            default:
                break;
        }
        
        respuesta = prompt("Quiere añadir otro importe?");
		contador++;

        precioTotal += precioBruto;

	} while (respuesta == "si");


	document.write("La cantidad de pacientes de clinica es " + contadorDeClinica + "<br>"
		+ "La cantidad de pacientes de pedriatica es  " + contadorDePediatrica + "<br>"
		+ "La cantidad de pacientes de traumatologia es  " + contadorDeTraumatologia + "<br>"
		+ "Total de dinero que deberán reintegrar las obras sociales " + acumuladorObrasocial + "<br>"
		+ "Total de dinero recaudado en total es " + precioTotal + "<br>"
		+ "el tipo de atención más requerida es " + formatoMasPedido + "<br>");

}//Fin De Todo
/*
Augusto Delgado
Div B 
*/

    
