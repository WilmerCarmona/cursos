let condicion;

switch(condicion){
    case 'despedir':
        console.log('Me tengo que ir, hasta luego');
        break;
    case 'saludar':
        console.log('Hola, como te encuentras?');
        break;
    default:
        console.log('No se encontró, ninguna condición');
}

// tambien se puede hacer con la condicion de else if

let condition = 'chao';

 if(condition == 'hola'){
    console.log('Saludar');

 }else if(condition == 'chao'){
    console.log('Despedir');
} else{
    console.log('No hay niguna condición');
}
 