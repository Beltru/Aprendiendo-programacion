# Funciones y módulos (Clase 4)

## 1. Para qué: un solo lugar

Cuando el mismo pedazo de lógica aparece dos o tres veces, tenés un problema que ya
detectaste solo: **si lo cambiás, lo tenés que cambiar en todos lados**, y algún día vas
a cambiar uno y olvidarte del otro.

Una **función** es un pedazo de programa con **nombre propio**, escrito una sola vez,
que podés usar desde donde quieras. Le das lo que necesita, hace lo suyo, y (si querés)
te devuelve un resultado.

Tres cosas que te da, en orden de importancia:

1. **Un solo lugar para cambiar.**
2. **Un nombre.** `esValido(n, tareas.length)` se lee mejor que tres comparaciones
   pegadas con `&&`. El nombre explica la intención; el código explica el mecanismo.
3. **Podés probarla sola**, sin correr todo el programa.

Ya venís usando funciones desde el primer día: `console.log(...)`,
`fs.readFileSync(...)`, `JSON.parse(...)`. Alguien las escribió una vez y vos las usás.
Esto es escribir las tuyas.

## 2. La forma

    function nombre(parametro1, parametro2) {
        // cuerpo
        return algo
    }

- **Los paréntesis de la definición** (`parametro1`) son los datos que la función
  necesita para trabajar. Adentro del cuerpo se usan como si fueran variables normales.
- **`return`** devuelve un resultado **y termina la función ahí mismo**: nada de lo que
  esté abajo se ejecuta.
- Si no hay `return`, la función hace su trabajo y no devuelve nada. Está bien: hay
  funciones que existen para *hacer* algo (guardar un archivo, imprimir), no para
  *calcular* algo.

Para usarla, se la **llama** por su nombre con los datos concretos:

    const resultado = nombre(valorA, valorB)

Lo que pasás al llamar (`valorA`) entra en `parametro1`. **Los nombres no tienen que
coincidir**: adentro de la función el dato se llama como dice la definición.

## 2.bis Cómo se piensa una función (la receta)

Ejemplo completo, de otro tema, para ver el mecanismo. **Antes**, con código repetido:

    const totalA = 100 * 1.21
    console.log(`Total: $${totalA}`)

    const totalB = 250 * 1.21
    console.log(`Total: $${totalB}`)

Las dos mitades hacen lo mismo. Lo único que cambia es **el precio**: 100 y 250.

**Después:**

    function mostrarTotal(precio) {
        const conIva = precio * 1.21
        console.log(`Total: $${conIva}`)
    }

    mostrarTotal(100)
    mostrarTotal(250)

### Los cuatro pasos para convertir repetición en función

1. **Copiá una de las dos repeticiones** tal cual, sin pensar todavía.
2. **Envolvela** en `function unNombre() {` ... `}`. El nombre, un verbo que diga qué hace.
3. **Compará las repeticiones y mirá qué es lo único distinto entre ellas.** Eso, y solo
   eso, es el parámetro. Lo que es igual en todas queda fijo adentro.
4. **Borrá las repeticiones** y en su lugar escribí la **llamada**.

### Qué es "llamar" a una función

Escribir su nombre con paréntesis, y adentro los datos concretos:

    mostrarTotal(100)

Cuando el programa llega a esa línea:

1. salta al cuerpo de la función,
2. `precio` vale `100` durante esa corrida,
3. ejecuta el cuerpo de arriba a abajo,
4. vuelve a la línea siguiente de donde saltó, y sigue.

Definir una función **no la ejecuta**. Es como escribir una receta: el plato no aparece
hasta que alguien la cocina. Se ejecuta recién cuando la llamás, y una vez por llamada.

### Si no cambia nada entre las repeticiones

Entonces no lleva parámetros: `function separador() { ... }` y se llama `separador()`,
con los paréntesis vacíos. Los paréntesis van siempre, aunque no haya nada adentro.

## 3. Devolver un `true` / `false`

Una función puede devolver una condición entera:

    function esMayor(edad) {
        return edad >= 18
    }

    if (esMayor(20)) { ... }

Fijate que **no hace falta** `if (edad >= 18) return true else return false`. La
comparación **ya vale** `true` o `false`: se devuelve directo.

## 4. Lo de adentro no se ve desde afuera

Una variable creada adentro de una función **solo existe adentro**:

    function algo() {
        const x = 5
    }
    console.log(x)   // ReferenceError: x is not defined

Eso es bueno: te asegura que nadie de afuera puede romper lo que pasa adentro. Por eso
lo que la función necesita **se le pasa por parámetro**, y lo que produce **se devuelve
con `return`**. Esa es la puerta de entrada y la de salida.

## 5. Separar en archivos (módulos)

Cuando un archivo crece, se parte en varios. Un archivo que quiere compartir algo lo
marca con **`export`**:

    // archivo herramientas.js
    export function saludar(nombre) {
        return `Hola ${nombre}`
    }

Y el que lo quiere usar lo pide con **`import`**, igual que `fs`, pero con una ruta que
empieza en `./` (que significa "una carpeta acá al lado"):

    // archivo principal.js
    import { saludar } from "./herramientas.js"

Dos diferencias con `import fs from "node:fs"`:

- Las **llaves** `{ }` son para traer cosas con nombre propio.
- La ruta lleva `./` y **la extensión `.js` completa**. Sin eso, Node no lo encuentra.

La ruta de un `import` se cuenta **desde el archivo que importa**, no desde donde
estás parado en la terminal (al revés que las rutas de `fs`). Es una trampa clásica.
