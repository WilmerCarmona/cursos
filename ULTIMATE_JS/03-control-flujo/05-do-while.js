
/*
El ciclo do while se comporta diferente al while normal

En un ciclo while:
    Primero se evalúa la condición
    Si la condición es verdadera, se ejecuta el bloque de código
    Si la condición es falsa desde el principio, el código nunca se ejecuta

En un ciclo do while:
     Primero se ejecuta el bloque de código sin importar la condicion
     Luego se evalúa la condición para decidir si se repite o no

Esto significa que el ciclo do while siempre se ejecuta al menos una vez.
*/

// Ejemplo usando do while
let i = 2;

do {
    if (i % 2 == 0) {
        console.log('Número par con do:', i); // Este código se ejecuta antes de evaluar la condición
    }
    i++;
} while (i < 2); // Luego se evalúa esta condición para decidir si repetir

// Ejemplo con while normal
i = 2;

while (i < 4) { // Esta condición se evalúa primero, y mientras esté en 2 es falsa, ya que la variable tambien inicia por el 2, entonces no entra en el bucle
    if (i % 2 == 0) {
        console.log('Número par while:', i);
    }
    i++;
}

/*
Ambos ciclos son diferentes 

 En el ejemplo con do while, aunque i ya vale 2 (y la condición podría no cumplirse luego),
  el bloque se ejecuta una vez y muestra "Número par con do while: 2".

 En el ejemplo con while normal, como i ya es 2 y la condición es (i < 2), que es falsa,
  el bloque de código no se ejecuta.

Esto demuestra que el ciclo do while garantiza al menos una ejecución, mientras que el while no.
*/
