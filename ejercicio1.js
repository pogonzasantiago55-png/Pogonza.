// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    let validacion = false;
    if(str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9"){
      validacion = !validacion;
    }
    return validacion;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Corregido el nombre en el console.log: tenías 'contrasenaValida2' lo que tiraba ReferenceError.
// 2. Recomendación de simplificación:
// return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";

console.log(contrasenaValida("2Fj(jjbFsuj"));
