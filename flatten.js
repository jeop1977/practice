const arrIn = [9, 4, 12, [32, 41, [15, 77], 17], 33];
let arrFn = arrIn.flat(2);

console.log(arrFn);

let arr2 = [];

  for(let i = 0; i < arrIn.length; i++){
    if(Array.isArray(arrIn[i])){
      for(let a = 0; a < arrIn[i].length; a++){
        if(Array.isArray(arrIn[i][a])){
          for(let b = 0; b < arrIn[i][a].length; b++){
            arr2.push(arrIn[i][a][b]);
          }
        } else
        arr2.push(arrIn[i][a]);
      }
    } else
    arr2.push(arrIn[i]);
  }


console.log(arr2);