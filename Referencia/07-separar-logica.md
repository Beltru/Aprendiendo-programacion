# Separar la lógica de la entrada y la salida (Clase 6)

## 1. Para qué

En la Clase 5 descubriste que `guardar` era difícil de testear porque decidía sola qué
archivo tocar. Tus **comandos** tienen el mismo problema, pero peor: cada rama de
`asistente.js` hace tres cosas mezcladas en el mismo lugar.

Tomá la rama de `agregar`:

    tareas.push({ texto: process.argv[3], hecha: false })   // ← decide (lógica)
    guardar(tareas, archivoTareas)                           // ← escribe el disco
    console.log("Se agrego una nueva tarea")                 // ← escribe la pantalla

Para testear eso tendrías que simular `process.argv` y espiar lo que se imprime. Es
posible y es un dolor de cabeza. **La salida es separar las tres.**

## 2. Las tres partes de cualquier programa

| Parte | Qué hace | Ejemplos tuyos |
|---|---|---|
| **Entrada** | leer lo que pide el usuario | `process.argv` |
| **Lógica** | decidir qué pasa con los datos | agregar a la lista, validar, marcar hecha |
| **Salida** | mostrar o persistir el resultado | `console.log`, `guardar` |

La lógica es la parte que **vale** y la que cambia más seguido. La entrada y la salida
son cáscara. Si están mezcladas, no podés probar la lógica sin arrastrar la cáscara.

La idea de esta clase: **que la lógica no sepa que existe una terminal.**

## 3. Cómo se ve una función de lógica

No lee `process.argv`, no imprime, no toca archivos. **Recibe datos y devuelve datos.**

    function hacerAlgo(datos, parametro) {
        // modifica datos y/o calcula
        return unResultado
    }

Y la cáscara queda así:

    const dato = process.argv[3]          // entrada
    const mensaje = hacerAlgo(lista, dato) // lógica
    console.log(mensaje)                   // salida

Fijate el cambio de responsabilidad: **la función decide qué hay que decir; quien la
llama decide cómo decirlo.** Hoy tu función tendría que imprimir; mañana, si querés una
página web, el mismo texto va a un `<div>` y la función no cambia.

## 4. Devolver el texto en vez de imprimirlo

Es el cambio más chico y el que más gana:

    // antes
    console.log("Se agrego una nueva tarea")

    // después
    return "Se agrego una nueva tarea"

Y el que llama hace `console.log(...)` con lo que recibió. Ahora el test puede comprobar
**qué mensaje** devolvió, sin leer la pantalla.

### Si hay que devolver varias líneas

`listar` imprime una línea por tarea. Para devolver eso como **un** texto hay dos formas:

    lista.join("\n")        // junta los elementos con un salto de línea entre cada uno

`\n` adentro de un texto significa "acá va un salto de línea". Y `join` es lo inverso de
partir: toma una lista y la pega en un solo texto.

Para armar esa lista de líneas a partir de las tareas existe `map`, que es como `forEach`
pero **devuelve una lista nueva** con el resultado de cada vuelta:

    const nuevas = lista.map((elemento, i) => algoQueDevuelveUnValor)

`forEach` hace algo con cada elemento y no devuelve nada. `map` transforma cada elemento
y te devuelve la lista transformada, del mismo largo.

## 5. Modificar la lista que te pasaron

Cuando una función recibe una lista y le hace `push` o `splice`, **la lista de afuera
también cambia**. No recibe una copia: recibe la misma lista.

    function agregarAlgo(lista) {
        lista.push("nuevo")      // la lista del que llamó TAMBIÉN tiene "nuevo"
    }

Eso te conviene acá (es como venís trabajando), pero tenelo presente, porque sorprende:
con un número o un texto no pasa, solo con listas y objetos.

## 6. Qué gana el test

Una función de lógica se prueba sin archivos, sin terminal y sin miedo:

    const tareas = []
    const mensaje = agregarTarea(tareas, "probar")

    assert.equal(tareas.length, 1)              // ¿cambió la lista?
    assert.equal(mensaje, "...")                // ¿dijo lo que tenía que decir?

Dos comprobaciones, cero efectos. Ese es el premio.
