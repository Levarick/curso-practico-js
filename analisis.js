// Utils
function esPar(numero) {
  return (numero % 2 === 0)
}

// Calculadora de Medianas
function medianaSalarios(lista) {
  let personaPromedio;
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    personaPromedio = (lista[mitad-1] + lista[mitad]) / 2
  } else {
    personaPromedio = lista[mitad];
  }
  return personaPromedio;
}

// Mediana General
const salariosCol = colombia.map(
  function (persona) {
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (a, b) {
    return a - b;
  }
)

const medianaGeneral = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length*90)/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneral, medianaTop10
});