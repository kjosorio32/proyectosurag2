export function validarFormulario(datosFormularioMedico) {
    //console.log("Estamos Validando...");
    //console.log(datosFormularioMedico);

    // REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre = document.getElementById("nombres");
    let etiquetaDocumento = document.getElementById("documento");
    let etiquetaRegistro = document.getElementById("registro");
    //let etiquetaEspecialidad = document.getElementById("especialidad");
    //let etiquetacorreo = document.getElementById("correo");
    //let etiquetasede = document.getElementById("Sede");
    //let etiquetaHorario = document.getElementById("Horario");
    //let etiquetadescripcion = document.getElementById("descripcion");
    //let etiquetafoto = document.getElementById("foto");
    //let etiquetaBoton = document.getElementById("botonenvio");



    // Validar 3 campos del formulario
    // nombre-documento-registro del medico

    let nombresMedicos = datosFormularioMedico.nombres
    let documentoMedicos = datosFormularioMedico.documento
    //let registroMedicos = datosFormularioMedico.registro

    // aAgregar todos los caminos posibles para validar el formulario
    if (nombresMedicos == "" && documentoMedicos == "" ) {
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Nombre y Documento son Obligatorios",
        });
    }else if(nombresMedicos == "" && documentoMedicos != "" ){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Nombre es Obligatorio",
        });
    }else if(nombresMedicos != "" && documentoMedicos == "" ){
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaDocumento.classList.add("is-invalid");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Documento es Obligatorio",
        });
    }else{
        alert("Subiendo info a BD")
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaDocumento.classList.remove("is-invalid");
    }

}