/**Crea un Set con algunos nombres. Luego, agrega un nuevo nombre, verifica si un
nombre específico está en el set, y elimina un nombre. Imprime el contenido del
Set al final.*/ 


// Crea un Set con algunos nombres
const nombres = new Set(['Juan', 'Ana', 'Pedro']);

// Agregamos un nuevo nombre
nombres.add('Maria');

// Verificamos si un nombre específico está en el Set
console.log(nombres); // true

// Eliminamos un nombre
nombres.delete('Pedro');

// Imprimimos el contenido final del Set
console.log(nombres);
