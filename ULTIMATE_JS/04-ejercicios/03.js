/* Indice a validar que no sea menor a cero y que el elemnto se encuentre en nuestro array*/

function getByIndi(arry,indi){
    if(indi < 0){
        return 'No existe un número con ese índice';
    }
    if(indi>= arry.length){
        return 'No existe un número con ese índice';
    }
    return(arry[indi]);
}
let respuesta = getByIndi([1,2,3,4,5], 4);

console.log(respuesta);

