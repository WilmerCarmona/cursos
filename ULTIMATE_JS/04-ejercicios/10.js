// Crear un array de longitud N, y que sus elementos tengan una longitud del 1 hasta N

let longitud = 9;

function crearArray(n){
    if(n<=0){
        return [];
    }
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = i+1;
    }
    return arr;
}

let respuesta = crearArray(longitud);
console.log(respuesta);