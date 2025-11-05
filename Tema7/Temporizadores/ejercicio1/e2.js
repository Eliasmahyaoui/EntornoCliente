/**Ej2: Simula una “barra de carga” en consola que vaya creciendo carácter a carácter cada
medio segundo: */

let bloques= 0;
const max= 10;

const intervalo= setInterval( () => {

    bloques++;

    console.log(" █ ".repeat(bloques));

    if (bloques>=max) {
        clearInterval(intervalo);
        console.log("Carga completada!")
    }
 },500);





























/*let bloques = 0;
const max = 10;

const intervalo = setInterval(() => {
  bloques++;
  console.log('█'.repeat(bloques)); // muestra 1, 2, 3... líneas
  if (bloques >= max) {
    clearInterval(intervalo);
    console.log('Carga completada');
  }
}, 500);*/