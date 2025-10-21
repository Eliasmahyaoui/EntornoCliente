//Funcion ejercicio 2

function ejercicio2() {
	let palabras = [];//Declaramos un array vacio 
	let palabra = ""; //Y una palabra vacia


	do {
		palabra = prompt("Escribe aqui lo que quieras");
		if (palabra != "") { //Sí la palabra no esta vacia...
			palabras.push(palabra);//Aqui metemos la palabra en el array
		
		}


	} while (palabra !== "");
}