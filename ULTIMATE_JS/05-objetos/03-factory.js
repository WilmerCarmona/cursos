//Nos permite crear objetos de una manera sencilla y no repetitiva 

//ejemplo de como craríamos dos usuarios sin factory functions

// let user = {id: 1,
//     name: 'Wilmer',
//     lastName: 'Alvarez',
//     email: 'wilmercarmona17@gmail.com',
//     activo: true,
//     recuperarContraseña: function(){
//         console.log('Recuperando contraseña del usuario: ', user.name, user.lastName);
//     }
// };

// let user = {id: 2,
//     name: 'Merwil',
//     lastName: 'Carmona',
//     email: 'merwilcarmona17@gmail.com',
//     activo: false,
//     recuperarContraseña: function(){
//         console.log('Recuperando contraseña del usuario: ', user.name, user.lastName);
//     }
// };

function createUser( name, lastName, email, activo){
    return{
        name,
        lastName,
        email,
        activo,
        recuperarContraseña: function(){
            console.log('Recuperando contraseña del usuario: ');
        }
    }
};

let user1 = createUser('Wilmer', 'Carmona' , 'wcarmona@gmail.com', false);
let user2 = createUser('Nicolas', 'Alvarez' , 'nicoalvarez@gmail.com', true);

console.log(user1,user2);


