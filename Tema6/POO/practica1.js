class Rectangulo {

  constructor(ancho, alto) {

    if (ancho <= 0 || largo <= 0) {
      this.ancho = 1;
      this.alto = 1;
    } else {

      this.ancho = width;
      this.alto = height;
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
    
   
    if (this.calcularArea>=rectangulo2) {
      console.log("El rectangulo actual es mayor");
    }else if (this.calcularArea==rectangulo2) {
      console.log("Son iguales")
    }else{
      console.log("El rectangulo actual es menor");
    }
    
    rectangulo2= new Rectangulo(this.ancho, this.alto);
  }


}
