//Funcion práctica 1

function Practica1() {
	let palabras = [];//Declaramos un array vacio 
	let palabra = ""; //Y una palabra vacia


	do {
		palabra = prompt("Escribe aqui lo que quieras");
		if (palabra != "") { //Sí la palabra no esta vacia...
			palabras.push(palabra);//Aqui metemos la palabra en el array
		
		}


	} while (palabra !== "");

	console.log(palabras)//Comprueba que se muestran todas las palabras en el array 

	let elementosUnicos = new Set(palabras);//Aqui declaramos elementosUnicos que no se vean repetidos con SET

	console.log(elementosUnicos);

	let nuevoArray = [...elementosUnicos]; //Necesitamos pasar el set a un array otra vez para poder utilzar el metodo sort y ordenar

	let palabrasOrdenadas= nuevoArray.sort(); //Aqui está ordenado alfabeticamente

	console.log(palabrasOrdenadas); //Vemos si se muestra por pantalla

	palabrasOrdenadas.sort((a, b) => b.localeCompare(a, 'es')); // ordenar Z a A

	
}
Practica1();




