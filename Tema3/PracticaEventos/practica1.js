


//Aqui primero metemos en las variables los getelementbyId que tenemos, para luego poder usarlo mas comodamente 
var botonEjecutar = document.getElementById("botonEjecutar");
var botonRestablecer = document.getElementById("botonRestablecer");
var resultado = document.getElementById("resultado");

botonEjecutar.onclick = function() {
    
    if (document.getElementById("saludar").checked) { //con esto lo que hacemos es comprobar si esta marcada eso es el checked
        resultado.innerHTML = "Hola, buenos dias.";
    }
    else if (document.getElementById("caja").checked) {
        
        resultado.innerHTML = '<div style="width:100px; height:50px; background-color:red; border:thin solid silver;" onmouseover="this.style.borderColor=\'black\'" onmouseout="this.style.borderColor=\'silver\'">Nueva caja</div>';
    }
    else if (document.getElementById("numero").checked) { //Lo mismo que con saludar
        var num = Math.floor(Math.random() * 100) + 1;
        resultado.innerHTML = "Número aleatorio: " + num;
    }
    else {
        resultado.innerHTML = "Selecciona una opción.";
    }
};

//Esta funcion lo hago sencillo  para que por defecto se pongan en false al darle al boton restablecer 
botonRestablecer.onclick = function() {
    resultado.innerHTML = "";
    document.getElementById("saludar").checked = false;
    document.getElementById("caja").checked = false;
    document.getElementById("numero").checked = false;
}