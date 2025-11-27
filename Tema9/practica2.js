fetch('https://dummyjson.com/products/12')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Error!, status: ${response.status}`);
    }
  })

  .then((data) => {

    console.log(data.price);



  })

  .catch((error) => {
    console.error(`Error al cargar los datos:`, error);
  });
