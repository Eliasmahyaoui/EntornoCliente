fetch(' https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    if (response.ok) {
       return response.json();
    } else {
        throw new Error(`HTTP Error!, status: ${response.status}`)
    }
})
   
.then((data)=>{
     const listaUsuarios= document.getElementById('listaUsuarios');
    data.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.email} - ${usuario.name}`;
        listaUsuarios.appendChild(li);
    })

})

.catch((error)=>{
    console.error(`Error al cargar los datos:`, error);
});