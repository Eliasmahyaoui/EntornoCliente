/*Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.*/


let palabras= [];
//let palabra = '';

do {
    palabra = prompt("Escribe aqui lo que quieras");
   if (palabra!='') {
    palabras.push(palabra);
   }

} while (palabra!=='');

console.log(palabras);

