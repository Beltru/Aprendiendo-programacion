import fs from "node:fs";

const archivoTareas = "Asistente/tareas.json"
const existe = fs.existsSync(archivoTareas)
const agregar = "agregar"
const listar = "listar"
const eliminar = "eliminar"
const completar = "completar"
const n = Number(process.argv[3])


function guardar(tareas) {
  fs.writeFileSync(archivoTareas, JSON.stringify(tareas), "utf-8")
}

function parametrosValidos() {
    

if (existe === false) {
    fs.writeFileSync(archivoTareas, "[]", "utf-8")
    console.log("Se creo el archivo tareas.json")
}

const texto = fs.readFileSync (archivoTareas, "utf-8")
const tareas = JSON.parse(texto)

if (process.argv[2] === agregar) {
     tareas.push({ texto: process.argv[3], hecha: false })
    guardar(tareas)
   
    console.log("Se agrego una nueva tarea")
    
    } 
    else if (process.argv[2] === listar) {
      if (tareas.length === 0) {
        console.log("No hay tareas para mostrar")
        } else  {
            tareas.forEach((t, i) => {
                console.log(` ${i + 1}. ${t.texto} ${t.hecha ? '[✓]' : '[ ]'}`)
            })
         }
      }  else if (process.argv[2] === eliminar) { 
        if (n >= 1 && n <= tareas.length && Number.isInteger(n)) {
            tareas.splice(n - 1, 1)
            guardar(tareas)
            console.log("Se elimino la tarea")
        } else {
                console.log("El número de tarea ingresado no es válido")
         }

      } else if (process.argv[2] === completar) { 
        if (n >= 1 && n <= tareas.length && Number.isInteger(n)) {
             tareas[n - 1].hecha = true
            guardar(tareas)
            console.log("Se completo la tarea")
        } else {
                console.log("El número de tarea ingresado no es válido")
         }

        } else {
            console.log("Los comandos actuales son: agregar, listar, eliminar y completar")
       }