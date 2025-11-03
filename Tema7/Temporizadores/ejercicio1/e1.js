/*Ej1: Crea una página que diga "Nos vamos" y que después de 5 segundos, nos redirija a la
página de google: https://www.google.es*/

alert("Nos vemos ");
setTimeout(() => {
window.location.href=  "https://www.google.es"
 ,5000
});
   
document.getElementById("Salida");



