//Dinanismo: Puedes agregar o quitar datos cuando quieras y puede cambiar su valor en cualquier momento 


//Ejemplo
const user = {id: 1, nombre:'Wilmer', apellido: 'Carmona'}; // const deja agregar a la variable, pero no la deja cambiar
// user = 1; no dejaria hacer eso.

user.correo = 'wilmercarmona17@gmail.com';
user.guardar = function(){
    console.log('Guardando', user.correo);
}

user.guardar();