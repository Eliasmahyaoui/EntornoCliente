// Guarda una cookie
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
}

// Busca una cookie y devuelve su valor
function getCookie(nombre) {
    let etiqueta = nombre + "=";
    let cookies = document.cookie.split(";");
    
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(etiqueta) === 0) {
            return c.substring(etiqueta.length, c.length);
        }
    }
    return "";
}

// Se ejecuta al cargar la página
window.onload = function() {
    let usuario = getCookie("usuario");

    if (usuario !== "") {
        // Si existe la cookie, saludamos
        document.getElementById("mensaje").textContent = "Bienvenido de nuevo, " + usuario ;
        
    }
}

// Guarda el nombre cuando el usuario pulsa el botón
function guardarNombre() {
    let nombre = document.getElementById("nombreInput").value;

    if (nombre !== "") {
        setCookie("usuario", nombre, 1); // Guardamos por 1 dia
        location.reload(); // Recargamos para actualizar la vista
    }
}
