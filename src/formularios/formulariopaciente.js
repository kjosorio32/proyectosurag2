// Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatospacientes(etiquetaNombres,etiquetaDocumentos,etiquetaregimen,etiquetagrupo,etiquetacuota,etiquetatelefono,etiquetacorreo) {
  
  let nombrespaciente = etiquetaNombres.value;
  let documentopaciente = etiquetaDocumentos.value;
  let regimenpaciente = etiquetaregimen.value;
  let grupopaciente = etiquetagrupo.value;
  let cuotapaciente = etiquetacuota.value;
  let telefonopaciente = etiquetatelefono.value;
  let correopaciente = etiquetacorreo.value;

  console.log(nombrespaciente);
  console.log(documentopaciente);
  console.log(regimenpaciente);
  console.log(grupopaciente);
  console.log(cuotapaciente);
  console.log(telefonopaciente);
  console.log(correopaciente);
}
