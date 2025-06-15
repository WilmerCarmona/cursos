// Crear un algoritno que devuelva el precio del producto más los impuestos de ese producto 

function getPrecioEimpuesto( precio, impuesto){
    // Calcula el precio final sumando el impuesto al precio base
    return precio + precio * impuesto; 
}

let respuesta = getPrecioEimpuesto( 38.500, 0.10);  // Llamamos a la función con 38.500 y 10%
console.log(respuesta);