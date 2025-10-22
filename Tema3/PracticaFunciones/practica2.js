//Funcion ejercicio 2

function ejercicio2() {
	let palabras = []; //Declaramos un array vacio 
	let palabra = ""; //Y una palabra vacia


	do {
		palabra = prompt("Escribe aqui lo que quieras");
		if (palabra != "") { //Sí la palabra no esta vacia...
			palabras.push(palabra); //Aqui metemos la palabra en el array

		}
	} while (palabra !== "");

	console.log(palabras);
	
	let mapa = new Map(palabra); // Declaramos e inicializamos un map 

	console.log(mapa.get());
	//mapa.set(27,"Elias").set(2,"Sofia").set(3,"Adrian").set(49,"Clyde").set(23,"Yung Beef");


}
ejercicio2();