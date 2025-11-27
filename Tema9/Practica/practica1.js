

fetch('https://randomuser.me/api/')

.then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`HTTP Error!, status: ${response.status}`);
        }
})

.then((data)=>{

    //Primero tendremos que entrar al array 
    const usuario= data.results[0];

    //con el array 
     document.getElementById('imagen').src= usuario.picture.medium;
     document.getElementById('nombre').textContent= usuario.name.first;
     document.getElementById('apellido').textContent= usuario.name.last;
     document.getElementById('direccion').textContent= usuario.location.street.name;
     document.getElementById('pais').textContent=usuario.location.country;

    


 
      


})

.catch((error)=>{
 console.error(`Error al cargar los datos:`, error);
});