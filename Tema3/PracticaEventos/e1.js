/**        EJERCICIO 1
 * Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento
con un número aleatorio a una lista desordenada (elemento UL). */

function pulsarBoton() {
    let numero = numeroAleatorio();
    document.getElementById("numeros").innerHTML = "Número: " + numero;
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 9) + 1; // número entre 1 y 9
}

document.getElementById("ej1").onclick = pulsarBoton;

/*---------------------------------------------------------------------------------------*/ 

/*        EJERCICIO 2
Haz un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma
dinámica un elemento XHTML (Ejemplo, un <p>) que nos muestre la posición actual del
ratón.*/ 


document.body.addEventListener("mousemove", (evento) =>{

    document.getElementById('p1'),innerHTML= 'POSICION X' + eventposicionX , 'POSICION Y' + eventposicionY;

});







