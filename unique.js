//Práctica Unique
function unicos(valor, indice, matriz) { //Tengo dudas acerca del funcionamiento de estos parámetros
    return matriz.indexOf(valor) === indice;
}

const itemes = [7, 12, "Juan", 77, 12, 32, "Juan", false, false, true, 44, 77, true]
const matrizUnica = itemes.filter(unicos)

console.log(matrizUnica);