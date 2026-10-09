import fs from "node:fs";


export function guardar(tareas, archivo) {
  fs.writeFileSync(archivo, JSON.stringify(tareas), "utf-8")
}

export function cargarTareas (archivoTareas) {
const existe = fs.existsSync(archivoTareas)
if (existe === false) {
    fs.writeFileSync(archivoTareas, "[]", "utf-8")
    console.log("Se creo el archivo tareas.json")
}

    const texto = fs.readFileSync (archivoTareas, "utf-8")
    const tareas = JSON.parse(texto)
    return tareas
}


export function estaEnRango (numero, cantidad) {
    return numero >= 1 && numero <= cantidad && Number.isInteger(numero);
}
