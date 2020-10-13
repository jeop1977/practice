//Práctica isEqual
const a = [3, true, "cuatro",7, 2, 9];
const b = [3, true, "cuatro",7, 2, 9];

function comparar(x, y){
  return JSON.stringify(x) === JSON.stringify(y);
}

console.log(comparar(a, b));

/* Este fue un ensayo fallido:

function comparar2(x, y){
  return _.isEqual(x, y);
}

console.log(comparar2(a, b));
*/