import fs from "node:fs";

let lista = ["hola", "chau", "vamos"]


    fs.writeFileSync("Clases/02-recordar-tareas/practica/lista.txt", JSON.stringify(lista), "utf-8")
    const texto = fs.readFileSync("Clases/02-recordar-tareas/practica/lista.txt", "utf-8")
    lista = JSON.parse(texto)

    console.log(lista.length) 
    console.log(texto.length) 