//maximo solo

if (flag == 0) {
    maximode = vehiculo;
    colorMasCaro = color;

    flag = 1;
} else {
    if (vehiculo > maximode) {
        maximode = vehiculo;
        colorMasCaro = color;
    }
}
console.log(" El maximo es " + maximode + " y el nombre es " + colorMasCaro);

// minimo 
if (flag == 0) {
    minimode = vehiculo;
    colorMasCaro = color;

    flag = 1;
} else {

    {
        if (vehiculo < minimode) {
            minimode = vehiculo;
            colorMasCaro = color;
        }
    }
}

console.log(" El minimo es " + minimode + " y el nombre es " + colorMasCaro);

if (flag === 0) {
    maximo = numeroIngresado;
    minimo = numeroIngresado;
    flag = 1;
} else {
    if (numeroIngresado > maximo) {
        maximo = numeroIngresado;
    } else {
        if (numeroIngresado < minimo) {
            minimo = numeroIngresado;
        }
    }
}

console.log(" El importe minimo " + minimode + " y el nombre es " + minimoPais);
console.log(" El importe maximo " + maximode + " y el nombre es " + maximoMarca);

//Par
if (numeroIngresado % 2 === 0) {
    contadorDePares++;
}



//Aumento

if (totalVentasPedro > 500000) {
    comisionPedro = totalVentasPedro * 0.10;
    comisionTotalPedro = comisionPedro + totalVentasPedro;

} else {
    comisionPedro = totalVentasPedro * 0.05;
    comisionTotalPedro = comisionPedro + totalVentasPedro;

}

//porcentaje 

porcentaje = (contadorDeHombres * 100) / 10;
porcentaje = (contadorDeMujeres * 100) / 10;
porcentaje = (contadorDeNb * 100) / 10;

// Divisor
if (numeroIngresado % contador == 0) {
    numerosDivisores++
    alert(contador)
}

//Numereros primos 
var numerosDivisores = 0;
var numeroIngresado;
var contador;

numeroIngresado = prompt("ingrese un numero");

while (isNaN(numeroIngresado)) {
    numeroIngresado = prompt("Error ingrese un numero");
}
for (let contador = 1; contador <= numeroIngresado; contador++) {

    if (numeroIngresado % contador == 0) {
        numerosDivisores++
    }
}

if (numerosDivisores != 0 || numeroIngresado <= 1) {
    alert(numeroIngresado + "no es primo");
} else {
    alert(numeroIngresado + "es primo");
}







//h)el porcentaje de  personas que desaprobaron sobre el total
if (notaIngresada < 5) {
    alumnosDesaprobados++;
}



do {
    respuesta = prompt("Quiere ingresar datos de otro estudiante");
    alumnosTotal++;
} while (respuesta == "si");

porcentaje = alumnosTotal * 100 / alumnosDesaprobados;
alumnosTotal * alumnosDesaprobados / 100;
console.log(porcentaje);





//a. Porcentaje de empleados por cada genero.
if (genero == "No Binario") {
    if (cantidadHijos > maximoHijosNoBinario || esPrimero) {
        maximoNombreNoBinario = nombre;
        maximoHijosNoBinario = cantidadHijos;
        esPrimero = false;
    }
    cantidadNoBinaria++;
} else if (genero == "Masculino") {
    cantidadMasculino++;
} else {
    cantidadFemenino++;
}

//console.log(nombre,apellido,genero,cantidadHijos)



porcentajeMasculino = (cantidadMasculino * 100) / 10;
porcentajeFemenino = (cantidadFemenino * 100) / 10;
porcentajeNoBinario = (cantidadNoBinaria * 100) / 10;


//a)Cuántas mujeres hay .
console.log("cantidad de mujeres " + contadorDeMujeres);

console.log("cantidad de estudiantes con fiebre " + estudiantesConFibre);
console.log("cantidad de estudiantes sin fiebre " + estudiantesSinFibre);

console.log("promedio de edad Hombre " + promedioDeEdadHobres);
console.log("promedio de edad Mujeres " + promedioDeEdadMujeres);
console.log("promedio de edad no binario " + promedioDeEdadNoBinario);




//Aumento

if (totalVentasPedro > 500000) {
    comisionPedro = totalVentasPedro * 0.10;
    comisionTotalPedro = comisionPedro + totalVentasPedro;

} else {
    comisionPedro = totalVentasPedro * 0.05;
    comisionTotalPedro = comisionPedro + totalVentasPedro;

}

contadorDeNb = 0;
contadorDeHombres = 0;
contadorDeMujeres = 0;
acumuladorDeHombres = 0;
acumuladorDeMujures = 0;
acumuladorDeNobinario = 0;



switch (sexoIngresado) {
    case "f":
        contadorDeMujeres++;
        acumuladorDeMujures += edadIngresada;
        break;
    case "m":
        contadorDeHombres++;
        acumuladorDeHombres += edadIngresada;

        break;
    case "nb":
        contadorDeNb++;
        acumuladorDeNobinario += edadIngresada;
        edadMinima = edadIngresada;
        break;

    default:
        break;
}
promedioDeEdadHobres = acumuladorDeHombres / contadorDeHombres;
promedioDeEdadHobres = parseInt(promedioDeEdadHobres);
promedioDeEdadMujeres = acumuladorDeMujures / contadorDeMujeres;
promedioDeEdadMujeres = parseInt(promedioDeEdadMujeres);
promedioDeEdadNoBinario = acumuladorDeNobinario / contadorDeNb;
promedioDeEdadNoBinario = parseInt(promedioDeEdadNoBinario);

console.log("promedio de edad Hombre " + promedioDeEdadHobres);
console.log("promedio de edad Mujeres " + promedioDeEdadMujeres);
console.log("promedio de edad no binario " + promedioDeEdadNoBinario);

if (comisionMariaTotal > comisionJuanTotal && comisionMariaTotal > comisionPedroTotal) {

    vendedorMaximoComicion = "maria";
} else {
    if (comisionJuanTotal > comisionMariaTotal && comisionJuanTotal > comisionPedroTotal) {
        vendedorMaximoComicion = "juan";
    } else {
        if (comisionPedroTotal > comisionMariaTotal && comisionPedroTotal > comisionJuanTotal) {
            vendedorMaximoComicion = "pedro";
        }
    }
}

















