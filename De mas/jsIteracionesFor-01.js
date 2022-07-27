/*
Augusto Delgado
Div B 
*/
function mostrar() {
   var nombre;
   var sexoIngresado;
   var latidoPorMinuto;
   var maximoLatidos;
   var pesoIngresado;
   var banderaMujerConMasLatidos;
   var banderaDelMenosLatidos;
   var vacunacion;
   var contadorDeVacunados;
   var contadorDeNoVacunados;
   var promedioDelPeso;
   var acumuladorPeso;
   var hombreMinimolatido;
   var nombremaximoLatidos;


   contadorDeNoVacunados = 0;
   contadorDeVacunados = 0;
   banderaMujerConMasLatidos = 0;
   banderaDelMenosLatidos = 0;
   acumuladorPeso = 0;

   for (contador = 0; contador < 5; contador++) {

      nombreIngresado = prompt("ingrese el nombre");

      sexoIngresado = prompt("ingrese el sexo(f o m)");

      while (sexoIngresado != "f" && sexoIngresado != "m") {
         sexoIngresado = prompt("Error ingrese el sexo(f o m )");
      }

      pesoIngresado = prompt("Ingrese el peso ");
      pesoIngresado = parseInt(pesoIngresado);
      while (isNaN(pesoIngresado)) {
         pesoIngresado = prompt("Error Ingrese el peso ");
      }

      acumuladorPeso += pesoIngresado;

      latidoPorMinuto = prompt("Ingrese latido Por Minuto");
      while (isNaN(latidoPorMinuto)) {
         latidoPorMinuto = prompt("Error Ingrese latido Por Minuto");
      }

      vacunacion = prompt("Ingrese si esta vacunado o no contra el sarampión (solo si o no)");
      while (vacunacion != "si" && vacunacion != "no") {
         vacunacion = prompt("Error Ingrese si esta vacunado o no contra el sarampión (solo si o no)");
      }

      if (vacunacion == "si") {
         contadorDeVacunados++;
      } else {
         contadorDeNoVacunados++;
      }
      
      switch (sexoIngresado) {
         case "f":
            if (banderaMujerConMasLatidos == 0) {
               maximoLatidos = latidoPorMinuto;
               nombremaximoLatidos = nombre;
               banderaMujerConMasLatidos = 1;
            } else {
               if (latidoPorMinuto > maximoLatidos) {
                  maximoLatidos = latidoPorMinuto;
                  nombremaximoLatidos = nombre;
               }

            }


            break;

         case "m":
            if (banderaDelMenosLatidos == 0) {
               hombreMinimolatido = latidoPorMinuto;

               banderaDelMenosLatidos = 1;
            } else {
               if (latidoPorMinuto < hombreMinimolatido) {
                  hombreMinimolatido = latidoPorMinuto;

               }

            }
            break;



         default:
            break;
      }
   }







   promedioDelPeso = acumuladorPeso / 5;

   document.write("personas vacunadas  " + contadorDeVacunados + "<br>"
      + "personas no vacunadas " + contadorDeNoVacunados + "<br>"
      + "peso promedio en total " + promedioDelPeso + "<br>"
      + "el hombre con menos latidos por minuto es " + hombreMinimolatido + "<br>"
      + "la mujer con más latidos es " + maximoLatidos + "<br>");

}//Fin



/*
var contador;

   for (contador = 1; contador < 11 ; contador++) {
   	
   	
      document.write(contador + "<br>");
   }*/