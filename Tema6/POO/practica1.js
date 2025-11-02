class Rectangulo {

  constructor(ancho, alto) {

    if (ancho <= 0 || alto <= 0) {
      this.ancho = 1;
      this.alto = 1;
    } else {

      this.ancho = ancho;
      this.alto = alto;
    }

  }

   cambiarDimensiones(num1,num2) {
    
    this.ancho= num1;// Aqui metemos en ancho el valor del num1
    this.alto=num2;//Aqui meteemos el largo en valor del num2

  }
  calcularArea(){
    return this.ancho* this.alto;
  }
  copia(){

    return new Rectangulo(this.ancho, this.alto);
  }

  comparar(rectangulo2){
    const area1= this.calcularArea();
    const area2= rectangulo2.calcularArea();
   
    if (area1>area2) {
      return 'mayor';
    }else if (area1==area2) {
    return 'iguales';
    }else{
      return 'menor';
    }
    
  }

}


// Crear rectángulos
const r1 = new Rectangulo(4, 5);
const r2 = new Rectangulo(6, 8);

// Calcular resultados
const area1 = r1.calcularArea();
const area2 = r2.calcularArea();
const comparar = r1.comparar(r2);
const copia = r1.copia();


//VALIDAR LOS RESULTADOS EN EL DOM 
let DOM = document.getElementById("resultado");
DOM.innerHTML = `
  <p>Rectángulo 1:</b> ancho = ${r1.ancho}, alto = ${r1.alto}</p>
  <p>Rectángulo 2:</b> ancho = ${r2.ancho}, alto = ${r2.alto}</p>
  <p>Área rect1 = ${area1}</p>
  <p>Área rect2 = ${area2}</p>
  <p>Comparación: rect1 es <b>${comparar}</b> que rect2</p>
  <p>Copia de rect1: ancho = ${copia.ancho}, alto = ${copia.alto}</p>
`;