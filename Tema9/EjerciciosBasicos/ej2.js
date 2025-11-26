fetch('https://jsonplaceholder.typicode.com/users') //API 
    .then((response) => {
        if (response.ok) {
            return response.json(); // Parsear la respuesta como JSON
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    })
    .then((data) => {
        
        const listaUsuarios = document.getElementById('listaUsuarios');
        data.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.email} - ${usuario.name}`;
            listaUsuarios.appendChild(li);
        });

    })
    .catch((error) => {
        console.error('Error en la petición:', error);
    });