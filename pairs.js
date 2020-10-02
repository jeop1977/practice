//Práctica de pares.
const caract = [
    ["Nombre", "Juan"],
    ["Estatura", 1.75],
    ["Peso", 74]
  ];
  
  function persona(yo){
    return Object.fromEntries(yo); //Solo tenía que escribir el método, verdad? No necesariamente meterlo en una función.
  }
  console.log(persona(caract));