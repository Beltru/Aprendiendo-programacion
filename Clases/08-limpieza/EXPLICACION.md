# Clase 8, el panorama completo

> El mapa de la clase. Leelo entero antes de los pasos.

---

## 1. Qué vamos a hacer

Nada nuevo para el usuario. El asistente va a hacer **exactamente lo mismo** que hoy:
mismos comandos, mismos botones, mismos mensajes.

Lo que cambia es **cómo está escrito por dentro**. Eso tiene nombre: **refactor**. Ya lo
hiciste en la Clase 4 (pasar a funciones) y en la Clase 6 (separar la lógica). Esta vez no
hay un tema grande detrás: son detalles sueltos que fuimos dejando anotados.

## 2. Por qué vale una clase entera

Porque cada detalle de estos es una **trampa a futuro**, no un error de hoy. Hoy todo
funciona. El problema aparece el día que cambiás algo:

| Detalle | Hoy | El día que... |
|---|---|---|
| `"agregar"` escrito en dos lugares de `asistente.js` | Funciona | ...agregás un comando nuevo y te olvidás de uno de los dos lugares |
| `cargarTareas` dice `"tareas.json"` escrito a mano | Funciona | ...la llamás con otro archivo (¡ya pasa en tus tests!) y miente |
| Los parámetros de ruta se llaman distinto en `guardar` y `cargarTareas` | Funciona | ...volvés en un mes y no sabés si son la misma cosa |
| Sangría desprolija | Funciona | ...buscás un cierre de llave mal puesto (tu error más frecuente) |

Eso es lo que separa un código que funciona de uno que **se puede mantener**. Fijate que
la Clase 9 va a meterle fechas y edición a todo esto. Conviene que la casa esté ordenada
antes de agrandarla.

## 3. La regla de oro de un refactor

> **Cambiás el cómo, nunca el qué. Y comprobás después de cada paso, no al final.**

Si en un refactor cambia lo que ve el usuario (aunque sea un mensaje) ya no es un refactor:
es otra cosa, y hay que decidirlo a propósito.

¿Y cómo sabés que no cambiaste el qué? Acá hay una trampa, y tiene que ver con una pregunta
de la clase pasada:

| Archivo | ¿Tiene tests? | Cómo comprobás que no lo rompiste |
|---|---|---|
| `logica.js` | Sí | `node --test` |
| `almacenamiento.js` | Sí (el de la Clase 5) | `node --test` |
| `asistente.js` | **No** | A mano: correr los cuatro comandos |
| `web.js` | **No** | A mano: abrir la página y usarla |

Casi todo lo que vas a tocar en esta clase está en las filas de abajo. **Los tests en verde
no te van a avisar nada.** Por eso cada paso tiene su "listo cuando" con la prueba a mano.

## 4. Lo que NO vamos a hacer

- **Que la web y la terminal compartan tareas.** No es un detalle: necesita algo que esté
  vivo entre las dos (un servidor). Es tema de una clase futura.
- **Arreglar todo lo que se pueda arreglar.** Uno de los pasos es justamente decidir si un
  detalle **vale la pena** arreglarlo. A veces la respuesta correcta es "no", y saber
  decir por qué también es oficio.
