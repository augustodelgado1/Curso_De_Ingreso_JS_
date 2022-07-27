/*
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera, 


1ERA PARTE
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.
	
2da PARTE
	informar :
	d)el primer alumno aprobado
	e)el nombre y edad la máxima temperatura 
	f)la altura y nota  del no binario mas joven

3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
*/

function mostrar()
{
	var alturaIngresada; //(validar entre 0 y 250) 
	var temperaturaIngresada;//(validar)
	var notaIngresada;//(validar el sexo “f” o “m” o "nb")
	var sexoIngresado; //(validar)
	var nombreIngresado;
	var edadIngresada;
	var primerAprobado;
	var notaIngresada;
	var flag = 0;
	var contadorDeMujeres;
	var alumnoConFiebre;
	var promedioDeEdadHombres;
	var contadorDeHombres;
	var contadorNb;
	var promedioDeEdadMujeres;
	var alumnosSinFiebre;
	var acumuladorDeEdadHombre;
	var acumuladorDeEdadNoBinario;
	var promedioDeEdadNoBinario;
	var contador;
	var acumuladorDeEdadMujeres;
	var nombreTemperaturaMaxima;
	var edadTemperaturaMaxima;
	var respuesta;
	var bandera;
	var banderaDelMasJoven;
	var edadMinima = edadIngresada;
	var alturaDelMasJoven;
	var notaDelMasJoven;
	var flag;

	contadorDeHombres=0;
	contadorDeMujeres=0;
	contadorNb=0;
	contador=0;
	acumuladorDeEdadHombre=0;
	acumuladorDeEdadMujeres=0;
	banderaDelMasJoven=0;
	acumuladorDeEdadNoBinario=0;
	flag=0;
	alumnosSinFiebre=0;
	alumnoConFiebre=0;
	bandera=0;

	do {
		nombreIngresado = prompt("Ingrese el nombre");

		alturaIngresada = prompt("ingrese la altura (entre 0 y 250) ");
		while (alturaIngresada < 0 || alturaIngresada > 250) {
			alturaIngresada = prompt("Error ingrese la altura");
		}
     
      edadIngresada = prompt("Ingrese la edad");
	  edadIngresada= parseInt(edadIngresada);
	  while (isNaN(edadIngresada)) 
		{
			edadIngresada = prompt("Error Ingrese la edad");
		}

		sexoIngresado = prompt("ingrese el sexo(f o m o nb)");

		while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb" ) 
        {
            sexoIngresado= prompt("ingrese el sexo(f o m o nb)");
        }

      temperaturaIngresada = prompt("Ingrese su temperatura corporal");
	  temperaturaIngresada= parseInt(temperaturaIngresada);
	  while (temperaturaIngresada< 0 || temperaturaIngresada > 45) {
		temperaturaIngresada= prompt("Ingrese su temperatura corporal");
	}

	  notaIngresada = prompt("Ingrese la nota (entre 0 o 10)");
	while (notaIngresada < 0 || notaIngresada > 10) {
		notaIngresada = prompt("Error Ingrese la nota (entre 0 o 10)");
	}
	  switch (sexoIngresado) {
		  case "f":
			  contadorDeMujeres++;
			  acumuladorDeEdadMujeres += edadIngresada;
			  break;

			case "m":
				contadorDeHombres++;
				acumuladorDeEdadHombre += edadIngresada;
				break;

			case "nb":
				contadorNb++;
				acumuladorDeEdadNoBinario += edadIngresada;

				if (banderaDelMasJoven == 0) 
            {
                edadMinima = edadIngresada;
                alturaDelMasJoven = alturaIngresada;
				notaDelMasJoven = notaIngresada;
       
                banderaDelMasJoven = 1;
            } else {
           
            {
               if (edadIngresada < edadMinima) 
               {
				edadMinima = edadIngresada;
                alturaDelMasJoven = alturaIngresada;
				notaDelMasJoven = notaIngresada;
               } 
            }
    }
				

			break;
	  
		  default:
			  break;
	  }

	  if (temperaturaIngresada >= 37) 
	  {
		  alumnoConFiebre++;
	  } else {
		  alumnosSinFiebre++;
	  }



	  if (nota > 6 && bandera == 0) 
	  {
		  primerAprobado = nombreIngresado;
		  bandera=1;
	  }

	  if (flag == 0) 
        {
        temperaturaMaxima = temperaturaIngresada;
        nombreTemperaturaMaxima = nombreIngresado;
        edadTemperaturaMaxima = edadIngresada;
        flag = 1;
        } else {
        if (temperaturaIngresada > temperaturaMaxima) 
        {
		temperaturaMaxima = temperaturaIngresada;
		nombreTemperaturaMaxima = nombreIngresado;
        edadTemperaturaMaxima = edadIngresada;
        }
        }







		respuesta= prompt("Quiere añadir otro importe?");
		contador++;
		
	} while (respuesta == "si");

	promedioDeEdadHombres= acumuladorDeEdadHombre / contadorDeHombres;
	promedioDeEdadHombres= parseInt(promedioDeEdadHombres);
	promedioDeEdadNoBinario= acumuladorDeEdadNoBinario /  contadorNb;
	promedioDeEdadNoBinario= parseInt(promedioDeEdadNoBinario);
	promedioDeEdadMujeres= acumuladorDeEdadMujeres / contadorDeMujeres;
	promedioDeEdadMujeres= parseInt(promedioDeEdadMujeres);

}//FIN DE LA FUNCIÓN
	
/*
3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.*/

