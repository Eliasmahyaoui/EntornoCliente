//Recorre los span class= precio y suma 0.10 a cada valor mostrado

  // Seleccionamos todos los span con clase precio
  const precios = document.querySelectorAll(".precio");

  // Recorremos cada uno
  precios.forEach(span => {
    // Obtenemos el número que tiene dentro
    let valor = parseFloat(span.textContent);

    // Sumamos 0.10
    valor += 0.10;

    // Mostramos el nuevo valor con 2 decimales
    span.textContent = valor.toFixed(2);
  });

