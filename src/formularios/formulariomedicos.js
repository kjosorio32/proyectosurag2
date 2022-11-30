
// Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad, etiquetaRegistro,etiquetacorreo,etiquetasede,etiquetaHorario,etiquetadescripcion,etiquetafoto){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico = etiquetaEspecialidad.value;
    let registroMedico = etiquetaRegistro.value;
    let correoMedico = etiquetacorreo.value;
    let sedeMedico = etiquetasede.value;
    let horarioMedico = etiquetaHorario.value;
    let descripcionMedico = etiquetadescripcion.value;
    let fotoMedico = etiquetafoto.value;


    console.log(nombresMedico)
    console.log(documentoMedico)
    console.log(especialidadMedico);
    console.log(registroMedico);
    console.log(correoMedico);
    console.log(sedeMedico);
    console.log(horarioMedico);
    console.log(descripcionMedico);
    console.log(fotoMedico);

}
