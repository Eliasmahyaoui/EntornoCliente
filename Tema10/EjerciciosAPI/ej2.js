

let video = document.querySelector('video');
let main = document.querySelector('main');


video.addEventListener('timeupdate', (ev) => {
main.textContent = 'Posición en segundos: ' + video.currentTime;
});