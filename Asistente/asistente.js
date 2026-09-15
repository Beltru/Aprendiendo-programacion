import fs from "node:fs";

const existe = fs.existsSync("Asistente/tareas.json")
const agregar = "agregar"
const listar = "listar"

if (existe === false) {
    fs.writeFileSync("Asistente/tareas.json", "[]", "utf-8")
    console.log("Se creo el archivo tareas.json")
}

const texto = fs.readFileSync ("Asistente/tareas.json", "utf-8")
const tareas = JSON.parse(texto)

if (process.argv[2] === agregar) {
     tareas.push(process.argv[3])
    fs.writeFileSync("Asistente/tareas.json", JSON.stringify(tareas), "utf-8")
   
    console.log("Se agrego una nueva tarea")
    
    } else if (process.argv[2] === listar) {
          tareas.forEach((t, i) => {
      console.log(`${i + 1}. ${t}`)
    })         
    } else {
            console.log("Los comandos actuales son: agregar y listar")
      }