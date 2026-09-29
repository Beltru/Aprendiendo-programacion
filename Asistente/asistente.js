import { guardar, cargarTareas, estaEnRango } from "./funciones.js"

const agregar = "agregar"
const listar = "listar"
const eliminar = "eliminar"
const completar = "completar"
const n = Number(process.argv[3])


const tareas = cargarTareas()


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
        if (estaEnRango(n, tareas.length)) {
            tareas.splice(n - 1, 1)
            guardar(tareas)
            console.log("Se elimino la tarea")
        } else {
                console.log("El número de tarea ingresado no es válido")
         }

      } else if (process.argv[2] === completar) { 
        if (estaEnRango(n, tareas.length)) {
             tareas[n - 1].hecha = true
            guardar(tareas)
            console.log("Se completo la tarea")
        } else {
                console.log("El número de tarea ingresado no es válido")
         }

        } else {
            console.log("Los comandos actuales son: agregar, listar, eliminar y completar")
       }