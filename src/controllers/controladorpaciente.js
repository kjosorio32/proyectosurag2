// IMPORTACIONES
import { capturarDatospacientes } from '../formularios/formulariopaciente.js';

// etiquetas que controlo:
// Var: "Variable Global"
// let: "Variable Local"

let etiquetaNombres = document.getElementById("nombres");
let etiquetaDocumentos = document.getElementById("documentos");

let etiquetaregimen = document.getElementById("regimen");
let etiquetagrupo = document.getElementById("grupo");

let etiquetacuota = document.getElementById("cuota");

let etiquetatelefono = document.getElementById("telefono");

let etiquetacorreo = document.getElementById("correo");


let etiquetaBotonpaciente = document.getElementById("botonenviopaciente");

// Detectar el evento del clic

etiquetaBotonpaciente.addEventListener("click", function (evento) {
  evento.preventDefault();
  capturarDatospacientes(etiquetaNombres,etiquetaDocumentos,etiquetaregimen,etiquetagrupo,etiquetacuota,etiquetatelefono,etiquetacorreo);
});
