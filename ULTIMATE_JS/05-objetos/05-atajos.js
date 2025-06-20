let obj = new Object(); // Así es como vemos creando los objetos 

let obj2 = {}; // Éste es un atajo para crear un objetos

// no solo hay atajos de object, tambien hay atajos de:
/*
new Array (); = []
new String (); = "" '' ´´
new number (); = Numeros 
new boolean (); = false or true
*/

function Usuarios(){
    this.name = "Wilmer";
    this.lastName = "Carmona";
    this.recuperarContraseña = function (){
        console.log('Recuperando...');
    }
}

let user = new Usuarios();
console.log(user.constructor);