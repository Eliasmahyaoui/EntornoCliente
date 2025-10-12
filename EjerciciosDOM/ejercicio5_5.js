
//Primero identificamos donde vamos a hacer el elemento.
const lista= document.getElementById("lista");
//Creo el elemento que estará dentro de li 
const nuevoElemento = document.createElement("li");

//Pongo lo que quiero en ese elemento 
nuevoElemento.innerHTML = "Tila <b>2.20</b> €"
//mostramos lal ista con el nuevo elemento.
lista.appendChild(nuevoElemento);




