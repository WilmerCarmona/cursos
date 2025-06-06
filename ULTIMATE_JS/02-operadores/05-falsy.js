// Short-circuit (Evaluación de cortocircuito)

// Valores falsy: false, 0, '', null, undefined, NaN
// Estos son valores que JavaScript interpreta como "falsos" en contextos booleanos

// Por ejemplo, NaN aparece cuando intentás hacer una operación matemática que no tiene un resultado válido

// Ejemplo con el operador OR (||)
let nombre = '';
let userName = nombre || 'Anónimo'; 
/* En este caso, si la variable 'nombre' tiene un valor falsy como una cadena vacía(''),
entonces JavaScript evaluará el siguiente valor de userName ('Anónimo')

Esto es útil, por ejemplo, cuando un usuario visita una página sin iniciar sesión.
Su nombre no está definido, así que mostramos un valor por defecto como Anónimo
*/

console.log(userName); //mostrará Anónimo

// ¿Por qué no usar && en este caso?
/*
El operador && (AND) devuelve el primer valor falsy que encuentra,
mientras que el operador || (OR) devuelve el primer valor que se encuentra en true.

Por eso, en este tipo de asignaciones donde queremos un valor por defecto,
usamos || y no &&.
*/

// Ejemplo con funciones para entender mejor cómo funciona &&
function fn1() {
    console.log('Soy función 1');
    return true;
}

function fn2() {
    console.log('Soy función 2');
    return true;
}

let x = fn1() || fn2(); 
/* En este caso, fn1() se ejecuta primero y retorna false.
Debido a que el resultado ya es falsy, JavaScript no ejecuta fn2()
(por eso se llama "evaluación de cortocircuito").
*/

console.log(x);
