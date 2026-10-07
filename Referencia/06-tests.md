# Tests (Clase 5)

## 1. Para qué: lo que ya venís haciendo a mano

En la Clase 4, después de cada paso, probabas los cuatro comandos para ver si seguían
funcionando. Eso **es** testear. El problema es que lo hacías a mano:

- tarda, así que con el tiempo lo salteás;
- te olvidás casos (el archivo que no existe, `eliminar 3` con 3 tareas);
- no deja registro de qué se probó.

Un **test** es código que comprueba otro código. Lo escribís una vez y lo corrés en dos
segundos, cuantas veces quieras. Sirve para dos momentos distintos:

1. **Ahora:** confirmar que lo que escribiste hace lo que creés.
2. **Dentro de tres meses:** avisarte que algo que tocaste rompió algo viejo. Esto se
   llama **regresión**, y ya te pasó: en el 4.B moviste dos líneas y reapareció el bug
   del 2.E sin que ningún error se viera.

Un test no demuestra que el programa esté bien. Demuestra que **los casos que se te
ocurrieron** siguen funcionando. Es poco, y es muchísimo.

## 2. La forma más simple: comparar y avisar

Un test, en el fondo, son tres pasos:

1. **Preparar** los datos de entrada.
2. **Ejecutar** lo que querés probar.
3. **Comparar** lo que salió con lo que esperabas.

Eso se puede escribir con lo que ya sabés, sin ninguna herramienta nueva:

    const obtenido = funcionAProbar(datos)
    const esperado = algo

    if (obtenido === esperado) {
        console.log("OK")
    } else {
        console.log(`FALLA: esperaba ${esperado} y obtuve ${obtenido}`)
    }

**Un test que falla tiene que decir qué esperaba y qué obtuvo.** Un test que solo dice
"FALLA" te obliga a investigar desde cero.

## 3. La herramienta que ya viene con Node

Node trae un sistema de tests incluido: no hay que instalar nada.

    import test from "node:test"
    import assert from "node:assert/strict"

    test("una frase que describe qué se espera", () => {
        assert.equal(valorObtenido, valorEsperado)
    })

- **`test(...)`** recibe dos cosas: un **nombre** (texto) y una **función** con las
  comprobaciones. Esa función es igual a la del `forEach`: `() => { ... }`.
- **`assert.equal(a, b)`** no hace nada si son iguales, y **hace fallar el test** si no.
  Él mismo imprime qué esperaba y qué obtuvo.

Otros que vas a usar:

    assert.equal(a, b)          // a es igual a b
    assert.ok(valor)            // valor es verdadero
    assert.deepEqual(a, b)      // para listas y objetos (ver abajo)
    assert.throws(() => { ... }) // eso de adentro tiene que explotar

### Ojo con las listas y los objetos

    [1, 2] === [1, 2]    // false

Dos listas con el mismo contenido **no** son iguales para `===`: son dos listas
distintas que casualmente tienen lo mismo. Para comparar contenido se usa
`assert.deepEqual`, que mira adentro.

## 4. Cómo se corren

Los archivos de test se llaman `algo.test.js`. Después:

    node --test

Node busca solo todos los archivos `.test.js` y los corre. Salida: un `✔` por test que
pasa, un `✖` con el detalle por cada uno que falla, y un resumen al final.

Para correr uno solo:

    node --test Clases/05-tests/practica/algo.test.js

## 5. Qué conviene testear

No todo. En orden de utilidad:

1. **Los bordes.** El primer valor válido y el último (`1` y la cantidad de tareas), el
   cero, la lista vacía. Ahí viven casi todos los bugs. El tuyo del `<` vs `<=` era uno.
2. **Los casos inválidos.** Texto donde va un número, nada, un número gigante.
3. **Los bugs que ya tuviste.** Cada vez que arregles uno, escribí un test que lo
   reproduzca. Así te asegurás de que no vuelva.
4. El caso normal, que es el que menos falla.

## 6. Qué hace que algo se pueda testear

Una función que recibe lo que necesita y devuelve un resultado se prueba sola, en una
línea: `estaEnRango(3, 3)`.

Una función que lee y escribe **un archivo fijo** no: probarla toca tus datos de verdad.
Por eso, cuando algo es difícil de testear, casi siempre el problema no es el test:
**es que la función está pegada a algo de afuera.** La salida suele ser la misma de
siempre — que reciba por parámetro lo que hoy tiene fijo adentro.
