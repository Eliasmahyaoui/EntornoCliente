fetch('https://jsonplaceholder.typicode.com/users') //Aqui hay que poner la API 
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`HTTP error!, status: ${response.status}`);
        }

})
.then((data) => {
console.log(`Datos recibidos:`, datos);
})
.catch((error)=>{
    console.error(`Error en la petición:`, error);
});