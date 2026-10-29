export function estaEnRango (numero, cantidad) {
    return numero >= 1 && numero <= cantidad && Number.isInteger(numero);
}

export function agregarTarea(tareas, texto) { 
    if (texto === "" || texto === undefined) {
        return("No se puede agregar una tarea vacía")
    } else {
        tareas.push({ texto: texto, hecha: false })
        return("Se agrego una nueva tarea")
    }
}
 

export function completarTarea (tareas, numero) {
if (estaEnRango(numero, tareas.length)) {
             tareas[numero - 1].hecha = true
            return("Se completo la tarea")
} else {
    return("El número de tarea ingresado no es válido")
} }

export function eliminarTarea (tareas, numero) {
    if (estaEnRango(numero, tareas.length)) {
                tareas.splice(numero - 1, 1)
                return("Se elimino la tarea")
            } else {
                    return("El número de tarea ingresado no es válido")
             }
}

export function listarTareas (tareas) {
     if (tareas.length === 0) {
        return("No hay tareas para mostrar")
        } else  {
            return tareas.map((t, i) => {
                return(` ${i + 1}. ${t.texto} ${t.hecha ? '[✓]' : '[ ]'}`)
            }).join("\n")
         }
 }