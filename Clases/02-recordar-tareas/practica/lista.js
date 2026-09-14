const lista = ["hola", "chau", "vamos"]
const agregar = "agregar"
const listar = "listar"

if (process.argv[2] === agregar) {
    fs.writeFileSync("Clases/02-recordar-tareas/practica/lista.txt", lista, "utf-8")
    console.log("Se agrego una nueva tarea") }