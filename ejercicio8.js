// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de
// números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
// ==============================================================================

function duplicar(arreglo) {
    let resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        resultado.push(arreglo[i] * 2);
    }
    return resultado;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo: Declaramos `let i = 0` en el bucle `for` para evitar la variable global `i`.
// 2. Excelente uso de `.push()` y multiplicación. Alternativa moderna: `arreglo.map(num => num * 2)`.

console.log(duplicar([1, 2, 3]));