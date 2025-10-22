// Función práctica 2

function Practica2() {
    let palabras = []; // Declaramos un array vacío
    let palabra = "";  // Variable vacía para guardar las palabras

    // Pedimos palabras al usuario
    do {
        palabra = prompt("Escribe una palabra (deja vacío para salir)");
        if (palabra != "") { // Si la palabra no está vacía
            palabras.push(palabra); // La añadimos al array
        }
    } while (palabra != ""); // Salimos cuando está vacía

    console.log(palabras); // Mostramos las palabras guardadas en el array

    // Creamos un mapa para contar las repeticiones de cada palabra
    const mapa = new Map();

    for (let palabra of palabras) {
        if (mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra) + 1);
        } else {
            mapa.set(palabra, 1);
        }
    }

    console.log(mapa); // Mostramos el mapa con el recuento
}

Practica2();
