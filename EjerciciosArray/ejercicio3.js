/*3. Crea dos arrays: uno llamado nombres que contenga 5 nombres de personas, y otro
llamado edades que contenga las edades correspondientes a esos nombres (asegúrate
de que la posición del nombre coincida con la posición de la edad). Recorre ambos arrays
y genera un nuevo array llamado mayoresDeEdad que contenga los nombres de las
personas que sean mayores o iguales a 18 años. Imprime el array mayoresDeEdad al final.*/

let nombres = ["Elias", "Pepe", "Marcos", "Estefania", "Dembele"];
let edades = [27, 2, 41, 13, 28];


//Creamos un array llamado mayorDeEdad.
let mayorDeEdad = [];


for (let i = 0; i < nombres.length; i++) {
    if (edades[i] >= 18) {
        mayorDeEdad.push(nombres[i])
    }
}

console.log("Mayores de edad: " + mayorDeEdad);






