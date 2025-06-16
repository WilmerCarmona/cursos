// let edad = 19;

// if(edad > 18){
//     console.log('Es mayor de edad');
// }else{
//     console.log('Es menor de edad');
// }

// console.log(edad);

// EJEMPLO CON IF ELSE

const edad = 18;

if(edad >= 18){
    console.log('El usuario es mayor de edad');
}else if(edad >= 13){
    console.log('El usuario es adolecente');
}else{
    console.log('El usuario es menor de edad');
};

//cual de los 3 numeros es mayor?

let a = 20;
let b = 20;
let c = 20;

if (a > b && a > c){
    console.log('El numero',a,' es mayor que el numero',b,'y', c);
}else if(b > a && b > c){
    console.log('El numero',b,' es mayor que el numero',a,'y', c);
}else if(c > a && c > b){
    console.log('El numero',c,' es mayor que el numero',a,'y', b);
}else{
    console.log('Los numeros',a,b,'y',c,'son iguales');
}