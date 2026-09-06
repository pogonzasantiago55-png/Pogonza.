// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    let calculo = 0;
    let validar_edad = 18;
    let validar_ingresos = 1000;
    if(edad >= validar_edad && ingresos >= validar_ingresos){
       calculo = ingresos * 0.40;
       return calculo;
    }
    return calculo;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo con la redeclaración de variables: Adentro del `if` tenías `let calculo = ...`, redeclarando la variable `calculo` del ámbito exterior.
// 2. Podés retornar directamente `ingresos * 0.4` si se cumplen las condiciones o `0` al final.

console.log(calcularImpuestos(18, 1000));