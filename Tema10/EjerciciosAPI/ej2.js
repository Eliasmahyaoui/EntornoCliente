/*Ej2: Añade un video a la página y agrega un menú desplegable para seleccionar diferentes
velocidades de reproducción (por ejemplo, 0.5x, 1x, 1.5x, 2x).*/ 

let video = document.querySelector('video');
let main = document.querySelector('main');


video.addEventListener('timeupdate', (ev) => {
main.textContent = 'Posición en segundos: ' + video.currentTime;
});