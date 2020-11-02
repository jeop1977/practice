//strict

//Práctica Unique
function unicos(valor, indice, matriz) { 
    //Tengo dudas acerca del funcionamiento de estos parámetros
    return matriz.indexOf(valor) === indice;
}

const itemes = [7, 12, "Juan", 77, 12, 12, 12, 12, 32, "Juan", false, false, true, 44, 77, true]
const matrizUnica = itemes.filter(unicos)

console.log(Array.isArray(itemes));

console.log(matrizUnica);

const items = [7, 12, "Juan", 77, 12, 32, "Juan", false, false, true, 44, 77, true]
console.log('My Arrays:', items);

const newArray = items.filter((v, i, a) => a.indexOf(v) === i)

console.log(newArray)

console.log('***************************')

function fname(a, b, ...arg) {
    console.log(a,b, arg)
}

const arr = [...itemes,  ...newArray]

fname("Adrian", "Higuita", "Hola mundo", "QUe mas pues")
console.log(arr)

const obj = { firstName: "Adrian", lastName: "Higuita"}
const obj2 = { age: 34, sex: "male" }

console.log({id: "1234", info: obj2})

obj2.age = 33;

console.log({id: "1234", info: {...obj2}})