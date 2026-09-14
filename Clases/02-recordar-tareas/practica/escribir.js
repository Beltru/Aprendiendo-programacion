import fs from "node:fs";

const contenido = fs.readFileSync("Clases/02-recordar-tareas/practica/lista.js", "utf8")
const agregar = "agregar"
const listar = "listar"

if (process.argv[2] === agregar) {
    fs.writeFileSync("Clases/02-recordar-tareas/practica/lista.js", process.argv[3], "utf-8")
    console.log("Se agrego una nueva tarea") }

    else if (process.argv[2] === listar) {

                console.log(`${contenido}`)    }