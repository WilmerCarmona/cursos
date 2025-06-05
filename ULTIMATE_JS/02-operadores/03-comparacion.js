// Operadores relacionales

let a = 5;
//a = a - 5;

 console.log(a > 3); // a(5) es mayor que 3? = true
 console.log(a >= 6); // a(5) es mayor o igual que 6? = false
 console.log(a < 3); // a(5) es menor que 3? = true
 console.log(a <= 6); // a(5) es menor o igual que 7? = false


// operadores de igualdad

console.log(a==5); // a es IGUAL a 5? true
console.log(a!=5) // a es DISTINTO a 5? false
console.log(a == '5') /*a es IGUAL a 5 pero escrito de forma STRING? true. Porque el signo de doble igualdad
va a pregutar si el valor es igual, no se enfoca en que los tipos deben de ser igual */

console.log(a === '5')/* En caso de que quieras preguntar si los VALORES Y EL TIPO  es igual deberias de usar triple
 igualdad (===) por lo tanto esto es false */

console.log(a !== '5') // son distintos tipos de dato o de valor? true