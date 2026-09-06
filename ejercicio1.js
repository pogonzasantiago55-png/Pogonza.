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
