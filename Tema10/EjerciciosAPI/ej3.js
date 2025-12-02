/*Ej3: Implementa una notificación en el navegador al hacer clic en un botón. Muestra la
notificación con título, cuerpo y un ícono.*/

boton.addEventListener("click", () => {
    
  new Notification("Bienvenida", {
    body: "Bienvenido/a a esta web",
    icon: "weblogo.png",
  });

});
