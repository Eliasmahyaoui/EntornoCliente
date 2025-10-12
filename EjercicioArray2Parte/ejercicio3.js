/*Crea un array llamado colores con los elementos "rojo", "verde", "azul", "amarillo",
"naranja", "violeta". Crea un nuevo array con los colores entre las posiciones 1 y 4.
Eliminar 2 colores a partir de la posición 3 en el array original e inserta los colores
"negro" y "blanco" en esa posición.*/

let colores=['rojo','verde','azul','amarillo', 'naranja','violeta'];
console.log(colores);
let coloresNuevos= colores.slice(1,5);
console.log(coloresNuevos);

//Eliminar 2 colores a partir de la posición 3 en el array original e inserta los colores"negro" y "blanco" en esa posición.
colores.splice(3,2, 'negro','blanco');
console.log(colores);
