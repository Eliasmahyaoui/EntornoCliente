/**Crea tres funciones que devuelvan promesas*/

//primeraTarea q devuelva el valor 10

function valorDiez(numero) {
  return new Promise((resolve, reject) => {
    if (numero != 10) {
      reject("Error deberia de ser un 10");
    } else {
      resolve("Bien el numero es " + numero + "!!");
    }
  });
}

//Comprobamos el resultado
valorDiez(23)
  .then((resolve) => {
    console.log(resolve);
  })

  .catch((reject) => {
    console.log(reject);
  });



/*SegundaTarea recibe el valor de primeraTarea, lo multiplica por
por 2 y devuelve el nuevo valor*/








