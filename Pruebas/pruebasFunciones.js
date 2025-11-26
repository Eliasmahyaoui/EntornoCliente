let listaPalabras = () => {
    let palabra;
    const palabras = [];
    
    do {
        palabra = prompt("Introduce palabras hasta que este vacio o canceles.");

        // Condición para salir del bucle:
        // Si palabra es null (Cancelar) O palabra es "" (Aceptar vacío), salimos del bucle.
        if (palabra === null || palabra === "") {
            break; // Salimos del bucle do-while inmediatamente
        }
        
        // Si no hemos salido, la palabra es válida y la añadimos.
        palabras.push(palabra);
        
    } while (true); // El bucle se mantiene abierto y usamos 'break' para controlarlo.

    return palabras;

};

// Para ejecutar la función y ver el resultado en la consola:
const resultado = listaPalabras();
console.log("Palabras introducidas:", resultado);