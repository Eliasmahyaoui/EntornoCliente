
let inputEmail= document.getElementById("correo");
let resultado = document.getElementById("resultado1");
let inputContraseña= document.getElementById("contraseña");
let resultado2 = document.getElementById("resultado2");
let botonEnviar= document.getElementById("enviar");
let resultadoEnviar= document.getElementById("resultadoFinal");



//Evento para email 

inputEmail.addEventListener("blur",()=> {
    
        if (!inputEmail.value.includes("@")) {
            resultado.textContent= "Debe tener un @";
        } if (inputEmail.value=="") {
            resultado.textContent="No puede estar vacio el email";
        }else{

        }

        
});

inputContraseña.addEventListener("blur",()=>{

    if (inputContraseña.value.length <7 || inputContraseña.value.length > 10) {
        resultado2.textContent= "La contraseña debe tener entre 7 y 10 caracteres";
    } if (inputContraseña.value==="") {
         resultado2.textContent= "La contraseña no puede estar vacia";
    } else {
        
    }

});





botonEnviar.addEventListener("click",()=>{

    if (!inputEmail.value.includes('@')||inputEmail===""||
    inputContraseña.value.length<7 || inputContraseña.value.length>10||
    inputContraseña==="") {
        resultadoEnviar.textContent= "Logiin no valido!"
    }else{
         resultadoEnviar.textContent= "Login correcto!"
    }

   
});












