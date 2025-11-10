let productoInput = document.getElementById("producto");
let direccionInput = document.getElementById("direccion");
let botonGuardar = document.getElementById("compra");
let resultado = document.querySelector("p"); // tu <p> para mostrar resultados

/* Función procesarPago(producto) que devuelve una promesa */
function procesarPago(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (producto) {
                resolve("Pago procesado correctamente para " + producto);
            } else {
                reject("No se puede procesar el pago sin producto");
            }
        }, 1500); // espera 1,5 segundos
    });
}

/* Función enviarPedido(direccion) que devuelve una promesa */
function enviarPedido(direccion) {
    return new Promise((resolve, reject) => {
        if (!direccion) {
            reject("Dirección de envío no válida");
            return;
        }

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error durante el envío, intente de nuevo.");
            } else {
                resolve("Pedido enviado correctamente a " + direccion);
            }
        }, 2000); 
    });
}

/**Evento al pulsar el boton de comprar  */
botonGuardar.addEventListener("click", function () {
    let producto = productoInput.value;
    let direccion = direccionInput.value;

    procesarPago(producto)
        .then(() => {
            // si el pago fue correcto, enviamos el pedido
            return enviarPedido(direccion);
        })
        .then((mensajeEnvio) => {
            // todo correcto: mostramos resultado en el <p>
            resultado.innerText = mensajeEnvio; 
        })
        .catch((error) => {
            // cualquier error de pago o envío se muestra aquí
            resultado.innerText = error;
        });
});
