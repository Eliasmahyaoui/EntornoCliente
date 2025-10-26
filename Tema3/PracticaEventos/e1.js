/**        EJERCICIO 1
 * Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento
con un número aleatorio a una lista desordenada (elemento UL). */

function numeroAleatorio() {
    // Generar número aleatorio entre 1 y 9
    let numero = Math.floor(Math.random() * 9) + 1;

    document.getElementById("lista").innerHTML = numero;
}

// Asignar evento al botón
document.getElementById("ej1").onclick = numeroAleatorio;



/*        EJERCICIO 2
Haz un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma
dinámica un elemento XHTML (Ejemplo, un <p>) que nos muestre la posición actual del
ratón.*/

function coordenadasXY(evento) {
    let x = evento.clientX;
    let y = evento.clientY;
    document.getElementById("posicion").innerHTML= "Coordenada X:" +  x + " " + "Coordenada Y: " + y;
}
document.body.addEventListener("mousemove", coordenadasXY);


/*         EJERCICIO 3
Haz un programa que tenga 3 elementos <p> y al hacer clic sobre ellos desaparezcan
(se oculten) y al hacer clic derecho los elimine. También deberá tener un botón
“Reaparecer” que hará que aparezcan todos los elementos desaparecidos (pero no los
eliminados).
*/


function elementosP(evento){
    

    document.getElementById("ocultar").hidden= true;
    document.getElementById("ocultar").remove= true;
    document.getElementById("ocultar").innerHTML= "Elemento 1" + 

}
document.getElementById("ocultar").addEventListener("click", "contextmenu", elementosP);
