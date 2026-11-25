# Clase 9, el panorama completo

> El mapa de la clase. Leelo entero antes de los pasos. Esta clase es más larga que la
> 8 y probablemente lleve dos o tres sesiones.

---

## 1. Qué vamos a hacer

Hoy tu asistente guarda tareas sueltas, sin orden y sin fecha. Al terminar la clase:

    node Asistente/asistente.js agregar "pagar la luz" 2026-12-01
    node Asistente/asistente.js editar 2 "pagar la luz y el gas"
    node Asistente/asistente.js pendientes     ← solo las que no hiciste
    node Asistente/asistente.js ordenar        ← por fecha, la más cercana primero
    node Asistente/asistente.js vencidas       ← las que ya se te pasaron

Y al final, **la prioridad la agregás vos solo**, sin pasos. Es lo mismo que la fecha con
otro dato, y es la prueba de que lo entendiste.

## 2. Las tres herramientas nuevas

| Herramienta | Qué hace | Para qué la usás |
|---|---|---|
| `filter` | Devuelve una lista **nueva** solo con los elementos que cumplen una condición | `pendientes`, `vencidas` |
| `sort` | Ordena la lista **en el lugar**: cambia la lista original | `ordenar` |
| Fechas | Guardar y comparar cuándo vence algo | todo lo anterior |

`filter` se parece mucho a `map`, que ya usaste: los dos reciben una función y recorren la
lista. La diferencia es qué devuelve esa función. En `map`, el valor nuevo. En `filter`,
`true` o `false`: si el elemento se queda o no.

## 3. Por qué las fechas tienen mala fama

JavaScript tiene un tipo especial para fechas, `Date`. Parece la herramienta obvia, y
trae dos trampas que vas a ver con tus propios ojos en el paso 9.A:

1. **JSON no sabe guardar fechas.** Si guardás un `Date` en `tareas.json` y lo volvés a
   cargar, no te vuelve una fecha: te vuelve **un texto**.
2. **La zona horaria.** `new Date("2026-12-01")` en Argentina te puede dar **30 de
   noviembre**. No es un error: JS interpreta esa fecha en hora de Londres, y en Buenos
   Aires todavía es el día anterior.

Por eso vamos a hacer lo que hacen muchos programas de verdad: **guardar la fecha como
texto, en formato `AAAA-MM-DD`** (`"2026-12-01"`). Ese formato tiene una ventaja enorme:

> Si dos fechas están escritas así, **compararlas como texto da el mismo resultado que
> compararlas como fechas.** `"2026-11-30" < "2026-12-01"` es `true`.

Funciona porque el año va primero, después el mes, después el día, y todos con la misma
cantidad de dígitos. Si escribís `"2026-2-1"` en vez de `"2026-02-01"`, se rompe. Eso
también lo vas a probar.

## 4. La trampa grande de esta clase: los números

Hoy `completar 2` significa "la segunda tarea de la lista". Funciona porque `listar` muestra
las tareas en el mismo orden en que están guardadas.

Pensá qué pasa con `pendientes`. Si tenés tres tareas y la primera está hecha, `pendientes`
muestra dos. **¿Qué número le ponés a cada una?** Si le ponés 1 y 2, y escribís
`completar 1`... ¿cuál se completa?

No te doy la respuesta: te vas a chocar con este problema en el 9.D, a propósito. Lo que
sí te adelanto es la regla que tiene que cumplirse:

> **El número que ve el usuario tiene que ser el mismo que entiende `completar`.**

## 5. Una idea vieja que vuelve: `hoy` como parámetro

Para saber qué tareas están vencidas hay que saber qué día es hoy. Podrías preguntarlo
adentro de la función de lógica. Pero acordate de la Clase 5: **lo difícil de testear está
pegado a algo de afuera.** "Qué día es hoy" es de afuera: cambia cada día, y un test que
hoy pasa mañana puede fallar.

La salida es la de siempre: la cáscara averigua la fecha de hoy y **se la pasa** a la
lógica. La lógica queda pura, y en el test le pasás el día que quieras.

## 6. Cómo queda el proyecto

No hay archivos nuevos en `Asistente/`. Crece lo que ya existe:

    logica.js       ← agregarTarea con fecha, y funciones nuevas: editar, pendientes,
                      ordenar, vencidas. Todas puras, todas con test.
    asistente.js    ← comandos nuevos. Tu lista `comandos` del 8.B se agranda, y el
                      mensaje de ayuda se actualiza solo. Ahí se paga la Clase 8.
    tareas.json     ← las tareas viejas no tienen fecha. Tienen que seguir andando.

Lo último no es un detalle: es la **migración de datos** de la Clase 3. Las tareas viejas
no tienen el dato nuevo, y el programa no se puede romper por eso.

La web queda como está. Cuando la lógica esté terminada, sumarle las fechas a la página
es una clase corta.
