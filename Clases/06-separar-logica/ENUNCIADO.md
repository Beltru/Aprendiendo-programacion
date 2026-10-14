# Clase 6 — Separar la lógica de la entrada y la salida

## Qué vas a aprender

A que tus cuatro comandos se puedan testear. Hoy no se puede, y es por el mismo motivo
que `guardar` no se podía antes del paso 5.E: están pegados a cosas de afuera.

Al terminar, el programa va a hacer **exactamente lo mismo** y `asistente.js` va a ser
una cáscara de veinte líneas. Es un refactor, así que vale la regla de la Clase 4:
**después de cada paso, probar los cuatro comandos y el caso sin archivo.**

Antes de arrancar, leé `Referencia/07-separar-logica.md`, partes 1 a 4.

---

### Paso 6.A — `agregarTarea`

En `funciones.js`, una función que reciba **la lista** y **el texto de la tarea**, la
agregue a la lista, y **devuelva el mensaje** en vez de imprimirlo.

No tiene que saber nada de `process.argv` ni de archivos.

En `asistente.js`, la rama de `agregar` queda en tres líneas: llamar, imprimir lo que
devolvió, y guardar.

**Listo cuando:** `agregar "algo"` se comporta igual que antes.

---

### Paso 6.B — Su primer test

En `Clases/06-separar-logica/practica/logica.test.js`, un test de `agregarTarea`:

- empezá con una lista vacía,
- llamala con un texto,
- comprobá que la lista quedó con una tarea **y** que el mensaje es el que esperás.

**Sin archivos y sin terminal.** Esto es lo que antes era imposible.

**Listo cuando:** `node --test` pasa todo.

---

### Paso 6.C — `eliminarTarea` y `completarTarea`

Igual que la anterior, pero con una diferencia importante: estas **pueden fallar**. Si el
número no es válido, la función tiene que devolver el mensaje de error — y no tocar la
lista.

O sea: la validación se muda adentro de la función, y la rama de `asistente.js` deja de
tener el `if`.

Pensá antes de escribir: si la lógica decide si el número vale, **¿cómo se enteran los
comandos de si tienen que guardar o no?** Contame qué se te ocurre antes de resolverlo.

**Listo cuando:** los cuatro comandos andan y las cinco pruebas del 3.B siguen dando lo
mismo (`99`, `manteca`, `0`, sin número, y un número válido).

---

### Paso 6.D — `listarTareas`

Esta devuelve **un texto** con todas las líneas, en vez de imprimir una por una.

Dos cosas nuevas, en la parte 4 de la Referencia: `map` (como `forEach`, pero devuelve
una lista nueva) y `join` (pega una lista en un solo texto).

Acordate del caso de la lista vacía.

**Listo cuando:** `listar` se ve igual que antes en la terminal.

---

### Paso 6.E — Tests de todo

Completá `logica.test.js` con los casos que faltan. Mínimo:

| Función | Casos |
|---|---|
| `agregarTarea` | una tarea en lista vacía; una segunda tarea |
| `eliminarTarea` | borrar la del medio; número inválido (y que la lista no cambie) |
| `completarTarea` | completar la primera; número inválido |
| `listarTareas` | lista vacía; lista con dos tareas |

**Listo cuando:** `node --test` pasa todo y podés romper cualquier función y ver cuál
test se pone en rojo.

---

## Preguntas para cuando entregues

1. ¿Por qué ahora se pueden testear los comandos y antes no?
2. ¿Qué diferencia hay entre `map` y `forEach`?
3. Si `agregarTarea` recibe la lista y le hace `push`, ¿por qué la lista de
   `asistente.js` también cambia?
4. Si mañana quisieras que tu asistente funcione en una página web en vez de la terminal,
   ¿qué parte de tu código tendrías que reescribir y qué parte no?
