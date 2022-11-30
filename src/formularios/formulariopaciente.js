import { validarFormulariopaciente } from "../formularios/validacionFormularioPaciente";

// Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatospacientes(
  etiquetaNombres,
  etiquetaDocumentos,
  etiquetaregimen,
  etiquetagrupo,
  etiquetacuota,
  etiquetatelefono,
  etiquetacorreo
) {
  let nombrespaciente = etiquetaNombres.value;
  let documentopaciente = etiquetaDocumentos.value;
  let regimenpaciente = etiquetaregimen.value;
  let grupopaciente = etiquetagrupo.value;
  let cuotapaciente = etiquetacuota.value;
  let telefonopaciente = etiquetatelefono.value;
  let correopaciente = etiquetacorreo.value;

  // Debemos almacenar todos los valores del formulario en una sola variable, para esto debemos de crear un OBJETO
  // OBJETO: almacenar varios datos en 1 solo espacio de memoria

  let datosFormularioPaciente = {
    nombres: nombrespaciente,
    documentos: documentopaciente,
    regimen: regimenpaciente,
    grupo: grupopaciente,
    cuota: cuotapaciente,
    telefono: telefonopaciente,
    correo: correopaciente,
  };

  console.log(datosFormularioPaciente);

  // console.log(nombrespaciente);
  // console.log(documentopaciente);
  // console.log(regimenpaciente);
  // console.log(grupopaciente);
  // console.log(cuotapaciente);
  // console.log(telefonopaciente);
  // console.log(correopaciente);
}
