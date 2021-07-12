function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return parseInt(valorAcumulado) + parseInt(nuevoElemento);
    }
  );
  console.log(sumaLista);
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
} 

function calcularMedianaM(lista) {
  let arrayInt = [];
  let mediana;
  for(var i = 0; i < lista.length; i++) {
    arrayInt[i] = parseInt(lista[i]);
  }
  const arraySort = arrayInt.sort(
    function(a,b) {
      return a - b;
    }
  );
  const middlePosition = parseInt(arraySort.length / 2);
  if ((arraySort.length % 2) === 0){
    mediana = (arraySort[middlePosition-1] + arraySort[middlePosition]) / 2
  } else {
    mediana = arraySort[middlePosition];
  }
  return mediana;
}

function calcularModaM(lista) {
  let listaCount = {};
  lista.map(
    function (elemento) {
      var int = parseInt(elemento)
      if (listaCount[int]) {
        listaCount[int] += 1;
      } else {
        listaCount[int] = 1;
      }
    }
  );
  const listaArray = Object.entries(listaCount).sort( 
    function (a, b) {
      return a[1] - b[1];
    }
  );
  return listaArray[listaArray.length - 1];
}

function calcularMediaAritmetica() {
  const lista = document.getElementById("InputLista");
  const result = document.getElementById("ResultMediaA");
  const arrayLista = lista.value.split(",");
  const media = calcularMedia(arrayLista);
  result.innerText = `La media aritmetica es: ${media}`;
  console.log(arrayLista);
}

function calcularMediana() {
  const lista = document.getElementById("InputListaM");
  const result = document.getElementById("ResultMediana");
  const arrayLista = lista.value.split(",");
  console.log(arrayLista);
  const mediana = calcularMedianaM(arrayLista);
  result.innerText = `La media aritmetica es: ${mediana}`;
}

function calcularModa() {
  const lista = document.getElementById("InputListaMod");
  const result = document.getElementById("ResultModa");
  const arrayLista = lista.value.split(",");
  const moda = calcularModaM(arrayLista);
  result.innerText = `La media aritmetica es: ${moda[0]} y se repite ${moda[1]} veces`;

}