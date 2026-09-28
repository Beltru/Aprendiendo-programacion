# Ejercicios: entender funciones desde cero

> Estos ejercicios existen porque el refactor del asistente era demasiado grande para
> aprender el concepto. Acá no hay tareas, ni archivos, ni comandos: **solo funciones**.
>
> Van en `Clases/04-funciones/practica/`, un archivo por ejercicio. Se corren con
> `node Clases/04-funciones/practica/ej1.js`.
>
> **Regla de oro: antes de correr cada uno, escribí qué esperás que imprima.** Si acertás,
> entendiste. Si no, ahí hay algo que aprender — avisame y lo vemos.
>
> Y apagá el autocompletar. Estos ejercicios no sirven si los escribe el editor.

---

## La idea antes de empezar

Un programa es una lista de pasos que se ejecutan de arriba a abajo. Una **función** es
un grupo de esos pasos al que le pusiste un **nombre**, y que no se ejecuta hasta que lo
llamás.

Pensala como una **máquina** con tres partes:

    entra  →  [ hace algo ]  →  sale
    (parámetros)  (cuerpo)   (return)

Las tres son opcionales. Hay máquinas que no necesitan que les entre nada, y máquinas
que no devuelven nada (solo hacen).

---

## Ej 1 — Definir no es ejecutar (`ej1.js`)

Escribí una función llamada `saludar`, sin parámetros, que imprima `Hola`.

Abajo, **llamala tres veces**.

Después agregá un `console.log("Fin")` al final del archivo.

**Predecí:** ¿cuántas veces aparece `Hola`? ¿En qué orden sale todo?

**Lo que hay que sacar de acá:** escribir la función no imprime nada. Cada llamada la
ejecuta una vez, entera, y después el programa sigue en la línea de abajo.

---

## Ej 2 — El hueco (`ej2.js`)

Escribí `saludarA`, que reciba **un** parámetro `nombre` e imprima `Hola` seguido de ese
nombre (template string).

Llamala tres veces: con `"Beltrán"`, con `"Tomás"` y con `"Softeam"`.

**Predecí las tres líneas** antes de correr.

**Lo que hay que sacar de acá:** el parámetro es un **nombre inventado por vos** que está
vacío al definir la función y se llena en el momento de llamarla. La función se escribe
una vez y sirve para los tres casos.

---

## Ej 3 — Devolver algo (`ej3.js`)

Escribí `doble`, que reciba un número y **devuelva** (`return`) ese número multiplicado
por dos. **Que no imprima nada adentro.**

Abajo probá estas cuatro cosas, en este orden:

1. `console.log(doble(4))`
2. `const x = doble(10)` y después imprimí `x`
3. `console.log(doble(3) + doble(5))`
4. `doble(7)` **sola en una línea**, sin `console.log` alrededor

**Predecí cada una.** Presté atención a la 4: ¿imprime algo? ¿Por qué?

**Lo que hay que sacar de acá:** una función con `return` **produce un valor**. Ese valor
se puede imprimir, guardar en una variable o usar en una cuenta. Si no lo agarrás, se
pierde (como te pasó con `JSON.stringify` en la Clase 2).

---

## Ej 4 — Devolver `true` o `false` (`ej4.js`)

Escribí `esMayor`, que reciba una edad y devuelva `true` si es 18 o más.

**No uses `if` adentro de la función.** La comparación ya vale `true` o `false`:
devolvela directo.

Abajo:

1. `console.log(esMayor(20))` y `console.log(esMayor(15))`
2. Un `if (esMayor(20)) { ... } else { ... }` con un mensaje en cada rama.

**Predecí las dos.**

**Lo que hay que sacar de acá:** una función que devuelve `true`/`false` se puede usar
**directamente como condición de un `if`**. El nombre de la función pasa a ser la
pregunta que hace el `if`.

---

## Ej 5 — Dos parámetros, y lo de adentro no se ve afuera (`ej5.js`)

Escribí `estaEnRango`, que reciba **dos** números (`numero` y `maximo`) y devuelva `true`
si `numero` está entre 1 y `maximo`.

Probá: `estaEnRango(2, 3)`, `estaEnRango(0, 3)`, `estaEnRango(99, 3)`.

**Predecí las tres.**

Después, el experimento del error: adentro de la función creá `const algo = 5`, y **fuera**
de la función, al final del archivo, poné `console.log(algo)`.

**Predecí:** ¿qué pasa? Corré y leé el error.

**Lo que hay que sacar de acá:** lo que nace adentro de una función muere ahí. Por eso lo
que necesita **entra por parámetros** y lo que produce **sale por `return`**. Esas son las
dos únicas puertas.

---

## Cuando termines los cinco

Volvemos al asistente, al paso 4.C, y vas a ver que `estaEnRango` del ejercicio 5 es
**casi exactamente** la función que te falta escribir ahí.
