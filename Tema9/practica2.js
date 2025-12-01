//ESTO ES PARA EL GET
boton.addEventListener("click", () => {
  const idResultado = document.getElementById("input").value;

  const urlmodificada = `https://dummyjson.com/products/${idResultado}`;

  fetch(urlmodificada)
    .then((response) => {
      if (response.ok) {
        console.log("EStoy aquii");
        return response.json();
      } else {
        throw new Error(`HTTP Error!, status: ${response.status}`);
      }
    })

    .then((data) => {
      console.log(data);
      document.getElementById("identificacion").textContent = data.id;
      document.getElementById("titulo").textContent = data.title;
      document.getElementById("precio").textContent = data.price;


      const datos = {
        id: data.id,
        title: data.title,
        price: data.price,
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(datos),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })

        .then((data) => {
        
          document.getElementById("tituloPost").textContent = data.title;
        })

        .catch((error) => {
          console.error("Error en la petición:", error);
        });
    })

    .catch((error) => {
      console.error(`Error al cargar los datos:`, error);
    });
});
