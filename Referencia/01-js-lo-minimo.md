# JS: lo mínimo (Clase 1)

Solo lo que necesitás para la Clase 1. Va a crecer.

> Falta cosas a propósito. Lo que tenés que descubrir vos no está acá.

## Guardar un valor

    const nombre = "Beltrán"   // no se puede reasignar después
    let contador = 0           // sí se puede reasignar

Usá `const` por defecto. `let` solo cuando de verdad vas a reasignar.

## Texto

    const saludo = "hola"
    const conVariable = `Hola ${nombre}`   // comillas invertidas ` `

Las comillas invertidas permiten meter variables adentro con `${...}`.

## Mostrar en pantalla

    console.log("texto")
    console.log(`Hola ${nombre}, tenés ${contador} tareas`)

## Listas (arrays)

    const tareas = []              // lista vacía
    const numeros = [10, 20, 30]

    tareas.push("algo")            // agregar al final
    tareas.length                  // cuántos elementos hay
    numeros[0]                     // el primero — se cuenta desde CERO

## Recorrer una lista

    for (const t of tareas) {
      console.log(t)
    }

Si además necesitás la posición de cada elemento:

    tareas.forEach((t, i) => {
      console.log(i, t)
    })

`t` es el elemento, `i` es su posición (empieza en 0).

## Decidir

    if (comando === "listar") {
      // ...
    } else if (comando === "agregar") {
      // ...
    } else {
      // ...
    }

`===` compara. `=` asigna. Confundirlos es un clásico.

Cuando son muchas ramas sobre una misma variable:

    switch (comando) {
      case "listar":
        // ...
        break            // sin el break sigue de largo a la rama de abajo
      default:
        // ...
    }

## Funciones

    function saludar(nombre) {
      return `Hola ${nombre}`
    }

    const resultado = saludar("Beltrán")

`return` devuelve un valor y **corta** la función ahí.

## Objetos

Cuando una cosa tiene varias propiedades:

    const tarea = {
      texto: "Estudiar meteorología",
      hecha: false
    }

    tarea.texto        // leer
    tarea.hecha = true // escribir

## Correr el programa

    node asistente.js

## Errores que vas a ver, traducidos

| Dice | Significa |
|---|---|
| `SyntaxError: Unexpected token` | Falta o sobra un `)`, `}`, `"` — mirá la línea de arriba también |
| `ReferenceError: x is not defined` | Usaste `x` sin crearlo, o lo escribiste distinto |
| `TypeError: x is not a function` | `x` existe pero no es lo que creías |
| `undefined` impreso | Pediste algo que no existe (posición fuera de la lista, propiedad mal escrita) |

Leé el **número de línea** que dice el error. Está ahí y casi siempre acierta.
