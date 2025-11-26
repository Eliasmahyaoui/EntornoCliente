

var numeros = []; // array vacío

for (let i = 0; i < 50; i++) {
    let aleatorio = Math.floor(Math.random() * 49) + 1; // 1 a 49
    numeros.push(aleatorio);
}

console.log(numeros);

// --------------------------------------------------------------------

for (let i = 0; i <= 10000; i++) {
    let aleatorio = Math.floor(Math.random() * 10) + 1;

    console.log("Numero " + i + ":" + aleatorio);

}

// --------------------------------------------------------------------
let a = ["a", "b", "c"];
let b = ["d", "E", "f"];

let allLetras = a.concat(b);
console.log(allLetras);
a.splice(1, 3);
console.log(a);

//----------------------------------------------------------------------

//Ejemplo de JSON

let datos = [{
        nombre: "Nacho",
        telefono: "966112233",
        edad: 40
    },
    {
        nombre: "Ana",
        telefono: "911223344",
        edad: 35
    },
    {
        nombre: "Mario",
        telefono: "611998877",
        edad: 15
    },
    {
        nombre: "Laura",
        telefono: "633663366",
        edad: 17
    }
];


console.log(datos[0]);
console.log(datos[1].telefono);

//-------------------------------------------------------------------

let mensaje = "Soy un tipo muy inteligente";

let array = mensaje.split(' ');
console.log(array);

console.log(mensaje.split(' ', 2));

//--------------------------------------------------------------

let data = [{
        name: "Nacho",
        telephone: "966112233",
        age: 40
    },
    {
        name: "Ana",
        telephone: "911223344",
        age: 35
    },
    {
        name: "Mario",
        phone: "611998877",
        age: 15
    },
    {
        name: "Laura",
        telephone: "633663366",
        age: 17
    }
];

data.push({
    name: "Pedro",
    telephone: "611944444",
    age: 25
}, {
    name: "Julia",
    phone: "633232323",
    age: 37
});

//------------------------------------------------------------

for (const persona of data) {
    console.log(persona.age);
}

console.log("---------------------------------------------");
//--------------------------------------------------------------

//SET
let lista = new Set();

lista.add(8);
lista.add(5);
lista.add(10);
lista.add(8);
lista.add(9);
lista.add(8);
lista.add(3);

console.log(lista);
