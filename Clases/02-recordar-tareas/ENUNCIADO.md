# Clase 2 — Que tu asistente recuerde

## Qué vas a aprender

A guardar cosas en el disco para que sobrevivan entre corridas. Y que un archivo solo
entiende de texto, lo cual tiene una consecuencia que vas a descubrir en el paso 2.C.

## El plan ya lo diseñaste vos

Al final de la Clase 1 llegaste solo a esto:

1. **Al empezar:** abrir el cajón y cargar en la lista las tareas guardadas.
2. **En el medio:** hacer lo que pediste (`agregar` o `listar`).
3. **Antes de terminar:** guardar la lista entera en el cajón.

Esta clase es convertir eso en código. Primero practicás cada pieza suelta en
`practica/`, y recién al final lo llevás a `Asistente/`.

**Antes de arrancar:** leé las partes 1, 2 y 3 de `Referencia/03-archivos-y-json.md`.

---

### Paso 2.A — Escribir un archivo

En `Clases/02-recordar-tareas/practica/`, creá un archivo `escribir.js` que guarde
cualquier texto en un archivo.

**Listo cuando:** corrés tu programa, aparece el archivo nuevo, lo abrís en VS Code y
adentro está tu texto.

Después corrélo **dos veces seguidas** cambiando el texto entre medio. ¿Qué quedó en el
archivo: los dos textos o uno solo? Anotá por qué. (Te va a importar en el 2.D.)

---

### Paso 2.B — Leer un archivo

En la misma carpeta, creá `leer.js` que lea ese archivo y muestre lo que tiene.

**Listo cuando:** corrés `leer.js` y ves en la terminal el texto que había guardado
`escribir.js`. Son **dos programas distintos**: uno guarda, otro lee. Si funciona,
acabás de pasar información de una corrida a otra. Eso es lo que la Clase 1 no podía.

---

### Paso 2.C — Guardar una lista

En `practica/`, creá `lista.js`: armá una lista con dos o tres tareas escritas a mano,
y **guardala en un archivo tal cual**, con lo que aprendiste en 2.A.

**No leas la parte 4 de la Referencia todavía.** Probá, y fijate qué pasa.

Cuando te choques con el problema, contame qué pasó y por qué creés que pasa.
Recién ahí leés la parte 4 y lo arreglás.

**Listo cuando:**
- guardás la lista, abrís el archivo y ves las tareas adentro;
- en otro programa la leés, y **`length` te da la cantidad de tareas**, no otro número.

---

### Paso 2.D — Llevarlo al asistente

Ahora sí, en `Asistente/asistente.js`, implementá tu plan de tres pasos.

- `agregar "algo"` guarda la tarea **sin borrar las anteriores**.
- `listar` muestra las tareas **numeradas, empezando en 1** (el pendiente de la Clase 1).
  Ojo: las listas cuentan desde 0, las personas desde 1.

**Listo cuando:**

    node Asistente/asistente.js agregar "pagar la luz"
    node Asistente/asistente.js agregar "comprar leche"
    node Asistente/asistente.js listar

te muestra las dos, numeradas. Y si cerrás VS Code, lo abrís mañana y corrés `listar`,
siguen ahí.

---

### Paso 2.E — La primera vez

Borrá el archivo de tareas a mano y corré `listar`.

Tu programa tiene que funcionar también la primera vez que alguien lo usa, cuando el
cajón todavía no existe. **Listo cuando:** sin archivo, `listar` no explota, y
`agregar` crea el archivo solo.

---

## Preguntas para cuando entregues

1. ¿Por qué no se puede guardar una lista directo en un archivo?
2. En 2.D, ¿qué pasaría si guardaras en el archivo solo la tarea nueva, en vez de la
   lista entera?
3. ¿`listar` necesita guardar en el cajón antes de terminar? ¿Por qué sí o por qué no?
4. El archivo de tareas, ¿debería subirse a GitHub? Pensá qué va a tener adentro cuando
   uses el asistente de verdad.

## Si te trabás

La pregunta de siempre: *¿no sabés qué querés que pase, o no sabés cómo se escribe?*
Lo primero, pensalo con Claude. Lo segundo, `Referencia/03-archivos-y-json.md`.
