//Mostrar numeros impares hasta el 20

let i = 0;

while(i<=20){
    if(i%2 !== 0){ // Utilizo el operador logico de negación "!"
        console.log('Este númerio es impar',i);
    }
    i++;
}

//Ahora de una forma más corta 

for( let w = 1; w <= 20; w+=2){
    console.log('Numero impar',w)
}