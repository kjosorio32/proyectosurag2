import { validarFormulariopaciente } from "../formularios/validacionFormularioPaciente.js";

// Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatospacientes(
  etiquetanombrepaciente,
  etiquetaDocumentos,
  etiquetaregimen,
  etiquetagrupo,
  etiquetacuota,
  etiquetatelefono,
  etiquetacorreo
  ){

  let nombrepaciente = etiquetanombrepaciente.value;
  let documentopaciente = etiquetaDocumentos.value;
  let regimenpaciente = etiquetaregimen.value;
  let grupopaciente = etiquetagrupo.value;
  let cuotapaciente = etiquetacuota.value;
  let telefonopaciente = etiquetatelefono.value;
  let correopaciente = etiquetacorreo.value;

  // Debemos almacenar todos los valores del formulario en una sola variable, para esto debemos de crear un OBJETO
  // OBJETO: almacenar varios datos en 1 solo espacio de memoria

  let datosFormularioPaciente = {
    nombrepaciente: nombrepaciente,
    documentos: documentopaciente,
    regimen: regimenpaciente,
    grupo: grupopaciente,
    cuota: cuotapaciente,
    telefono: telefonopaciente,
    correo: correopaciente,
  }

  //console.log(datosFormularioPaciente);

  validarFormulariopaciente(datosFormularioPaciente);

}
