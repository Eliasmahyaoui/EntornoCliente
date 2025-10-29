
var email = document.getElementById("email");
var password = document.getElementById("password");
var boton = document.getElementById("botonEnviar");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPass");

// comprobamos que tenga la @
email.onblur = function() {
    if (email.value.indexOf("@") == -1) {
        errorEmail.innerHTML = " (Debe tener  @)";
    }
};


email.onfocus = function() {
    errorEmail.innerHTML = "";
};

// compronbamos que la contraseña cumpla esas condicones 
password.onblur = function() {
    if (password.length < 8 || password.length> 10) {
        errorPass.innerHTML = " (Error: no tienes  entre 8 y 10 caracteres)";
    }
};


password.onfocus = function() {
    errorPass.innerHTML = "";
};

// Al pulsar el botón enviar hace un a cosa o  otra dependiendo de si las condiciones están bien. 
boton.onclick = function() {
    if (email.value.indexOf("@") == -1 || password.value.length < 8 || password.value.length < 10) {
        alert("Error, intentalo otra vez .");
    } else {
        alert("Formulario enviado correctamente.");
    }
};