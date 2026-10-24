# Revisión — Clase 6

**Fecha:** 2026-10-14 a 2026-10-23 (sesiones 8, 9 y 10)
**Estado:** cerrada. Pasos 6.A a 6.E hechos. **Doce tests en verde.** Faltan solo las
cuatro preguntas de cierre.

## Lo que entregó

`funciones.js` tiene ahora cuatro funciones de lógica, y **ninguna sabe que existe una
terminal**: no leen `process.argv`, no imprimen, no tocan archivos.

| Función | Devuelve |
|---|---|
| `agregarTarea(tareas, texto)` | el mensaje de confirmación |
| `completarTarea(tareas, numero)` | mensaje de éxito o de error (valida adentro) |
| `eliminarTarea(tareas, numero)` | mensaje de éxito o de error (valida adentro) |
| `listarTareas(tareas)` | el texto completo, armado con `map` + `join("\n")` |

`asistente.js` quedó como cáscara: las cuatro ramas tienen la misma forma — llamar,
guardar si hace falta, imprimir. Cero `fs`, cero `JSON`, cero `forEach`, cero validación.

Comportamiento verificado idéntico al de antes del refactor, incluido el caso sin archivo.

## El pedido que cambió el método (sesión 8)

Textual, a mitad de clase:

> *"No entiendo que estoy haciendo directamente. Hagamos una cosa, plantea toda la clase
> (...) porque estoy todo el tiempo preguntandote, vos corrigiendo y es medio robotico
> todo"*

La regla de "un paso por mensaje" evitaba que se bloqueara, pero **sin el panorama los
pasos se volvían movimientos a ciegas**. Se escribió `EXPLICACION.md` con el mapa
completo. Las dos reglas van juntas: **primero el mapa, después los pasos.**

## Lo que funcionó

- **La receta para la hoja en blanco**, usada cuatro veces con éxito: cáscara vacía →
  pegar la rama de `asistente.js` tal cual → lista numerada de qué borrar. Nunca
  "escribí la función".
- **Hacerlo imprimir lo que no entiende.** Dos veces se destrabó cambiando un `assert`
  por un `console.log` y mirando el valor. Vale más que explicar de nuevo.
- Las tablas (test → armar / llamar / comprobar) le permitieron escribir tres tests casi
  sin ayuda.

## Errores del camino (son el material de repaso)

1. **Rama duplicada.** Agregó una segunda `else if (... === eliminar)` al final en vez de
   reemplazar la vieja. La primera gana, la nueva era código muerto. Claude también se
   equivocó acá: dijo "no cambió nada" leyendo solo un rango de líneas, sin ver la rama
   nueva más abajo. **Leer el archivo completo antes de afirmar que no cambió.**
2. **`process.argv[3]` en vez de `n`** al llamar a `completarTarea`: la validación
   rechazaba todo porque `Number.isInteger("1")` es `false`. Lección de la Clase 3.
3. **`return` en el cuerpo del archivo** (`Illegal return statement`). Sirvió para
   explicar que `return` solo existe adentro de una función.
4. **`.join("\n")` pegado al `return` interno** del `map` en vez de después del `})`.
   Tres intentos. La distinción: el `return` de adentro devuelve **una línea**; el `join`
   se aplica a **la lista** que arma el `map`.
5. **Dos tests falsos positivos**, ambos del mismo tipo que el de la Clase 5:
   - `assert.equal(lista.length, 0)` sobre `listarTareas`, que no toca la lista.
   - `assert.equal(lista[1].completada, true.hecha)`: **`undefined === undefined` pasa.**
     Comparaba nada contra nada.
6. **`hecha` suelto del lado derecho** del assert, leído como variable inexistente. La
   distinción que costó: `hecha` después de un punto es el nombre de un dato; `hecha`
   sola es una variable.
7. **El valor de retorno descartado** apareció otra vez (el `map` sin `return`).

## Lo que hizo bien solo

- Contestó sin ayuda qué debía devolver `listarTareas` con la lista vacía.
- Escribió el test de "número inválido" completo y correcto a la primera.
- Agregó el tercer `assert` (que la tarea que quedó sea la correcta) con una sola pista.

## Lo que falta

- El test de `listarTareas` con dos tareas (`assert.ok` + `.includes`). **Es el único
  pedazo de la clase sin cubrir**, y justamente es la rama del `map`/`join`, la que más
  trabajo dio.
- Las cuatro preguntas de cierre del enunciado.

## Cierre del 6.E

El último test lo escribió **solo y mejor de lo pedido**: en vez de `assert.ok` con
`.includes`, comparó el **texto completo** con `assert.equal`, acertando el formato exacto
(el espacio inicial, la numeración, los corchetes y los `\n`). Decisión más estricta:
protege también el formato, con la contra de que un espacio de más lo rompe. Se le señaló
la contra; la decisión queda como suya.

**Total: doce tests en verde.** Solo quedan las cuatro preguntas del enunciado.
