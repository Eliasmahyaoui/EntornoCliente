/*Crea un Map que almacene nombres como claves y edades como valores. Luego,
agrega algunos nombres y edades, actualiza la edad de uno de ellos, y finalmente
imprime todos los nombres con sus edades.**/ 

const nombres= new Map();

//Almacenamos nombres y edades 
nombres.set('Elias',29);
nombres.set('Luca',32);
nombres.set('Seven',21);
nombres.set('Marco',18);


//Actualiza la edad de uno de ellos
nombres.set('Elias', 27);


for (const [nombre, edad] of nombres) {
    console.log(`${nombre} tiene ${edad} años`);
}