/*Crea un array vacío llamado letras. Inserta al principio del array las letras A, B y C.
Luego, inserta al final las letras D y E. Finalmente, elimina el primer elemento y el
último, e imprime el array final.*/ 


//Array vacio
let letras=[];
//Añadimos al principio 3 letras 
letras.unshift('A','B','C');
//Mostramos
console.log(letras);
//Añadimos al final dos letras d y e
letras.push('d','e');
console.log(letras);
//eliminamos el primer elemento
console.log(letras.shift());
//mostramos
console.log(letras);
//eliminamos 
console.log(letras.pop());
//mostramos
console.log(letras);

