/*
Ejercicio 3
Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas 
de sus productos (No se sabe cuántos).
Se ingresa de cada venta:

Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:  

El más barato de los libros de drama con su importe. 
El importe promedio.
La cantidad de libros que sean de ciencia ficción y cuesten menos de $700. contador++
Qué porcentaje de cada género se vendió. 
Informar el título del primer libro de drama que se vendió. 
*/
function mostrar() {

    var tituloDelLibro;
    var generoDelLibro;
    var materialDelLibro;
    var primerTituloVendido;
    var importe;
    var respuesta;
    var contadorDeCienciaFiccion;
    var drama;
    var terror;
    var promedio;
    var precioBruto;
    var porcentajeCienciaFiccion;
    var porcentajeDrama;
    var porcentajeTerror
    var contador;
    var minimoDeDrama;
    var flag;
    var bandera;
    var cienciaFiccion;


    nombre = "no ingresado";
    generoDelLibro = "no ingresado";
    materialDelLibro = "no ingresado";

    cienciaFiccion = 0;
    contador =0;
    contadorDeCienciaFiccion = 0;
    drama = 0;
    terror = 0;
    precioBruto=0;
    bandera = 0;
    flag = 0;



    do {
        tituloDelLibro = prompt("ingrese el nombre");

        generoDelLibro = prompt("ingrese el genero Del Libro");

        while (generoDelLibro != "drama" && generoDelLibro != "ciencia ficcion" && generoDelLibro != "terror") {
            generoDelLibro = prompt("Error ingrese el genero Del Libro");
        }

        materialDelLibro = prompt("ingrese el material Del Libro");

        while (materialDelLibro != "tapa dura" && materialDelLibro != "rustico") {
            materialDelLibro = prompt("Error ingrese el material Del Libro");
        }


        importe = prompt("Ingrese  importe");

        while (importe < 0 || importe > 30000) {
            importe = prompt("Error Ingrese importe");
        }
        importe = parseInt(importe);

        precioBruto += importe;

        switch (generoDelLibro) {
            case "ciencia ficcion":
                cienciaFiccion++;


                if (importe < 700) {
                    contadorDeCienciaFiccion++;
                }

                break;

            case "drama":
                drama++;

                if (flag == 0) {
                    minimoDeDrama = importe;
        
        
                    flag = 1;
                } else {
        
                    {
                        if (importe < minimoDeDrama) {
                            minimoDeDrama = importe;
        
                        }
                    }
                }


                if (bandera == 0) {
                    primerTituloVendido = tituloDelLibro;
           
                       bandera =1;
           
                   } 
                break;

            case "terror":
                terror++;
                break;

            default:
                break;
        }

        respuesta = prompt("Quiere añadir otro importe?");
        contador++;

        

    } while (respuesta == "si");

    promedio =  precioBruto / contador;

    porcentajeCienciaFiccion = ((cienciaFiccion * 100) / contador);
    porcentajeTerror = ((terror * 100) / contador);
    porcentajeDrama = ((drama * 100) / contador);

    document.write("El más barato de los libros de drama con su importe es " + minimoDeDrama + "<br>"
        + "El importe promedio es " + promedio + "<br>"
        + "La cantidad de libros de ciencia ficción que cuestan menos de $700 es  " + contadorDeCienciaFiccion + "<br>"
        + "el título del primer libro de drama que se vendió fue " + primerTituloVendido + "<br>"
        + "porcentaje de los libros de ciecia Ficcion es " + porcentajeCienciaFiccion + "<br>"
        + "porcentaje de los libro de terror es " + porcentajeTerror + "<br>"
        + "porcentaje de los libros De drama es " + porcentajeDrama + "<br>");

}//Fin De Todo
/*
Augusto Delgado
Div B 
*/