//Crear un algoritmo que devuelva un array de objetos en base a pares

let pairs = [
    [1,{nombre: "Wilmer", edad: 21}],
    [2,{nombre: "Nicolas", edad: 20}],
    [3,{nombre: "Tian", edad: 20}],
];

function toCollection(arr){
    let coleccion = []; // Creamos un array vacío donde guardaremos los nuevos objetos
    for(idx in arr){ // Recorremos cada índice del array de pares
        let elemento = arr[idx]; // Obtenemos el par actual, ejemplo: [1, {nombre, edad}]
        coleccion[idx] = elemento[1]; // Guardamos solo el objeto en la nueva colección
        coleccion[idx].id = elemento[0]; // Agregamos la propiedad 'id' con el valor correspondiente
    }
    return coleccion;
}
let respuesta = toCollection(pairs);
console.log(respuesta);