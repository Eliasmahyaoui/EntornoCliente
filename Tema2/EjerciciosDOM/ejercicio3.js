//Pide al usuario dos numeros, sumalos y meustra el resultado
//en un alert
var numero1= prompt("Dime el primer número" , "");
var numero2= prompt("Dime el segundo número", "");

//NECESITAMOS PARSEAR LOS NUMEROS YA QUE JS NO ENTIENDE DE TIPOS/DCLARACIONES
numero1= parseInt(numero1);
numero2= parseInt(numero2);
//Aqui sumamos los dos numeros parseados anteriormente y lo guardamos en suma 
var suma = numero1 + numero2;
//hacemos un alert con suma
alert(suma);