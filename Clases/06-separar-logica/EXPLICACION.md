# Clase 6, el panorama completo

> Escrito porque la clase venía como ping-pong de correcciones sueltas: pasos chicos sin
> ver el dibujo. Esto es el dibujo. Leelo entero antes de seguir con los pasos.

---

## 1. El problema, concreto

Mirá una rama de tu `asistente.js` como estaba al empezar la clase:

    if (process.argv[2] === agregar) {
        tareas.push({ texto: process.argv[3], hecha: false })
        guardar(tareas, archivoTareas)
        console.log("Se agrego una nueva tarea")
    }

Tres líneas, **tres trabajos distintos** mezclados:

| Línea | Qué hace | Qué tipo de trabajo es |
|---|---|---|
| `tareas.push(...)` | decide qué pasa con los datos | **lógica** |
| `guardar(...)` | escribe en el disco | **salida** |
| `console.log(...)` | escribe en la pantalla | **salida** |

Y `process.argv[3]`, metido en el medio, es **entrada**.

Están los tres tipos de trabajo en el mismo lugar. Eso es lo que hay que separar.

## 2. Por qué eso impide testear

Para probar "agregar una tarea funciona", un test tendría que:

- hacerle creer al programa que alguien escribió `agregar "algo"` en la terminal
  (falsificar `process.argv`),
- y después espiar lo que se imprimió en pantalla para ver si dijo lo correcto.

Las dos cosas son posibles y las dos son un dolor de cabeza. **Pero el problema no es el
test: es el código.** Es la misma lección del paso 5.E con `guardar`: lo difícil de
testear está pegado a algo de afuera.

## 3. Las tres partes de todo programa

| Parte | Qué hace | Dónde vive al terminar la clase |
|---|---|---|
| **Entrada** | leer lo que pidió el usuario | `asistente.js` |
| **Lógica** | decidir qué pasa con los datos | `funciones.js` |
| **Salida** | mostrar en pantalla, guardar en disco | `asistente.js` |

**La lógica es la parte que vale.** Es la que tiene las reglas de tu asistente: que una
tarea nueva arranca sin hacer, que el número tiene que estar en rango, que las tareas se
muestran numeradas desde 1. Eso es tu asistente. Lo demás es cáscara.

**La idea de toda la clase, en una frase:** que la lógica no sepa que existe una terminal.

## 4. Cómo queda cada rama al final

En pseudocódigo (no es JavaScript, es la idea):

    si el comando es "agregar":
        PEDIRLE a la lógica que agregue el texto que vino de la terminal
        la lógica devuelve un MENSAJE
        imprimir ese mensaje
        guardar la lista

Fijate el cambio de reparto:

- **La lógica decide QUÉ decir.** Devuelve el texto `"Se agrego una nueva tarea"`.
- **La cáscara decide CÓMO decirlo.** Hoy con `console.log`. Mañana, si hacés la versión
  web, el mismo texto va a un `<div>` y **la lógica no cambia ni una letra**.

Ese es el premio real, más allá de los tests.

## 5. Las cuatro funciones que vas a escribir

Todas viven en `funciones.js`, ninguna sabe de `process.argv` ni de archivos ni de
`console.log`:

| Función | Qué recibe | Qué le hace a la lista | Qué devuelve |
|---|---|---|---|
| `agregarTarea` | la lista y un texto | le agrega la tarea | el mensaje de confirmación |
| `eliminarTarea` | la lista y un número | la borra, **si el número vale** | el mensaje (de éxito o de error) |
| `completarTarea` | la lista y un número | la marca, **si el número vale** | el mensaje (de éxito o de error) |
| `listarTareas` | solo la lista | nada | el texto con todas las líneas |

`agregarTarea` ya la escribiste. Las otras tres son variaciones del mismo molde.

## 6. Qué se gana, paso por paso

No es un refactor por prolijidad. Cada paso compra algo:

1. **6.A y 6.C** — la lógica deja de estar atada a la terminal.
2. **6.B y 6.E** — podés probar tus comandos en dos líneas, sin archivos, sin terminal y
   sin miedo. Hoy, para comprobar que `eliminar` anda, tenés que ir a la consola, cargar
   tareas, borrar una, mirar la pantalla y revisar el JSON. Después del 6.E, `node --test`.
3. **6.D** — `listar` devuelve un texto en vez de imprimir, y eso lo vuelve reutilizable
   en cualquier interfaz.

Y al final, `asistente.js` queda siendo una lista de comandos legible de arriba a abajo,
sin un solo detalle de implementación.

## 7. Cómo se ve un test de lógica

Esto es lo que antes era imposible y ahora va a ser trivial:

    (1) armo una lista de mentira:              const lista = []
    (2) llamo a la lógica:                      const mensaje = agregarTarea(lista, "probar")
    (3) compruebo dos cosas:
            ¿la lista quedó con una tarea?       assert.equal(lista.length, 1)
            ¿devolvió el mensaje correcto?       assert.equal(mensaje, "...")

**Siempre son esos tres pasos: armar, llamar, comprobar.** Cambian los datos y las
comprobaciones; la forma es siempre la misma. Si te perdés en un test, volvé a estos tres.

## 8. Lo que NO cambia en toda la clase

Esto es importante y es fácil de olvidar: **el programa va a hacer exactamente lo mismo
que hoy.** Mismos cuatro comandos, mismos mensajes, mismo archivo. Un refactor no agrega
funcionalidad: cambia **cómo está escrito** lo que ya funciona.

Por eso la regla: **después de cada paso, probar los cuatro comandos y el caso sin
archivo.** Si algo cambió de comportamiento, se rompió algo.

## 9. Dónde estás ahora

- **6.A hecho:** `agregarTarea` existe y la rama de `agregar` la usa.
- **6.B a mitad:** el test está escrito hasta la llamada. Falta comprobar.
- Faltan **6.C**, **6.D** y **6.E**.
