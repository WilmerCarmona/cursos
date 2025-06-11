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

// Hagamos eso de una forma más corta con el caso ternario 

 function cualEsSuperior(a , b){
   return (a > b)? a : b; //Ternario
 }
 let resul = cualEsSuperior(17,22);
 console.log('El numero mayor es: ',resul)
