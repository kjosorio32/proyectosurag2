// IMPORTACIONES
import { capturarDatos } from "../formularios/formulariomedicos.js";

// etiquetas que controlo: 
    // Var: "Variable Global"
    // let: "Variable Local"

let etiquetaNombre = document.getElementById("nombres");
let etiquetaDocumento = document.getElementById("documento");

let etiquetaEspecialidad = document.getElementById("especialidad");

let etiquetaRegistro = document.getElementById("registro");
let etiquetacorreo = document.getElementById("correo");

let etiquetasede = document.getElementById("Sede");
let etiquetaHorario = document.getElementById("Horario");

let etiquetadescripcion = document.getElementById("descripcion");
let etiquetafoto = document.getElementById("foto");

let etiquetaBoton = document.getElementById("botonenvio");

// Detectar el evento del clic

etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre, etiquetaDocumento, etiquetaEspecialidad, etiquetaRegistro,etiquetacorreo,etiquetasede,etiquetaHorario,etiquetadescripcion,etiquetafoto);

})