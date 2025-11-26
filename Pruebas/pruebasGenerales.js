//FUNCIONES 
const productos = [ { nombre: "Camiseta", precio: 20 }, { nombre:
"Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ];
    

productos.forEach(n => {
    n.precio*= 1.10; 
});

console.log(productos);

//-----------------------------------------------------------

const numeros2= [23,43,23,54.76];

const duplicarNumeros2= numeros2.map(numero => numero * 2);
console.log(duplicarNumeros2);
console.log(numeros2);
//---------------------------------------------------------------

    const numerosElias= [4,6,8,9,10];
    console.log(numerosElias.reduce(function(total, num){
        return total + num;
    },0));


// -----------------------------------------------------------------

    const numerosMama= [1,2,3,76,23,55,0,]

    console.log(numerosMama.filter(function(num){
        return num > 3;
    }));












