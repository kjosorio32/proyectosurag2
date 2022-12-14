export function validarFormulariopaciente(datosFormularioPaciente) {
  //console.log("Estamos Validando...");
  //console.log(datosFormularioPaciente);

  // REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
  let etiquetaNombres = document.getElementById("nombre");
  let etiquetaDocumentos = document.getElementById("documentos");
  let etiquetaregimen = document.getElementById("regimen");
  let etiquetagrupo = document.getElementById("grupo");
  let etiquetacuota = document.getElementById("cuota");
  let etiquetatelefono = document.getElementById("telefono");
  let etiquetacorreo = document.getElementById("correo");
  let etiquetaBotonpaciente = document.getElementById("botonenviopaciente");

  // Validar los campos del formulario
  let nombrespaciente = datosFormularioPaciente.nombres;
  let documentopaciente = datosFormularioPaciente.documento;
  let regimenpaciente = datosFormularioPaciente.regimen;
  let grupopaciente = datosFormularioPaciente.grupo;
  let cuotapaciente = datosFormularioPaciente.cuota;
  let telefonopaciente = datosFormularioPaciente.telefono;
  let correopaciente = datosFormularioPaciente.correo;

  // aAgregar todos los caminos posibles para validar el formulario
}
