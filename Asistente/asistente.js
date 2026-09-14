const tareas = []
const agregar = "agregar"
const listar = "listar"

if (process.argv[2] === agregar) {
    tareas.push(process.argv[3])
    console.log("Se agrego una nueva tarea")
    
    } else if (process.argv[2] === listar) {
                console.log(`Se listaron ${tareas.length} tareas`)     
    } else {
            console.log("Los comandos actuales son: agregar y listar")
      }