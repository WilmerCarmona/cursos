// short-circuit

//Falsy
// Falso: False, 0, '', null, undefined, NaN// Esto es lo que saldrá si intentas realizar una operación matematica y por alguna razón no logra calcular un numero valido

let nombre = '';
let userName = nombre || 'Aninimo';

console.log(userName);