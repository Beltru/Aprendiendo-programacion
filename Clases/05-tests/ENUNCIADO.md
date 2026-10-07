# Clase 5 — Tests: que la máquina pruebe por vos

## Qué vas a aprender

A escribir código que comprueba tu código. Y vas a descubrir algo incómodo: **parte de
tu asistente es difícil de testear**, y eso no es culpa de los tests.

Como en la Clase 4, los primeros pasos son ejercicios chicos en `practica/`, lejos del
asistente. El concepto primero, el proyecto después.

Antes de arrancar, leé `Referencia/06-tests.md`, partes 1 y 2.

---

### Paso 5.A — Un test a mano

En `Clases/05-tests/practica/`, creá `a-mano.js`.

Importá `estaEnRango` desde tu `funciones.js` y comprobá **a mano**, con `if` y
`console.log`, estos cinco casos. Antes de correr, escribí al lado de cada uno qué
esperás:

    estaEnRango(1, 3)
    estaEnRango(3, 3)
    estaEnRango(0, 3)
    estaEnRango(4, 3)
    estaEnRango(1.5, 3)

Que cada caso imprima `OK` o, si falla, **qué esperaba y qué obtuvo**.

Ojo con la ruta del `import`: se cuenta desde el archivo que importa.

**Listo cuando:** corrés el archivo y ves cinco líneas, y entendés por qué cada una dice
lo que dice.

---

### Paso 5.B — Sacar la repetición

Mirá lo que escribiste: cinco veces la misma estructura, cambiando dos cosas.

Ya sabés qué hacer con eso (Clase 4, receta de las funciones). Escribí **una** función
que reciba lo necesario e imprima `OK` o el `FALLA` con el detalle. Dejá las cinco
pruebas en cinco líneas.

Pensá bien qué tiene que recibir: compará las cinco repeticiones y mirá qué cambia.

**Listo cuando:** el archivo tiene la función y cinco líneas de prueba, y sigue
imprimiendo lo mismo que antes.

> Acabás de escribir, en chiquito, lo que hace cualquier herramienta de tests. El paso
> siguiente es cambiar la tuya por la que ya viene con Node.

---

### Paso 5.C — La herramienta de verdad

Leé las partes 3 y 4 de la Referencia.

Creá `Clases/05-tests/practica/rango.test.js` (ojo el nombre: `.test.js`) y escribí los
mismos cinco casos con `test` y `assert`. Un `test(...)` por caso, con un nombre que
describa qué se espera.

Corré:

    node --test

**Listo cuando:** ves cinco tests en verde.

Después, a propósito: **rompé la función.** Cambiá el `<=` por `<` en `funciones.js`,
corré los tests y mirá qué te dice. Volvé a arreglarla.

Eso es lo que compraste: un bug de borde detectado en dos segundos, sin abrir el
asistente ni acordarte de probar el caso.

---

### Paso 5.D — El problema incómodo

Ahora intentá testear `guardar`. Pensalo **antes** de escribir una línea:

1. Si llamás a `guardar(["prueba"])` desde un test, ¿qué archivo se escribe?
2. ¿Qué pasa con tus tareas de verdad?
3. ¿Podés comprobar que funcionó sin leer ese mismo archivo?

Contame qué pensás antes de tocar código. **Esta pregunta es el paso 5.D completo**: lo
importante acá es ver el problema, no resolverlo todavía.

---

### Paso 5.E — Hacer testeable lo que no lo es

La solución es la de siempre: lo que está fijo adentro, pasarlo por parámetro.

Hacé que `guardar` y `cargarTareas` reciban **la ruta del archivo** en vez de tenerla
escrita adentro. Después, desde `asistente.js`, pasales la ruta de verdad.

Es un refactor, así que aplicá la regla de la Clase 4: **probá los cuatro comandos y el
caso sin archivo después de cada cambio.**

Y entonces sí, en `tareas.test.js`: probá `guardar` y `cargarTareas` usando un archivo de
prueba (por ejemplo `Clases/05-tests/practica/tareas-de-prueba.json`), que no tiene nada
que ver con tus tareas reales.

Dos cosas para pensar:

- ¿Cómo comprobás que `guardar` guardó bien? (Pista: `cargarTareas` también existe.)
- Si un test deja el archivo de prueba escrito, ¿el test siguiente arranca limpio?
  ¿Importa?

**Listo cuando:** `node --test` pasa todo, el asistente sigue funcionando igual, y
`tareas.json` de verdad no lo tocó ningún test.

---

## Preguntas para cuando entregues

1. ¿Por qué `assert.deepEqual` existe, si ya hay `assert.equal`?
2. Un test que pasa, ¿prueba que tu programa está bien? ¿Qué prueba exactamente?
3. ¿Por qué `estaEnRango` era fácil de testear y `guardar` no?
4. En la Clase 4 probabas los cuatro comandos a mano después de cada paso. ¿Qué de eso
   te ahorran los tests y qué **no**?
