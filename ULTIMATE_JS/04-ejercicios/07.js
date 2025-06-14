// Crear un algoritno que devuelva el precio del producto más los impuestos de ese producto 

function getPrecioEimpuesto( precio, impuesto){
    return precio + precio * impuesto;
}

let respuesta = getPrecioEimpuesto( 38.500, 0.10);
console.log(respuesta);