# Revisión — Clase 4

**Fecha:** 2026-09-28 (sesión 5)
**Estado:** cerrada. Pasos 4.A a 4.E hechos, cinco ejercicios hechos, cuatro preguntas bien.

## Lo que entregó

`Asistente/asistente.js` (48 líneas, solo comandos) + `Asistente/funciones.js` con
`guardar`, `cargarTareas` y `estaEnRango`, exportadas e importadas. El programa hace
exactamente lo mismo que antes del refactor. Verificado después de cada paso, incluido
el caso sin `tareas.json`.

## El momento más importante de la sesión

A mitad del 4.C dijo, textual:

> "No estoy entendiendo las functions sinceramente, no las comprendo, no entiendo la
> logica detras de las mismas, estoy adivinando que hacer, mucho me lo resuelve el
> autocompletar."

**Esa frase es el motivo de existir de este repo.** Lo que se hizo:

1. **Se frenó el refactor** del asistente (demasiado grande para aprender el concepto).
2. **Se le pidió apagar el autocompletar** (Copilot) para este repo.
3. Se escribió `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`: cinco ejercicios de tres
   líneas, sin archivos ni comandos, solo funciones. Los hizo todos.
4. Recién después se volvió al asistente.

**Funcionó.** Después de los ejercicios pudo escribir y usar `estaEnRango` en el
asistente. Repetir esta receta cuando un concepto no entre: **bajar a `practica/` con
ejercicios mínimos de otro dominio, y volver al proyecto real después.**

## Lo que descubrió en los ejercicios

- **Ej 1:** escribió `saludar` sin paréntesis tres veces y solo salió "Fin". Descubrió
  solo que **los paréntesis son el botón de encendido**. Después probó
  `console.log(saludar)` por su cuenta para ver la diferencia — buena iniciativa.
- **Ej 3:** predijo bien 8, 20 y 16, y acertó que `doble(7)` sola no imprime nada.
  Se conectó con el `JSON.stringify` suelto de la Clase 2.
- **Ej 5:** escribió `numero < maximo` en vez de `<=`. **Error de borde.** Se le mostró
  que con 3 tareas eso haría fallar `eliminar 3`. Lo arregló, y en el asistente el caso
  del borde funcionó a la primera.
- **Ej 5 (scope):** el `ReferenceError` del `const algo` fue el ejercicio, no un fallo.

## Los tres errores que repitió, y que son el mapa de lo que falta

1. **Nombres de parámetros en la llamada:** escribió `estaEnRango(numero, cantidad)` en
   vez de pasar `n` y `tareas.length`. Es el scope del Ej 5 aplicado. Se destrabó con la
   analogía del Ej 2: `saludarA(nombre)` ❌ vs `saludarA("Juan")` ✅.
2. **Valor de retorno descartado:** escribió `cargarTareas()` sola, sin `const tareas =`.
   Literalmente el `doble(7)` del Ej 3. **Le pasó por tercera vez en el repo** (antes con
   `JSON.stringify` en la Clase 2 y con `JSON.stringify(lista)` suelto).
3. **Anidado:** metió el `readFileSync` y el `return` **adentro** del
   `if (existe === false)`, así que solo cargaba cuando el archivo no existía.

## Regresión que atrapó la regla de la clase

En el 4.B movió la lectura del archivo **arriba** del `if` que lo crea, reintroduciendo
el bug del paso 2.E. **En su máquina no se veía** porque su `tareas.json` ya existe: se
detectó probando en una copia limpia del scratchpad. Lección que se le dio: *un refactor
puede romper algo sin error visible en el caso que estás probando.*

## Nombres: tercera conversación sobre lo mismo

Llamó `lista` a la ruta del archivo, y después `n1` / `tareas1` a los parámetros para
evitar el choque con las globales. Se le dio la regla: **un buen nombre contesta "¿qué es
esta cosa?"**, y un `1` al final es señal de que el nombre original era malo. Terminó en
`archivoTareas`, `numero` y `cantidad`. Bien.

## Preguntas de cierre

Las cuatro bien, con repreguntas. En la 1 respondió circularmente ("porque tiene un
return") y hubo que llevarlo al *por qué*: acción vs respuesta. En la 3 repitió el
beneficio de "un solo lugar" y hubo que insistir para que llegara a **intención vs
mecanismo**. En la 4 razonó solo que `asistente.js` es el que cuenta la historia.

## Pendientes

- La palabra `"agregar"` sigue estando en la constante **y** a mano en el mensaje del
  `else`. Fuente única de verdad, sin resolver.
- `cargarTareas` mezcla hacer (crear el archivo, imprimir) con devolver. Se le señaló la
  contra; decidió a propósito dejar el `console.log` adentro y explicó bien por qué.
