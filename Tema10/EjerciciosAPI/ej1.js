
/*Ej1: Cambia el color del fondo del sitio web según la latitud del usuario: Norte: Azul. Sur:
Verde. Ecuador: Amarillo.*/

var body = document.querySelector('body');
navigator.geolocation.getCurrentPosition((pos) => {
console.log(pos.coords.latitude);
if (pos.coords.latitude==0) {

    body.style.backgroundColor= "yellow";
} else if (pos.coords.latitude<0) {
    body.style.backgroundColor= "green";

}else if(pos.coords.latitude>0){
    body.style.backgroundColor= "blue";
}


body.textContent = "Latitud:"  + pos.coords.latitude, + "Longitud:" + pos.coords.longitude;
});


