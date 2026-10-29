import { listarTareas, agregarTarea, completarTarea, eliminarTarea } from "./logica.js"

const lista = [ { texto: "Tarea de prueba 1", hecha: false }, 
                { texto: "Tarea de prueba 2", hecha: true } ]
const divlista = document.querySelector("#lista")
const input = document.querySelector("#tarea")
const botonAgregar = document.querySelector("#agregar")

function dibujar () {
divlista.innerHTML = listarTareas(lista).replaceAll("\n", "<br>")
}

dibujar()

botonAgregar.addEventListener("click", () => {
    const texto = input.value
    agregarTarea(lista, texto)
    dibujar()
    input.value = ""
})