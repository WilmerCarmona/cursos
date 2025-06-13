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

// Ahora ordenando el array y utilizando el metodo de la burbuja
let arry = [23, 49, -35, 9, -3, 17];

function burbuja(arr) {
  let n = arr.length;
  // Hacemos una copia para no modificar el original
  let copia = [...arr]; 

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (copia[j] > copia[j + 1]) {
        // Intercambiamos los elementos si están desordenados
        let temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }
  }

  return copia; // Ya está ordenado
}

let ordenado = burbuja(arry);
let menor = ordenado[0]; // Primer elemento después de ordenar
let mayor = ordenado[ordenado.length - 1]; // Último elemento

console.log("Array ordenado:", ordenado);
console.log("Menor:", menor);
console.log("Mayor:", mayor);
