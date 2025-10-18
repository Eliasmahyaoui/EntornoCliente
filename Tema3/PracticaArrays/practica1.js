/*Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las
combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que no se pueden
repetir los números en una misma combinación.*/

for (let i = 0; i < 50; i++) { //Cremaos un bucle for para recorrer 50 veces

    let combinacion = []; //Dentro del bucle creamos un array vacio
    while (combinacion.length < 6) { //bucle while mientras combinacion <6 sigue
        let numero = Math.floor(Math.random() * 49) + 1; //el numero random lo pasamos a entero
        if (!combinacion.includes(numero)) { //condicion si la combinacion no incluye el numero
            combinacion.push(numero); //lo metemos con push 
        }
    }
    console.log(`Combinación ${i + 1}: ${combinacion.join(", ")}`);
}