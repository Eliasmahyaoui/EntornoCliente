
//1. Funciones normales

console.log(saludar("mamá")); //Las funciones normales si que soportan que las llames antes por el hoisting.

function saludar(palabra){
    return "Hola" + " " +  palabra;
}

/*Que es el hoisting?
- Es que el codigo si tu llamas a la funcion antes lo coge igual, no le importa que el flujo tenga primero la llamada y luego la funcion.
En cambio, con las funciones de expresion (Expressions functions, no lo soporta, es decir que si yo llamo a la funcion antes de creearla, 
da error.)
*/ 

//2. Funciones con expresiones (Expressions functions)

const suma= function(a,b){
    return a + b;
}
console.log(suma(4,5));

//3.Funciones flecha

const saludar = ()=>{
    return a +b;
}
