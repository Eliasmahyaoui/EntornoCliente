//Esto es un ejemplo de cookies 
document.cookie = "usuario=Elias; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";


//funcion getCookie

function getCookie(cnombre) {
    var nombre = cnombre + "=";
    var ca = document.cookie.split(';');
    for (let i = 0; i < ca.ltength; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return "";
}



















//setCookies (variable,valor, expedicion)
function setCookies(cnombre, cvalor, cexpedicion) {
    var d = new Date();
    d.setTime(d.getTime)


}