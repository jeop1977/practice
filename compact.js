let arreglo = [1, 4, "casa", false, true, 0, 7, 9,,, 1977, "", "perro", null, 94, undefined, "cierre"];

//Primero intento
let filtro1 = arreglo.filter(
  function(eliminar){
    return eliminar != null;
  }
);

console.log(filtro1);

//Segundo intento
let filtro2 = arreglo.filter(Boolean);

console.log(filtro2);