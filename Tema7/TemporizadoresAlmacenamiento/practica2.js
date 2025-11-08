alert("Bienvenido a la bolsa, mirelo en la consola...");
var bolsa = 100; //Le damos el valor a bolsa 100 al principio

var intervalo = setInterval(() => {

    // Generamos un cambio aleatorio entre -5 y +5
    let cambio = Math.floor(Math.random() * 11) - 5; // -5 a +5
    bolsa += cambio;


    if (bolsa == 120) {
        alert("¡Máximo alcanzado!");
        clearInterval(intervalo);
    }

    if (bolsa == 80) {
        alert("¡Minimo alcanzado!")
        clearInterval(intervalo);
    }

    console.log("Precio Bolsa: " + bolsa);
}, 1000);

document.getElementById("resultado2");