



//Cogeemos el elemetno de clase
let precios= document.getElementsByClassName("precio");
//mostramnos por el log del navegador
console.log("Hay " + precios.length + " precios listados");

let p1= document.getElementById("p1");

//5.2
//¿Son iguales?
//NO
console.log(p1.innerHTML);//En este muestra todo lo que tiene en html
console.log(p1.textContent);//Ene ste solo el contenido de dentro


//5.3

let n2= document.getElementById("n2");
n2.textContent="Reposicion completada.¡Gracias por vuestra paciencia!";

//5.4
    //metemos en una variable la class precio
    let precio= document.getElementsByClassName("precio");
    //Recorremos todos los precios y le sumamos 0.10
    for (const p of precio) {
        let valor= Number(p.innerHTML);
        valor= valor + 0.10;
        p.innerHTML= valor;
    }

    //Mostramos por el log los precios
    console.log("Precios actualizados");


//5.5

    let lista= document.getElementById("lista");
    precio= document.getElementsByClassName("precio");
    let nuevoli= document.createElement("li");
    let nuevoprecio= document.createElement("span");
    nuevoli.textContent= "Tila";
    nuevoprecio.textContent= " 2.20€";
    lista.appendChild(nuevoli).appendChild(nuevoprecio);

//5.6
lista= document.getElementById("lista");
p1= document.getElementById("p1");
p1.innerHTML= 'Producto destacado <span class="precio">9.99</span> €';


//5.7

let parrafo= document.getElementById("n2");

//Borramos ese parrafo con removeChild
parrafo.parentNode.removeChild(parrafo);

