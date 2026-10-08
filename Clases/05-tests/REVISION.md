# Revisión — Clase 5 (parcial)

**Fecha:** 2026-10-07 (sesión 6)
**Estado:** 5.A, 5.B y 5.C hechos. **Faltan 5.D y 5.E.**

## Lo que entregó

- `Clases/05-tests/practica/a-mano.js`: su propia mini herramienta de tests, con una
  función que compara e imprime OK/ERROR, y cinco casos de `estaEnRango`.
- `Clases/05-tests/practica/rango.test.js`: los mismos cinco casos con `node:test` y
  `assert.equal`. **Los cinco pasan** con `node --test`.
- Rompió `estaEnRango` a propósito y verificó que el test correcto se ponía en rojo
  mientras los otros seguían verdes. Dijo: *"depende lo que rompía se marcaba uno u otro
  en rojo"*. Entendió el punto.

## El error más importante de la sesión

En el 5.A escribió el test así:

    const unotres = true              // ← escrito a mano
    const unotresespero = true
    if (unotres === unotresespero) ...

**Un test que nunca llama al código y compara `true === true`: pasa siempre.** Se le
explicó que eso es peor que no tener test, y se le pidió romper la función para verlo.
Quedó la regla: *obtenido sale de ejecutar el código (nunca a mano); esperado lo escribís
vos (siempre a mano)*.

## Errores del camino

1. **Ruta del `import` relativa:** primero `./funciones.js`, después cuatro `../` en vez
   de tres (terminó en `Desktop`). Se le enseñó a leer la ruta del `ERR_MODULE_NOT_FOUND`
   como "acá buscó" y a contar escalones.
2. **Toda la práctica quedó adentro de la función** (la llave de cierre al final del
   archivo), así que no imprimía nada. Es el Ej 1 de la Clase 4 otra vez: definir no
   ejecuta. Se le recordó el truco de la llave resaltada en VS Code.
3. **Orden de los argumentos:** agregó un parámetro nuevo *primero* en la definición pero
   lo pasaba *último* en las llamadas → los cinco tests daban ERROR con la función
   perfecta. Lección del Ej 5: manda la posición, no el nombre.
4. **Argumentos faltantes → `undefined` sin error.** Se le marcó como otro error
   silencioso de la familia del `"type"` duplicado y el `NaN`.
5. **Copió la forma genérica literal:** dejó `assert.equal(obtenido, esperado)` con esos
   nombres, que no existían en su archivo. Hubo que explicitar que eran marcadores de la
   Referencia y que ahí van los valores reales.
6. **Importó `a-mano.js` dentro del `.test.js`** y aparecieron sus cinco líneas al correr
   `node --test`. Sirvió para enseñar que **importar un archivo lo ejecuta**.
7. Puso un nombre de parámetro en los paréntesis de la arrow (`(testEstaEnRango) =>`)
   cuando `test` no pasa nada.

## Lo que hizo bien solo

- **Envolvió las llamadas en `console.log` sin que se lo pidieran.** Cuarta aparición del
  tema "valor de retorno descartado" y la primera que lo resuelve de entrada.
- Entendió por qué su función de test no podía imprimir los argumentos: cuando llega el
  resultado, los números ya no existen para ella.
- Los cinco nombres de los tests los escribió claros y distintos entre sí.

## Dónde retomar

**5.D**, que es solo pensar, sin escribir: ¿qué pasa si testea `guardar`? Qué archivo se
escribe, qué pasa con sus tareas reales, y cómo comprobaría que funcionó. Después 5.E:
pasarle la ruta por parámetro a `guardar` y `cargarTareas` para poder testearlas contra
un archivo de prueba.

## Pendiente menor

`a-mano.js` quedó con cinco parámetros y con `mensajeok`/`mensajeerror` duplicados. Se le
señaló y se le dijo que no lo arreglara, porque `node:test` muestra el diseño correcto
(un texto + una comparación). Vale cerrar el círculo cuando retome: preguntarle por qué
la herramienta de Node necesita dos cosas y la suya cinco.
