

//1 probando el primer  evento
function mostrarMensaje ()  {
    alert("Aprobaras todo, y se tendran que quedar con la boca cerrada ");
}
//2 para ver si sobrescribe la primera al llamarlo, ya que un evento solo puede ser llamada por una funcion, si no se sobreescribe
function otraFuncion (){
    
   alert("Aqui no te has perdido nada");
}
// 3 objeto event 
function mostrarMensaje2(evento){
alert(evento.type);
}


document.getElementById("miObjeto").onclick= mostrarMensaje;
document.getElementById("miObjeto").onclick= otraFuncion;//Se supone que sobreescribe la primera y sale esta funcion SOLO 
document.getElementById("miObjeto").onclick=mostrarMensaje2;
