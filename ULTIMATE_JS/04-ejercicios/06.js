// Crear un algoritmo que devuelva la cantidad de número positivos de un array 

let array = [2, -3, 5, -9, 8, -15];

function getPositive(arr){
    let cantidad = 0; // creamos una variable que estará aumentado a medida que encuentre un numero positivo
    for( elemento of arr){  //Hacemos una iteración 
        if(elemento > 0){ // Y si en nuestra iteración hay algun elemento mayor a 0
            cantidad++; // La variable de cantidad aumentará
        }
    }
    return cantidad; //retornamos la cantidad exacta fuera de nuestros controles de flujo 
}

let resultado = getPositive(array);
console.log(resultado);// imprimimos el resultado = 3