// Crear un algoritmo que devuelva la cantidad de número positivos de un array 

let array = [2, -3, 5, -9, 8, -15];

function getPositive(arr){
    let cantidad = 0; 
    for( elemento of arr){
        if(elemento > 0){
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = getPositive(array);
console.log(resultado);