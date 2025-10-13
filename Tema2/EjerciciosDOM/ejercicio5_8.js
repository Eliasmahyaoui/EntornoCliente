
//Marca todos los estudiantes cuyo name sea alumnos.
var estudiantes= document.getElementsByName("alumnos");




//Todoas los textbox que tengan de name alumnnos, los marcamos
for ( let i = 0; i < estudiantes.length; i++) {
    if(estudiantes[i].type=="checkbox") {
            estudiantes[i].checked = true;
    }
}
