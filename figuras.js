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
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}


function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const base = document.getElementById("InputTrianguloBase");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(base.value);
  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}


function calcularAreaTriangulo() {
  const base = document.getElementById("InputTrianguloBase");
  const altura = document.getElementById("InputTrianguloAltura");
  const value1 = base.value;
  const value2 = altura.value;
  const area = areaTriangulo(value1, value2);
  alert(area);
}