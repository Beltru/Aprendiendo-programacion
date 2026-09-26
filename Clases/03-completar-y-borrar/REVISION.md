# Revisión — Clase 3

**Fecha:** 2026-09-25 (sesión 4)
**Estado:** cerrada. Pasos 3.A a 3.D hechos y las cuatro preguntas contestadas bien.

## Lo que entregó

`Asistente/asistente.js` con cuatro comandos: `agregar`, `listar`, `eliminar`,
`completar`. Tareas guardadas como objetos `{ texto, hecha }`, validación del número en
`eliminar` y `completar`, y `listar` marcando con ✓ / ✗ (eligió eso en vez de `[x]`/`[ ]`).

## Lo que le costó de verdad: anidar

**Tropezó tres veces con lo mismo en la misma sesión**: poner la condición del detalle
al lado de la del comando en vez de adentro.

1. En `listar` puso `else if (comando === listar && tareas.length === 0)` con el
   `forEach` adentro del caso "lista vacía". Con tareas, caía en el `else` final.
2. En `eliminar` puso la validación como rama hermana → el programa decía
   "Se elimino la tarea" con `eliminar 99` y escribía el archivo igual.
3. Al corregir, **intercambió los niveles** (afuera el número, adentro el comando) y
   después **los cuerpos** (borraba cuando era inválido). Hizo falta mapearle línea por
   línea qué condición y qué cuerpo iba en cada lugar.

Dijo, textual: *"No entiendo, es algo que nunca me explicaste"* — **y tenía razón**.
Se agregó la sección "Decidir adentro de una decisión (anidar)" a
`Referencia/01-js-lo-minimo.md`, con la comparación explícita contra `&&`.

Lo que sí funcionó: leer la estructura en voz alta como una frase
(*"si el comando es eliminar... y si el número es válido... entonces borro"*).

## El hallazgo bueno de la clase: NaN

Escribió la validación en negativo (`n < 1 || n > tareas.length`) y **dejaba pasar
`manteca` y el caso sin número, borrando la primera tarea en silencio**: toda
comparación con `NaN` da `false`, así que el `||` daba `false` y caía en el `else`.

Al reescribirla en positivo (`n >= 1 && n <= tareas.length && Number.isInteger(n)`) el
bug desapareció solo. Quedó como lección: **escribir condiciones en positivo no es
estético — preguntar "¿es inválido?" obliga a adivinar todas las formas de estar mal.**

## Otros errores del camino

- `})` mal cerrado en el `forEach`: cerró la llave y se olvidó el paréntesis. Regla que
  se le dio: último que abre, primero que cierra.
- `else if (cond) if (cond) {` — sin llave después de la condición de afuera.
- Pegó el ejemplo **JavaScript** de la Referencia dentro de `tareas.json`
  (`const tareas = [...]`). Confusión código vs datos, hermana de la de terminal vs
  archivo. Se le explicaron las reglas de JSON (comillas dobles, claves entre comillas).
- `[object Object]` al mostrar el objeto entero en un template string.
- Llamó `n` al contador del `forEach`, tapando el `const n` global. Se le pidió dos veces
  que lo volviera a `i`.

## Lo que hizo solo y bien

- `tareas[n - 1].hecha = true` para `completar`: lo escribió sin ayuda.
- Dedujo solo que el número del usuario es la posición menos 1.
- Observación de diseño propia: *"para definir que es un numero el usuario tiene que
  poner un numero obligatoriamente en una posicion especifica"* — entendió que un CLI
  define un contrato.
- Las cuatro preguntas de cierre, todas bien, incluida la de migración de datos.

## Pendiente que abre la Clase 4

La validación está **duplicada palabra por palabra** en `eliminar` y `completar`
(líneas 33 y 42). Él mismo dijo el problema: *"si cambio la validación tengo que
cambiarla en dos lugares"*. Ese es el gancho a funciones.
