// Función timeout basada en promesa
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let contador = document.getElementById("contador");
let notificacion = document.getElementById("notificacion");
let videoGeneral = document.getElementById("videoGeneral");
let video = document.getElementById("video");
let infoVideo = document.getElementById("info-video");

// OCULTAR notificación y vídeo al inicio
notificacion.style.display = "none";
videoGeneral.style.display = "none";

let segundos = 5;

// Cuenta atrás simple
let intervalo = setInterval(() => {
  contador.textContent = segundos;
  segundos--;

  if (segundos < 0) {
    clearInterval(intervalo);
    mostrarNotificacion();
  }
}, 1000);

// Mostrar notificación despues 5 segundos
async function mostrarNotificacion() {
  await timeout(0);
  notificacion.style.display = "block";
}

// Click en la notificación → mostrar video
notificacion.addEventListener("click", () => {
  notificacion.style.display = "none";
  videoGeneral.style.display = "block";
  video.play();
});

// Click izquierdo → pausa / reproduce
video.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
});

// Click derecho → duración del vídeo
video.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let duracion = Math.floor(video.duration);
  let minutos = Math.floor(duracion / 60);
  let segundos = duracion % 60;

  infoVideo.textContent = minutos + " min " + segundos + " s";
});
