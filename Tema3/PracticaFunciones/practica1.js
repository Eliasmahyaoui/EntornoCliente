/*Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.*/


let palabras= [];
let resultado= '';

do {
    let palabra= prompt("Escribe aqui lo que quieras");
    if (palabra=='') {
        
    }else{
        palabras.push(palabra);
    }


} while (palabra==null|| palabra=='');

console.log(palabras);

