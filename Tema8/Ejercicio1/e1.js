/*Ej1: Crea una función sumarAsync(a, b) que devuelva una promesa.
Debe resolverse con la suma, o rechazarse si alguno no es número.*/

function sumarAsync(a, b) {
  return new Promise((resolve, reject) => {
    let a = "HOla";
    let b = 10;
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Error: Ambos argumentos deben ser números.");
    } else {
      resolve(a + b);
    }
  });
}

//Resultado de la promesa
sumarAsync()
  .then((resolve) => {
    console.log(resolve);
  })

  .catch((reject) => {
    console.log(reject);
  });


  