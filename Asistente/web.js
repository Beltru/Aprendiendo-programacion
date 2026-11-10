import { listarTareas, agregarTarea, completarTarea, eliminarTarea } from "./logica.js"

const divlista = document.querySelector("#lista")
const input = document.querySelector("#tarea")
const botonAgregar = document.querySelector("#agregar")

function cargarDesdeNavegador () {
    const listaGuardada = localStorage.getItem("lista")
        if (listaGuardada === null) {
            return []
        } else { 
            return JSON.parse(listaGuardada)
        }
    }

const lista = cargarDesdeNavegador()

function guardarEnNavegador () {
    localStorage.setItem("lista", JSON.stringify(lista))
}

function dibujar () {
divlista.innerHTML = ""
lista.forEach((t, i) => {
    const div = document.createElement("div")
    div.className = "text-white p-2 border-b border-gray-700 flex justify-between items-center"
    div.textContent = (` ${i + 1}. ${t.texto} ${t.hecha ? '[✓]' : '[ ]'}`)
    divlista.appendChild(div)

    const botonEliminar = document.createElement("button")
    botonEliminar.className = "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
    botonEliminar.textContent = "Eliminar"
    div.appendChild(botonEliminar)

    botonEliminar.addEventListener("click", () => {
        const indice = i
        const mensaje = eliminarTarea(lista, indice + 1)
        guardarEnNavegador()
        dibujar()
        alert(mensaje)   
})

   const botonCompletar = document.createElement("button")
    botonCompletar.className = "bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2"
    botonCompletar.textContent = "Completar"
    div.appendChild(botonCompletar)

botonCompletar.addEventListener("click", () => {
        const indice = i
        const mensaje = completarTarea(lista, indice + 1) 
        guardarEnNavegador()
        dibujar()
        alert(mensaje)
    })

}  )}

dibujar()

botonAgregar.addEventListener("click", () => {
    const texto = input.value
    const mensaje = agregarTarea(lista, texto)
    guardarEnNavegador()
    dibujar()
    input.value = ""
    alert(mensaje)
}) 