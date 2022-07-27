/*
Ejercicio 2
De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso) 
a)informar el peso total de la compra. 
b)el nombre del corte más caro de los sin hueso. 
c)el nombre del corte más liviano de los con hueso. 
*/
function mostrar() {

    var nombreIngresado;
    var tipo;
    var precio;
    var respuesta;
    var nombreMaximo;
    var nombreMinimo;
    var precioMaximo;
    var precioMinimo;
    var acumuladorDePeso;
    var flag;
    var banderaDelMaximo;
    
    acumuladorDePeso = 0;
    flag = 0;
    banderaDelMaximo = 0;
 
 
 
    do {
       nombreIngresado = prompt("ingrese el nombre");
 
 
       tipo = prompt("ingrese el tipo");
       while (tipo != "hueso" && tipo != "sin hueso") {
          tipo = prompt("ingrese el tipo");
       }
 
       precio = prompt("Ingrese precio");
       while (isNaN(precio)) {
          precio = prompt("Ingrese precio");
       }
       precio = parseInt(precio);
 
       peso = prompt("Ingrese peso");
       while (isNaN(peso)) {
          peso = prompt("Ingrese peso");
       }
       peso = parseInt(peso);
 
       acumuladorDePeso += peso;
 
       if (flag == 0 && tipo == "hueso") {
          nombreMinimo = nombreIngresado;
          precioMinimo = precio;
 
          flag = 1;
       } else {
 
          {
             if (precio < precioMinimo) {
                nombreMinimo = nombreIngresado;
                precioMinimo = precio;
             }
          }
       }
 
       if (banderaDelMaximo == 0 && tipo == "sin hueso") {
          nombreMaximo = nombreIngresado;
 
          precioMaximo = precio;
 
          banderaDelMaximo = 1;
       } else {
          if (precio > precioMaximo) {
             nombreMaximo = nombreIngresado;
 
             precioMaximo = precio;
          }
       }
 
 
       respuesta = prompt("Quiere añadir otro importe?");
 
 
    } while (respuesta == "si");
 
 
 
    document.write("el peso total de la compra es " + acumuladorDePeso + "<br>"
       + "el nombre del corte más caro de los sin hueso es " + nombreMaximo + "y su precio es " + precioMaximo + "<br>"
       + "el nombre del corte más liviano de los con hueso es " + nombreMinimo + "y su precio es " + precioMinimo + "<br>");
 
 }//Fin De Todo

