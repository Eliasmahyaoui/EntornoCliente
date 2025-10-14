/*Crea una funcion autoinvocada que reciba dos parametros: una cadena de texto y un numero.
Dentro de la funcion, concatena la cadena con el numero y muestra el resultado en consola*/

function anonima(cadena, num){
    console.log(`EL texto es: ${cadena} y el numero es: ${num} `)

}("Hola, el numero es" , 10)
console.log(anonima(cadena, num));