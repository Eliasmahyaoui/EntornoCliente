/*Dado el siguiente array de productos, busca si el producto “Silla” existe. Si existe
muestra el objeto encontrado por consola, si no existe muestra null.*/

let productos = [
{ nombre: "Laptop", categoria: "Electrónica", precio: 1500 },
{ nombre: "Silla", categoria: "Muebles", precio: 100 },
{ nombre: "Cargador", categoria: "Electrónica", precio: 50 }
];

let encontrado= null;//Aquí guardamos el producto si existe


for (let producto of productos) {
    if (producto.nombre== 'Silla') {
        encontrado= producto.nombre;
        break;//Ya lo hemos encontrado salimos del bucle
    }
}

console.log(encontrado);
