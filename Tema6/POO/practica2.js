class Ordenadores {

    //Constructor de Ordenadores
    constructor(marca, modelo, memoria = 4, capacidad = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas;
    }


    //Metodo toString 
    toString() {
        return `La marca es ${this.marca}, el modelo es ${this.modelo}, tiene una capacidad de ${this.capacidad} 
        GB de disco duro, una memoria de ${this.memoria} GB y una pantalla de ${this.pulgadas} pulgadas.`;
    }

}

var o1 = new Ordenadores("HP", "PAVILION", 16, 8, 34);
console.log(o1.toString());

/*---------------------------------------------------------------------------------------------------------------*/ 


class Portatiles extends Ordenadores {
    constructor(marca, modelo, memoria, capacidad, pulgadas, autonomia=4) {
        super(marca, modelo, memoria, capacidad, pulgadas);
        this.autonomia = autonomia;

    }

    toString() {
        return `El portátil es un ${this.marca} ${this.modelo} , con ${this.memoria} 
        GB de RAM, ${this.capacidad} GB de almacenamiento, pantalla de ${this.pulgadas} pulgadas
         y ${this.autonomia} horas de autonomía.`;
    }
}

var p1 = new Portatiles("MACBOOK", "AIR", 5, 256, 13, 5);
console.log(p1.toString());


/* DOM */

/**Primero creamos la variable DOM para en ella guardar el id  */

let DOM= document.getElementById("resultado");

/**Luegocon . innerHTML ponemos lo que queremos que salga por HTML */
DOM.innerHTML= `<p>${o1.toString()}</p> <br> <p>${p1.toString()}</p>`;
