import test from "node:test"
import assert from "node:assert/strict"
import { agregarTarea } from "../../../Asistente/funciones.js"

test ("agregarTarea suma una tarea a la lista", () => {
    const lista = []
    const mensaje = agregarTarea (lista, "Tarea agregada")
    assert.equal(lista.length, 1)
    assert.equal(mensaje, "Se agrego una nueva tarea")
});