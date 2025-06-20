function Usuario(){
    this.id = 1;
    this.recuperarContraseña = function(){
        console.log('Recuperando contraseña...');
    }
}
let usuario1 = new Usuario();
let usuario2 = new Usuario();
console.log(usuario1, usuario2);


