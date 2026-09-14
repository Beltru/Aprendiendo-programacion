# Revisión — Clase 1 (parcial)

**Fecha:** 2026-09-06/07 (sesión 2)
**Estado:** pasos 1.A, 1.B y 1.C.1–1.C.2 **entregados y aprobados**. Falta **1.C.3**.

## Lo que entregó

```js
const agregar = "agregar"
const listar = "listar"

if (process.argv[2] === agregar) {
    console.log("Se agrego una nueva tarea")
} else if (process.argv[2] === listar) {
    console.log("Se listaron las tareas")
} else {
    console.log("Los comandos actuales son: agregar y listar")
}
```

Los cuatro casos verificados en consola: `agregar`, `listar`, una palabra desconocida,
y sin argumentos. Los cuatro contestan algo con sentido.

## Lo que está bien

- **La cadena `if / else if / else` está correctamente armada.** Encontró solo el `else`
  sin condición después de que se le señaló el agujero.
- **El mensaje del `else` enumera los comandos disponibles.** Llegó ahí después de que
  se le preguntara "¿qué necesita saber esa persona para poder seguir?". Pasó de
  *"No se reconoce el comando"* a algo accionable.
- **Usó constantes en vez de comparar contra texto suelto.** Lo hizo por costumbre, no
  por criterio — pero la decisión es buena y ahora conoce el motivo real.

## Errores que cometió y cómo salió de cada uno

Vale registrarlos: son el material de repaso.

1. **`package.json` con `"type"` duplicado.** Agregó `"module"` sin borrar el
   `"commonjs"` que puso `npm init -y`. En JSON gana la última clave, así que el
   proyecto seguía en CommonJS aunque pareciera arreglado.
   → *Lección: lo peor no es fallar, es hacer silenciosamente lo que no querías.*
2. **Archivo vacío / sin guardar.** Corría `node` y no veía nada. No sabía que la
   salida aparece en la misma terminal.
3. **`process.argv[2] = "Manteca"`.** El error conceptual más importante de la sesión:
   creyó que había que *darle* un valor a `argv[2]`, cuando ya viene lleno con lo que
   tipeó el usuario. Confusión de dirección del `=`.
4. **Llave huérfana** que metía el `else` adentro del bloque del `if`
   (`Declaration or statement expected`). Se resolvió contando llaves y formateando.
5. **Rama propia para `manteca`.** Interpretó un ejemplo de "palabra equivocada" como
   un comando nuevo. → *Lección: el `else` existe justamente para no enumerar lo infinito.*

## Lo que quedó abierto

- **1.C.3** — que `agregar` guarde el texto y `listar` lo muestre numerado.
  El próximo paso arranca con una sola pregunta: *¿en qué posición de `process.argv`
  cae el texto `"comprar leche"`?*
- **La pregunta 2 del enunciado** (si la tarea sobrevive entre corridas) sigue sin
  contestarse, y así debe seguir hasta que él la descubra corriendo el programa.
- **Duplicación pendiente de ver:** la palabra `"agregar"` está en la constante *y*
  escrita a mano dentro del mensaje del `else`. Se le señaló y se le dijo
  explícitamente que no lo tocara todavía. Retomarlo cuando se hable de fuente única
  de verdad.

---

## Cierre — sesión 3 (2026-09-14)

**Clase 1 cerrada.**

- En 1.C.3 usó `tareas.push(process.argv[3])` y, sin que se le pidiera,
  `${tareas.length}` en un template string. Bien escrito.
- Predijo que el texto caía en la posición **4** (contó desde 1). Lo verificó
  imprimiendo `process.argv` y corrigió a 3. Descubrió solo que **sin comillas la tarea
  se parte en dos**.
- **Contestó la pregunta 2 del enunciado sin que se la dieran**: al ver
  "Se listaron 0 tareas", siguió tres pistas y dijo *"cuando vuelvo a correr el programa
  no recuerda lo que había la vez anterior"*.
- **Diseñó solo la persistencia**, en palabras, con la analogía escritorio/cajón:
  al empezar cargar lo guardado, en el medio hacer lo pedido, antes de terminar guardar
  la lista entera. Primero olvidó el "cargar al empezar"; lo encontró simulando el caso
  de "pagar la luz" guardado ayer.
- Numerar `listar` se pasó a la Clase 2 (sin persistencia no tenía sentido).
