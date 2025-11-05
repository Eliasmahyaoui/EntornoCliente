/**Simula una barra de carga  en consola que vaya creciendo carácter a cáracter cada medio segundo. */

//Cuando llegue a 10 bloques, se debe detener automaticamente y mostrar: "carga completada".

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


