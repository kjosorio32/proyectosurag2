export async function consultarMedicos(){
    // Consumiendo APIS

    // 1. Conocer la Direccion del API o Servicio
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    // 2. Configurar a que voy al API, Configurando la Request o peticion, leer datos
    let peticion={
        method:"GET",
        //headers:{}  // Son Cabeceras o datos de control
    }

    // 3. Consumir traer los datos del API
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)
}