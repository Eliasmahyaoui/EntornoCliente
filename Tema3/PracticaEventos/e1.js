/**Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento
con un número aleatorio a una lista desordenada (elemento UL). */
function pulsarBoton() {
    let numero = numeroAleatorio();
    document.getElementById("numeros").innerHTML = "Número: " + numero;
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 9) + 1; // número entre 1 y 9
}

document.getElementById("ej1").onclick = pulsarBoton;
