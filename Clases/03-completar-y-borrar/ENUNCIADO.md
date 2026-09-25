# Clase 3 — Completar y borrar

## Qué vas a aprender

A **identificar** una tarea entre muchas, a desconfiar de lo que escribe el usuario, y
a guardar más de un dato por tarea. De paso vas a chocarte con un problema que tiene
todo programa que ya está en uso: **los datos viejos no tienen la forma nueva**.

Antes de arrancar, leé las partes 1 y 2 de `Referencia/04-numeros-y-listas.md`.

---

### Paso 3.A — Borrar una tarea

    node Asistente/asistente.js borrar 2

Tiene que borrar la tarea que `listar` muestra como **2**, y guardar el cambio.

Pensá antes de escribir: `listar` numera desde 1, pero las listas cuentan desde 0.
La tarea que se ve como **2**, ¿en qué posición de la lista está?

**Listo cuando:** agregás tres tareas, borrás la del medio, y `listar` muestra las otras
dos renumeradas. Cerrás y volvés a abrir: la borrada no volvió.

---

### Paso 3.B — Desconfiar del usuario

Probá estas cuatro, tal cual:

    node Asistente/asistente.js borrar 99
    node Asistente/asistente.js borrar manteca
    node Asistente/asistente.js borrar 0
    node Asistente/asistente.js borrar

Mirá qué hace tu programa con cada una y anotalo. Después hacé que **ninguna** rompa ni
borre algo raro: que avise qué pasó y no toque el archivo.

**Listo cuando:** las cuatro contestan un mensaje claro y `tareas.json` queda intacto.

> Regla que ya viste en la Clase 1, ahora en serio: *un programa que solo funciona
> cuando el usuario hace todo bien no está terminado.*

---

### Paso 3.C — Que una tarea guarde dos datos

Hasta ahora cada tarea es un texto. Para poder completarlas necesitás guardar **dos**
cosas por tarea: el texto y si está hecha. Eso es un **objeto** (parte 3 de la Referencia).

Cambiá `agregar` para que guarde un objeto en vez de un texto, y `listar` para que
muestre el texto del objeto.

**Antes de correr nada, predecí qué va a pasar con las tareas que ya tenías guardadas**,
que son textos sueltos. Corré `listar` y comprobalo.

**Listo cuando:** agregás una tarea nueva, `listar` la muestra bien, y decidiste qué
hacer con las viejas (y me podés explicar por qué elegiste eso).

---

### Paso 3.D — Completar

    node Asistente/asistente.js completar 1

Marca la tarea 1 como hecha, y `listar` la muestra distinto:

    1. [x] pagar la luz
    2. [ ] comprar leche

Parte 4 de la Referencia para el formato. La validación del número es la misma del 3.B:
si la repetís tal cual en dos lugares, dejala así por ahora y anotalo — lo vamos a
arreglar en la Clase 4.

**Listo cuando:** completás una tarea, cerrás, volvés a abrir y sigue marcada.

---

## Preguntas para cuando entregues

1. ¿Por qué `borrar 2` no puede usar el 2 tal cual como posición?
2. ¿Qué pasa si sumás `1` a algo que vino de la terminal? ¿Por qué?
3. Cuando cambiaste el formato de las tareas, ¿qué pasó con las que ya estaban guardadas?
   ¿Qué hacen los programas de verdad cuando les pasa esto?
4. `completar` y `borrar` comparten casi toda la validación. ¿Qué problema trae eso?
