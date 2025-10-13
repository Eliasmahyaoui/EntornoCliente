/*Dado el array numeros = [4, 21, 33, 12, 9, 54], obtén un nuevo array que contenga
solo los números pares.*/

let numeros = [4, 21, 33, 12, 9, 54];

//Obten un nuevo array que contengan los numeros pares 

//la funcion filter 
console.log(numeros.filter(function(numeros){
    return numeros % 2==0;
}));


