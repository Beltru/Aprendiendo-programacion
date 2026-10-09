 import test from "node:test"
 import assert from "node:assert/strict"
 import {guardar, cargarTareas} from '../../../Asistente/funciones.js';

 const archivoTareasPrueba = "Clases/05-tests/practica/tareas-de-prueba.json"
 const tareasPrueba = [
     { texto: "Tarea de prueba 1", hecha: false },
     { texto: "Tarea de prueba 2", hecha: true },
     { texto: "Tarea de prueba 3", hecha: false }
   ];

  test("Guardar y cargar devuelven la misma lista", () => {
         guardar(tareasPrueba, archivoTareasPrueba)
         const cargado = cargarTareas(archivoTareasPrueba)
         assert.deepEqual (cargado, tareasPrueba)
     });