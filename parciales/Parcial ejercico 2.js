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

function mostrar() {

  var nombre;
  var tipo; //(validar monstruo, arma, mágica)
  var cantidadDeCartas;
  var rareza; //(validar común, rara, legendaria), 
  var precio; //(validar entre $250 y $5000)
  var acumuladorDeMounstro;
  var acumuladorDeArma;
  var porcentajeComunes;
  var acumuladorDeMagica;
  var precioBruto;
  var porcentajeLegendarias;
  var acumuladorDeCartas;
  var porcentajeRaras;
  var precioMinimo;
  var respuesta;
  var tipoDecartaprecioMinimo;
  var acumuladorComun;
  var acumuladorRara;
  var acumuladorLegendaria;
  var flag;

  nombre = "no ingresado";
  tipo = "no ingresado";
  rareza = "no ingresado";
  precioBruto = 0;

  acumuladorDeArma = 0;
  acumuladorDeMagica = 0;
  acumuladorDeMounstro = 0;
  acumuladorDeCartas = 0;
  acumuladorComun = 0;
  acumuladorLegendaria = 0;
  acumuladorRara = 0;
  flag = 0;


  do {

    nombre = prompt("ingrese el nombre");
    tipo = prompt("Ingrese el tipo (validar monstruo, arma, mágica)")

    while (tipo != "monstruo" && tipo != "arma" && tipo != "magica") {
      tipo = prompt("Error Ingrese el tipo(arena,cal,cemento)");
    }

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);

    while (precio < 250 || precio > 5000) {
      precio = prompt("ingrese el importe");
    }

    cantidadDeCartas = prompt("Ingrese la cantidad de bolsas");
    while (isNaN(cantidadDeCartas)) {
      cantidadDeCartas = prompt("Error Ingrese la cantidad de bolsas");
    }
    
    rareza = prompt("Especificar su rareza (común, rara, legendaria)")

    while (rareza != "rara" && rareza != "legendaria" && rareza != "comun") {
      rareza = prompt("Error Especificar su rareza (común, rara, legendaria)")
    }

    switch (tipo) {
      case "mounstro":
        acumuladorDeMounstro+= cantidadDeCartas;

        break;
      case "magica":
        acumuladorDeMagica += cantidadDeCartas;

        break;
      case "arma":
        acumuladorDeArma+= cantidadDeCartas;
        break;

      default:
        break;
    }
    //*Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)
    switch (rareza) {
      case "comun":
        acumuladorComun += cantidadDeCartas;

        break;
      case "rara":
        acumuladorRara += cantidadDeCartas;

        if (flag == 0) {
          precioMinimo = precio;
          tipoDecartaprecioMinimo = tipo;

          flag = 1;
        } else {

          {
            if (precio < precioMinimo) {
              precioMinimo = precio;
              tipoDecartaprecioMinimo = tipo;
            }
          }
        }

        break;
      case "legendaria":
        acumuladorLegendaria += cantidadDeCartas;
        break;

      default:
        break;
    }

    respuesta = prompt("Quiere añadir otro importe?");

    
    precioBruto = precio * cantidadDeCartas;
    acumuladorDeCartas += cantidadDeCartas;

  } while (respuesta == "si");


  porcentajeComunes = ((acumuladorComun * 100) / acumuladorDeCartas);
  porcentajeRaras = ((acumuladorRara * 100) / acumuladorDeCartas);
  porcentajeLegendarias = ((acumuladorLegendaria * 100) / acumuladorDeCartas);

  document.write("La cantidad de cartas Mounstro " + acumuladorDeMounstro + "<br>"
    + "La cantidad de cartas Arma " + acumuladorDeArma + "<br>"
    + "La cantidad de cartas Magica " + acumuladorDeMagica + "<br>"
    + "El valor de la colección entera es " + precioBruto + "<br>"
    + "porcentaje de las cartas Comunes" + porcentajeComunes + "<br>"
    + "porcentaje de las cartas Raras " + porcentajeRaras + "<br>"
    + "porcentaje de las cartas Legendarias " + porcentajeLegendarias + "<br>");



}