//Dinanismo: Puedes agregar o quitar datos cuando quieras y puede cambiar su valor en cualquier momento 


//Ejemplo
const user = {id: 1, nombre:'Wilmer', apellido: 'Carmona'}; // const deja agregar a la variable, pero no la deja cambiar
// user = 1; no dejaria hacer eso.

user.correo = 'wilmercarmona17@gmail.com';
user.guardar = function(){
    console.log('Guardando', user.correo);
}
user.nombre = 'Merwil'; // Ahora el nombre cambiará  de 'Wilmer' a 'Merwil'
user.guardar();

// Como bien lo había dicho al comenzar, así como tambien se puede agragar, tambien se pueden eliminar
//ejemplo

delete user.apellido;
delete user.guardar;

console.log(user);

//Ahora, esta función de object.freeze sirve para que no le puedas cambiar los valores al objeto de esa variable
const usuario = Object.freeze({id: 2, name: 'Nicolas', lastName: 'Alvarez'});

usuario.nombre = 'Lasconi'; //ésto no hará ningún cambio, ya que se está usando la función de object.freeze

console.log(usuario);


const user2 = Object.seal({id: 3, nom: 'Nicolas', ape: 'Alvarez'});

user2.nom = 'Lasconi'; //Ésto será modificado, ya que con la función seal puedes modificar propiedades existentes
user2.edad = 17; //Pero si intentamos agregar una propiedad, la funcion seal no lo permitirá

console.log(user2);
