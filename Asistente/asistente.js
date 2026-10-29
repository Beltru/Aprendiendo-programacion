import {  agregarTarea, completarTarea, eliminarTarea, listarTareas } from "./logica.js"
import { guardar, cargarTareas } from "./almacenamiento.js"

const agregar = "agregar"
const listar = "listar"
const eliminar = "eliminar"
const completar = "completar"
const n = Number(process.argv[3])

const archivoTareas = "Asistente/tareas.json"

const tareas = cargarTareas(archivoTareas)


if (process.argv[2] === agregar) {
    const mensaje = agregarTarea(tareas, process.argv[3])
    guardar(tareas, archivoTareas)
   
    console.log(mensaje)
    
    } 
    else if (process.argv[2] === listar) {
      const mensaje = listarTareas (tareas)
      console.log(mensaje)
      
      } else if (process.argv[2] === completar) { 
       const mensaje = completarTarea(tareas, n)
    guardar(tareas, archivoTareas)
   
    console.log(mensaje)
    
        }   else if (process.argv[2] === eliminar) { 
        const mensaje = eliminarTarea(tareas, n)
    guardar(tareas, archivoTareas)
   
    console.log(mensaje)
          }
         else {
            console.log("Los comandos actuales son: agregar, listar, eliminar y completar")
       }