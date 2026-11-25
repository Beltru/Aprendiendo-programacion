# Fechas, filtros y orden (Clase 9)

## 1. Fechas en JavaScript: `Date`

    const ahora = new Date()                 // este instante
    const otra = new Date("2026-12-01")      // a partir de un texto

    otra.getDate()          // el día del mes (1 a 31)
    otra.getMonth()         // el mes... ¡de 0 a 11! enero es 0
    otra.getFullYear()      // el año

**La fecha de hoy como texto `AAAA-MM-DD`, en tu hora local:**

    new Date().toLocaleDateString("sv-SE")     // "2026-11-24"

`"sv-SE"` es el formato de Suecia, que escribe las fechas justo así. Es un truco
conocido; no tiene nada que ver con Suecia en tu programa.

> No uses `toISOString()` para esto: da la fecha **en hora de Londres**. A las 22 hs en
> Argentina ya te dice que es mañana.

### `typeof`: de qué tipo es algo

    typeof 5              // "number"
    typeof "hola"         // "string"   (texto)
    typeof true           // "boolean"
    typeof new Date()     // "object"   (una fecha es un objeto)

## 2. Comparar textos

`<` y `>` también funcionan con textos: comparan letra por letra, como un diccionario.

    "ana" < "beto"      // true
    "10" < "9"          // true  ← compara el "1" contra el "9", no los números

## 3. Valores que pueden faltar

Si un objeto no tiene una propiedad, leerla da `undefined`, sin error:

    const perro = { nombre: "Toby" }
    perro.edad                  // undefined
    perro.edad === undefined    // true

### Mostrar algo solo si existe

Se combina el ternario (`cond ? a : b`) con el texto vacío `""`:

    const perro = { nombre: "Toby", edad: 3 }
    const gato = { nombre: "Michi" }                // no tiene edad

    `${perro.nombre}${perro.edad !== undefined ? ` (${perro.edad} años)` : ""}`
    // "Toby (3 años)"

    `${gato.nombre}${gato.edad !== undefined ? ` (${gato.edad} años)` : ""}`
    // "Michi"

Leelo de afuera hacia adentro:

    `  ...  ${  CONDICIÓN  ?  `texto si sí`  :  ""  }  `
    ↑ texto de afuera        ↑ texto de adentro  ↑ texto vacío si no

Sí: hay comillas invertidas **adentro** de un `${}` que está adentro de otras comillas
invertidas. Es válido. Cada `${` se cierra con su `}`.

## 4. Argumentos de la terminal: hay más de uno

    node archivo.js uno dos tres
    //              [2] [3] [4]

Si el usuario no escribió el cuarto, `process.argv[4]` es `undefined`.

## 5. `filter`: quedarse con algunos

    const nueva = lista.filter((elemento) => condicion)

La función que le pasás devuelve `true` (se queda) o `false` (se va). `filter` devuelve una
**lista nueva**; la original no cambia.

    const numeros = [3, 12, 7, 20]
    const grandes = numeros.filter((n) => n > 10)     // [12, 20]

## 6. `indexOf`: en qué posición está algo

    const letras = ["a", "b", "c"]
    letras.indexOf("c")       // 2
    letras.indexOf("z")       // -1  (no está)

Con objetos funciona si le pasás **el mismo objeto** que está en la lista, no uno que se
le parezca.

## 7. `sort`: ordenar

    lista.sort((a, b) => numero)

`sort` va agarrando pares `a` y `b` y te pregunta cuál va primero. Vos devolvés:

| Devolvés | Significa |
|---|---|
| un número **negativo** | `a` va antes que `b` |
| un número **positivo** | `b` va antes que `a` |
| `0` | da igual |

Con números, restarlos alcanza:

    const edades = [30, 5, 18]
    edades.sort((a, b) => a - b)       // [5, 18, 30]

Con textos no se puede restar. Se usa `localeCompare`, que devuelve justo ese número:

    const nombres = ["Zoe", "Ana", "Luis"]
    nombres.sort((a, b) => a.localeCompare(b))    // ["Ana", "Luis", "Zoe"]

> **`sort` cambia la lista original**, a diferencia de `filter` y `map`. No hace falta
> guardar lo que devuelve: la lista ya quedó ordenada.
