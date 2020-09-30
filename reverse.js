//Práctica Reverse

//Usando Reverse
const array_uno = ["uno", "dos", "tres", "cuatro"];
console.log("Array 1: ", array_uno);

const array_revertido = array_uno.reverse();
console.log("Array revertido: ", array_revertido);

//Usando For
const array1 = ["uno", "dos", "tres", "cuatro"];
console.log("Array 1: ", array1);

function reversa(entrada){
  for(let i = entrada.length - 1; i >= 0; i--){
    console.log(entrada[i]); //No sé bien cómo utilizar el método Join. Eso está por mejorar.
  }
}

reversa(array1);