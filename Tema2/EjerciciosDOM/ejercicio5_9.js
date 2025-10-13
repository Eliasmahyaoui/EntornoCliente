/*Escribe en #log el número total de elementos en #lista sin que se
elimine el texto anterior de #log.
*/

var lista = document.getElementById("lista");
var log = document.getElementById("log");

log.innerHTML += "<br>Número total de elementos en #lista: " + lista.children.length;



