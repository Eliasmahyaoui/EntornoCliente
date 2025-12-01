boton.addEventListener('click', () => {
  const idResultado = document.getElementById('input').value;

  const urlmodificada = `https://dummyjson.com/products/${idResultado}`;

  fetch(urlmodificada)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP Error!, status: ${response.status}`);
      }
    })


    .then((data) => {
      document.getElementById('identificacion').textContent = data.id;
      document.getElementById('titulo').textContent = data.title;
      document.getElementById('precio').textContent = data.price;

    })


    .catch((error) => {
      console.error(`Error al cargar los datos:`, error);
    });

});


const datos = {
  id: data.id,
  title: data.title,
  price: data.price
  
};

fetch('https://httpbin.org/post ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error en la petición:', error);
  });