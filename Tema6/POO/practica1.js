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
    this.largo=num2;//Aqui meteemos el largo en valor del num2

  }
  calcularArea(ancho, alto){
    return ancho* alto;
  }
  copia(){

    rectangulo= new Rectangulo(this.ancho, this.alto);
  }

  comparar(rectangulo2){
    const area1= this.calcularArea();
    const area2= rectangulo2.calcularArea();
   
    if (area1>area2) {
      console.log("El rectangulo actual es mayor");
    }else if (area1==area2) {
      console.log("Son iguales")
    }else{
      console.log("El rectangulo actual es menor");
    }
    
  }

}
const r1= new Rectangulo(4,5);
const r2= new Rectangulo(6,8);
r1.comparar(r2);