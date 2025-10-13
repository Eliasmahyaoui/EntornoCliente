/*Crea el siguiente array:*/
let personas = [{ name: "Nacho", telephone: "966112233", age: 40 },
{ name: "Ana", telephone: "911223344", age: 35 },
{ name: "Mario", phone: "611998877", age: 15 },
{ name: "Laura", telephone: "633663366", age: 17 }];

//Añade dos elementos al final 
personas.push({ name: "Federico", telephone: "111111111", age: 99 },
    { name: "Ernesto", telephone: "222222222", age: 77 });

//Comprueba que se ha añadido con console.log
console.log(personas);

//Ordena el vector por edad comprueba el resultado
personas.sort(function(a, b) {
  return a.age - b.age;
});

console.log(personas);

//Ordena el vector por nombre (utiliza .localcompare).   
personas.sort(function(a, b) {
  return a.age.localeCompare(b.age);
});

console.log("Ordenado por nombre:" , personas);

//Crea y muestra un nuevo vector que contenga  solo los mayores de 30 años
let mayoresde30= [];

//Recorremos con un forOf
for (const persona of personas) {
    if (persona.age>30) {
      mayoresde30.push(persona)
    }
}

console.log("Los mayores de 30 son" , mayoresde30);