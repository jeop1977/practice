//Práctica isEqual
const a = [3, true, "cuatro",7, 2, 9];
const b = [3, "cuatro",7, 5, true, 9];

function comp(a, b){
  const arr1 = Array.from(a);
  const arr2 = Array.from(b);
  if (a.length !== b.length) return false;
  
  arr1.sort();
  arr2.sort();

  let bandera = true;

  arr1.forEach((valor, indice) => {
    if (valor !== arr2[indice]){
      bandera = false;
      return
    }
  });

  return bandera;
}

console.log(comp(a, b));