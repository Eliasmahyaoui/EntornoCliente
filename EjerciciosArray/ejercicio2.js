/*2. Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia".
Recorre el array e imprime el nombre de cada país. Después, elimina el primer país del
array y vuelve a recorrerlo e imprimir el array de nuevo.*/ 

//Creamos el array 
const paises= new Array();

//los inicializamos con diferentes paises (Strings)
paises[0]="España";
paises[1]="Francia";
paises[2]="Alemania";
paises[3]="Italia";

for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
    
}

//Eliminamos el primer pais 

delete paises[0];

// vuelve a recorrer el array 
for (const i in paises) {
   
    console.log(paises[i]);

}

