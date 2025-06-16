//crear un algoritmo que tome un array de objetos y devuelva un array de pares 

/*
Ejemplo de array normal
    let frutas = ["Naranja","manzana","Pomelo"]; // Un array normal solo es una lista de objetos
    console.log( frutas [1]); //El array normal de llamaría de esta forma

Ejemplo de array de pares
    let personas = [ // Los pares son un array dentro de otro array, este es el primer array
        [1, {nombre: 'Wilmer', apellido: 'Carmona'}], //este es el segundo array. Par uno, identificado por el numero 1 
        [2, {nombre: 'Nicolas', apellido: 'Alvarez'}], //par dos identificado con el numero 2
    ];  
*/

let animales =[
    [1,{id: 1, nombre: 'Oreo', peso:1.2}],
    [2,{id: 2, nombre: 'Pelusa', peso: 2.3}],
    [3,{id: 3, nombre: 'Tiger', peso: 4.1}],
];

function toPairs(arr){
    let pairs = [];
    for(idx in arr){
        let elemento = arr [idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs
}

let resultado = toPairs(animales);
console.log(resultado);