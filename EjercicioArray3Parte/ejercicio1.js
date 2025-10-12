/** Crea un array llamado numeros con al menos seis numeros. Usa 
 * desestructuracion para obtener los primeros don numeros en variables
 * individuales y almacena el resto de los numeros en un array llamado resto
*/

//Creacion del array con 6 numeros
let numeros= ["0","12","23","27","72","33"];
let [primero, segundo, ... resto] = numeros;
console.log(primero);
console.log(segundo);
console.log(resto);

