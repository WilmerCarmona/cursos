function Usuario(name, age){
    this.nombre = name;
    this.edad = age;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U ('Wilmer' , 12);

console.log(user);

//Tambien se pueden pasar las funciones como argumento
//Ejemplo

function of(Fn, arg, arg2){
    return new Fn(arg,arg2);
}  

let user2 = of(Usuario , 'Nicolas' ,11); // Este Usuario, viene del constructor que se encuentra al principio
console.log(user2);

//tambien las podemos retornar dento de otras funciones

function retornar(){
    return function(){
        console.log('Hola mundo');
    }
}

let saludo = retornar();
saludo();
