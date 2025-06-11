/*Nombre.....Ancho....Alto
8K.....7680.....4320
4K.....3840.....2160
WQHD.....2560.....1440
FHD.....1920.....1080
HD.....1280.....720
*/
function nombreResolucion(ancho , alto){
    if( ancho > 7680 && alto > 4320){
        console.log('La resolución es: 8K');

    }else if(ancho >= 3840 && alto >= 2160 ){
        console.log('La resolición es: 4K');

    }else if (ancho >= 2560 && alto >= 1440){
        console.log('La resolución es: WQHD');

    }else if(ancho >= 1920 && alto >= 1080 ){
        console.log('LA resolución es: FHD');

    }else if(ancho >= 1280 && alto >= 720 ){
        console.log('La resolición es: HD');

    }else{
        console.log('Esos números no concuerdan con ninguna resolución');
    }
}

let resultado = nombreResolucion( 1919 , 720 );
console.log(resultado);