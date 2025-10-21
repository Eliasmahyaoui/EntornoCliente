/*Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.
A continuación, se eliminarán todas las palabras repetidas y además se ordenarán en
español, pero en orden inverso (de la Z a la A) y se mostrará el resultado por pantalla.
Utilizar funciones flecha si se considera apropiado.*/

let palabras = [];
let palabra = "";

do {
  palabra = prompt("Escribe aqui lo que quieras");
  if (palabra != "") {
    palabras.push(palabra);
  }

  
} while (palabra !== "");

//Comporbamos que si que se muestra
console.log(palabras);



let elementosUnicos= new Set(palabras);
let palabra1= ""


