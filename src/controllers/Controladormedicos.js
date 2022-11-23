// etiquetas que controlo: 
    // Var: "Variable Global"
    // let: "Variable Local"

let etiquetaNombre = document.getElementById("nombres");
let etiquetaDocumento = document.getElementById("documento");

let etiquetaBoton = document.getElementById("botonenvio");

// Detectar el evento del clic
etiquetaBoton.addEventListener("click",function(evento){
    evento.preventDefault()
    /*Swal.fire("Exito", "El especialista ha sido registrado", "success");*/

    // Recibiendo los datos del formulario
    let nombresMedico=etiquetaNombre.value;
    console.log(nombresMedico);

    let documentoMedico = etiquetaDocumento.value;
    console.log(documentoMedico);

})