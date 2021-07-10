function obtenerPorcentaje(precio, descuento) {
  const porcentaje = 100 - descuento;
  return precio * (porcentaje/100);
}

function calcularDescuento() {
  const precio = document.getElementById("InputPrice");
  const descuento = document.getElementById("InputDiscount");
  const resultP = document.getElementById("ResultP");
  const value = precio.value;
  const value2 = descuento.value;
  const porcentaje = obtenerPorcentaje(value, value2);
  resultP.innerText = `El precio final con un descuento de ${descuento.value}% es de $${porcentaje}`;
}

