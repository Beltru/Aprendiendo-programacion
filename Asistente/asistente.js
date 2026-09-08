const tareas = []
const agregar = "agregar"
const listar = "listar"

if (process.argv[2] === agregar) {
    console.log("Se agrego una nueva tarea")
    
    } else if (process.argv[2] === listar) {
            console.log("Se listaron las tareas")
    } else {
            console.log("Los comandos actuales son: agregar y listar")
      }