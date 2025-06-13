/*Crear un algoritmo que devuelva el numero mayor y el menor de un array*/

let array = [ 23, 49, -35, 9, -3, 17];

function getMaxAndMin(arr){
 // Asumimos que el primer número es el menor y el mayor
  let max = arr[0];
  let min = arr[0];
  // Recorremos cada número del arreglo
  for(numero of arr){
    // Si encontramos uno más pequeño, lo asignamos a min
    min = min < numero ? min : numero; // condicioón "? si_verdadero" y ": si_falso"
    max = max > numero ? max : numero;  //Si MAX es mayor que numero([0] = 23), se queda igual. En este caso queda en 49
  }
  // Devolvemos un array con el menor y el mayor
  return[min,max];
}

let resultado = getMaxAndMin(array);
console.log(resultado) // = [-35, 49]