/*Se desea validar hasta qué punto la función Math.random es realmente aleatoria. Para tal
fin, calcularemos 10.000 veces números aleatorios del 1 al 10. Por consola mostraremos
cada número del 1 al 10 y a continuación el número de veces que ha salido ese número.
Por ejemplo:
Frecuencias
Número 1: 1016
Número 2: 1019
Número 3: 1059
....
Número 10: 993*/

const ITERACIONES = 10000;//Hacemos una constante de 10.000
let combinacion = new Array(11).fill(0); //creamos el array quitando el 0 .

for (let i = 0; i < ITERACIONES; i++) {

    let numero = Math.floor((Math.random() * 10) + 1); //en numero guardamos un numero entero del 1 a 10
    combinacion[numero] += 1; //Esto quiere decir cuantas vecs ha salido cada numero


    // Mostrar resultados
    console.log("Frecuencias");
    for (let j = 1; j <= 10; j++) {
        console.log(`Número ${j}: ${combinacion[j]}`);
    }
}
