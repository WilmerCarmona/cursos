function cualEsMAyor(a,b){
    if(a > b){
        console.log('El numero: ', a , 'Es mayor que', b);
        
    }else if(b > a){
        console.log('El numero: ', b , 'Es mayor que', a);

    }else{
        console.log('El numero', a , 'y el numero', b, 'son iguales');
    }
}

let resultado = cualEsMAyor(17, 17);

console.log(resultado);