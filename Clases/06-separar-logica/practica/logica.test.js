import test from "node:test"
import assert from "node:assert/strict"
import { agregarTarea, listarTareas, eliminarTarea, completarTarea } from "../../../Asistente/logica.js"

test ("agregarTarea suma una tarea a la lista", () => {
    const lista = []
    const mensaje = agregarTarea (lista, "Tarea agregada")
    assert.equal(lista.length, 1)
    assert.equal(mensaje, "Se agrego una nueva tarea")
});

test ("lista vacia avisa", () => {
    const lista = []
    const mensaje = listarTareas (lista)
    assert.equal(mensaje, "No hay tareas para mostrar")
})

test ("eliminar tarea borra la tarea indicada", () => {    
   const lista = []
   const tarea1 = agregarTarea (lista, "Tarea 1")
   const tarea2 = agregarTarea (lista, "Tarea 2")
   const mensaje = eliminarTarea (lista, 1)
   assert.equal(lista.length, 1)
    assert.equal(mensaje, "Se elimino la tarea")
    assert.equal (lista[0].texto, "Tarea 2")
     })

     test ("completar tarea marca la tarea indicada como hecha", () => {
        const lista = []
        const tarea1 = agregarTarea (lista, "Tarea 1")
        const tarea2 = agregarTarea (lista, "Tarea 2")
        const mensaje = completarTarea (lista, 1)
        assert.equal(mensaje, "Se completo la tarea")
        assert.equal(lista[0].hecha, true)
    })

    test ("número invalido de tarea a completar", () => {
     const lista = []
     const tarea1 = agregarTarea (lista, "Tarea 1")
     const tarea2 = agregarTarea (lista, "Tarea 2")
     const mensaje = completarTarea (lista, 3)
     assert.equal(mensaje, "El número de tarea ingresado no es válido")    
    })

test ("Escribe las tareas en el formato correcto", () => {
const lista = []
const tarea1 = agregarTarea (lista, "Tarea 1")
const tarea2 = agregarTarea (lista, "Tarea 2")
const mensaje = listarTareas (lista)
assert.equal(mensaje, " 1. Tarea 1 [ ]\n 2. Tarea 2 [ ]")     

})

test ("Escribe las tareas en el formato correcto cuando hay tareas hechas", () => {
    const lista = []
    const tarea1 = agregarTarea (lista, "Tarea 1")
    const tarea2 = agregarTarea (lista, "Tarea 2")
    completarTarea (lista, 1)
    const mensaje = listarTareas (lista)
    assert.equal(mensaje, " 1. Tarea 1 [✓]\n 2. Tarea 2 [ ]")     
})