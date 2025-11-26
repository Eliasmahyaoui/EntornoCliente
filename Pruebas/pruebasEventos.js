// Botón para crear el saludo
let botonSaludar = document.getElementById("saludo");
let parrafoSaludar = document.getElementById("resultado");


// Botón para crear la caja
let botonCaja = document.getElementById("caja"); // un botón para crear la caja
let contenedor = document.getElementById("resultado2");

//Boton para crear el aleatorio
let botonAleatorio= document.getElementById("aleatorio");
let parrafoNumero= document.getElementById("resultado3");

//Boton para restablecer
let botonRestablecer= document.getElementById("restablecer");

// Evento para saludar
botonSaludar.addEventListener("click", () => {
    parrafoSaludar.textContent = "Hola buenos días, guapetona!";
    parrafoSaludar.style.display = "block";
});

// Evento para crear la caja
botonCaja.addEventListener("click", () => {
    let nuevaCaja = document.createElement("div");  // etiqueta válida
    nuevaCaja.textContent = "Nueva caja";
    nuevaCaja.style.border = "1px solid black";
    nuevaCaja.style.padding = "10px";
    nuevaCaja.style.margin = "5px 0";
    nuevaCaja.style.backgroundColor= "red";
    contenedor.appendChild(nuevaCaja);
});

//Evento numero aleatorio

botonAleatorio.addEventListener("click",()=>{

let num= Math.floor(Math.random()*100)-1;

parrafoNumero.textContent= "Numero aleatorio: " + num;

});



//Boton restablecer
botonRestablecer.addEventListener("click",()=>{
    
        parrafoSaludar.textContent= "";
        parrafoNumero.textContent="";
        contenedor.textContent="";
    
});
