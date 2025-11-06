/** Crea una pagina que guarde y muestre eñ numero de visitas que has realizado en la pagina. 
 * Si se visita la pagina mas de 10 veces, el contador se pondra a cero y se borrara la informacion existente.
*/

let visitas= localStorage.getItem('visitas');

if (!visitas) {
    visitas=0;
}

visitas++;

if (visitas>10) {
    localStorage.removeItem('visitas'); //Se borra la informacion con remove
}else{
    localStorage.setItem('visitas', visitas) //Guardamos aqui el nuevo valor de visitas 

}

document.getElementById("salida3").textContent = "Número de visitas: " + visitas;