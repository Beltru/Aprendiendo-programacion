# Números y listas (Clase 3)

## 1. Todo lo que llega de la terminal es texto

Esto sorprende a todos: aunque escribas `borrar 2`, el `2` que llega en
`process.argv[3]` **no es el número 2, es el texto `"2"`**.

    "2" === 2        // false: uno es texto, el otro número
    "2" + 1          // "21"  ← pega los textos, no suma
    Number("2") + 1  // 3     ← ahora sí

Para convertir texto en número:

    const n = Number(algunTexto)

Si el texto no es un número (`"manteca"`), `Number` devuelve **`NaN`**
(*Not a Number*, "no es un número"). Ojo con esta trampa:

    NaN === NaN      // false — NaN no es igual ni a sí mismo

Así que para saber si algo salió bien **no** se compara contra `NaN`. Se pregunta:

    Number.isInteger(n)    // true si n es un número entero

## 2. Sacar un elemento de una lista

    lista.splice(posicion, cuantos)

Modifica la lista **en el lugar**: `lista.splice(0, 1)` saca un elemento desde la
posición 0. No hace falta volver a asignar nada; la lista queda cambiada.

Para saber cuántos elementos tiene, `lista.length`. Las posiciones válidas van
**de 0 a `length - 1`**.

## 3. Objetos: cuando una cosa tiene varios datos

Un texto guarda **un** dato. Si una tarea necesita dos (el texto y si está hecha),
se usa un **objeto**:

    const tarea = { texto: "comprar leche", hecha: false }

    tarea.texto     // "comprar leche"
    tarea.hecha     // false
    tarea.hecha = true

Cada dato tiene un **nombre** (`texto`, `hecha`) y un **valor**. El nombre lo elegís vos.

Una lista puede tener objetos adentro:

    const tareas = [
      { texto: "pagar la luz", hecha: false },
      { texto: "comprar leche", hecha: true },
    ]

    tareas[0].texto      // "pagar la luz"
    tareas.length        // 2

`JSON.stringify` y `JSON.parse` funcionan igual con objetos: un archivo con objetos
se ve así, y al leerlo recuperás los objetos enteros.

    [{"texto":"pagar la luz","hecha":false}]


### Meter un objeto en una lista

`push` recibe **una** cosa. Si esa cosa es un objeto, va entero, con sus llaves:

    lista.push({ clave: valor, otraClave: otroValor })

También podés armarlo antes, ponerle nombre, y meterlo después. Hace lo mismo:

    const cosa = { clave: valor, otraClave: otroValor }
    lista.push(cosa)

Los **nombres** de los datos (`clave`, `otraClave`) los escribís fijos, siempre iguales.
Los **valores** pueden ser lo que sea: un texto, algo que venga de la terminal, `false`.
## 4. Elegir según una condición, en una sola línea

    condicion ? valorSiEsVerdad : valorSiEsMentira

Se lee: *"si la condición es verdadera, dame lo primero; si no, lo segundo"*. Sirve
adentro de un template string, donde no entra un `if`:

    `${tarea.hecha ? "[x]" : "[ ]"} ${tarea.texto}`
