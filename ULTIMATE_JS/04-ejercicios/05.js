/*Crear un algoritmo que devuelva el numero mayor y el menor de un array*/

let array = [ 23, 49, -35, 9, -3, 17];

function getMaxAndMin(arr){
  let max = arr[0];
  let min = arr[0];
  for(numero of arr){
    min = min < numero ? min : numero;
    max = max > numero ? max : numero; 
  }
  return[min,max];
}

let resultado = getMaxAndMin(array);
console.log(resultado)