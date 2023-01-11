export function validarFormulariopaciente(datosFormularioPaciente) {
  //console.log("Estamos Validando...");
  //console.log(datosFormularioPaciente);

  // REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
  let etiquetanombrepaciente = document.getElementById("nombrepaciente");
  let etiquetaDocumentos = document.getElementById("documentos");
  //let etiquetaregimen = document.getElementById("regimen");
  //let etiquetagrupo = document.getElementById("grupo");
  //let etiquetacuota = document.getElementById("cuota");
  //let etiquetatelefono = document.getElementById("telefono");
  //let etiquetacorreo = document.getElementById("correo");
  //let etiquetaBotonpaciente = document.getElementById("botonenviopaciente");

  // Validar los campos del formulario
  let nombrespaciente = datosFormularioPaciente.nombrepaciente;
  let documentopaciente = datosFormularioPaciente.documentos;
  //let regimenpaciente = datosFormularioPaciente.regimen;
  //let grupopaciente = datosFormularioPaciente.grupo;
  //let cuotapaciente = datosFormularioPaciente.cuota;
  //let telefonopaciente = datosFormularioPaciente.telefono;
  //let correopaciente = datosFormularioPaciente.correo;

  // aAgregar todos los caminos posibles para validar el formulario
    if (nombrespaciente == "" && documentopaciente == "" ) {
      etiquetanombrepaciente.classList.add("is-invalid")
      etiquetaDocumentos.classList.add("is-invalid")
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Nombre y Documento son Obligatorios",
      });
  }else if(nombrespaciente == "" && documentopaciente != "" ){
    etiquetanombrepaciente.classList.add("is-invalid")
    etiquetaDocumentos.classList.remove("is-invalid")
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Nombre es Obligatorio",
      });
  }else if(nombrespaciente != "" && documentopaciente == "" ){
    etiquetanombrepaciente.classList.remove("is-invalid");
    etiquetaDocumentos.classList.add("is-invalid");
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Documento es Obligatorio",
      });
  }else{
      alert("Subiendo info a BD")
      etiquetanombrepaciente.classList.remove("is-invalid");
      etiquetaDocumentos.classList.remove("is-invalid");
  }



}
