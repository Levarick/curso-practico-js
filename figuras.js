// Código del cuadrado.

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triangulo.
function perimetroTriangulo(lado1, lado2, base) {
  return lado1+lado2+base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2; 
}

function obtenerAltura(lado1, base) {
  const cateto = base/2;
  const hipotenusa = lado1;
  return Math.sqrt(hipotenusa * hipotenusa - cateto * cateto);
}

// Código del circulo.

function diametroCirculo(radio) {
  return radio*2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro*Math.PI;
}

function areaCirculo(radio) {
  return (radio * radio) * Math.PI;
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const resultCuadrado = document.getElementById("ResultCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  resultCuadrado.innerText = `El perimetro del cuadrado es de de ${perimetro}cm`;
}


function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const resultCuadrado = document.getElementById("ResultCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  resultCuadrado.innerText = `El area del cuadrado es de de ${area}cm^2`;
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const base = document.getElementById("InputTrianguloBase");
  const resultTriangulo = document.getElementById("ResultTriangulo");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(base.value);
  const perimetro = perimetroTriangulo(value1, value2, value3);
  resultTriangulo.innerText = `El periemtro del circulo es de de ${perimetro}cm`;
}


function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const base = document.getElementById("InputTrianguloBase");
  const resultTriangulo = document.getElementById("ResultTriangulo");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(base.value);
  if (value1 == value2) {
    const altura = obtenerAltura(value1, value3);
    const area = areaTriangulo(value3, altura);
    resultTriangulo.innerText = `El area del triangulo es de de ${area}cm^2`;
  } else {
    alert("No es un tríangulo isoceles");
  }
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById("InputCirculo");
  const resultCirculo = document.getElementById("ResultCirculo");
  const value = radio.value;
  const perimetro = perimetroCirculo(value);
  resultCirculo.innerText = `El perimetro del circulo es de de ${perimetro}cm`;
}

function calcularAreaCirculo() {
  const radio = document.getElementById("InputCirculo");
  const resultCirculo = document.getElementById("ResultCirculo");
  const value = radio.value;
  const area = areaCirculo(value);
  resultCirculo.innerText = `El area del circulo es de de ${area}cm^2`;
}