# Archivos y JSON (Clase 2)

> Primero el **para qué**, después el **cómo**. Leé las partes 1 y 2 antes de escribir.

---

## 1. Para qué: el cajón

Lo descubriste en la Clase 1: la memoria de un programa muere cuando el programa
termina. Lo único que sobrevive es lo que está **en el disco**, en un archivo.
(La prueba: tu `asistente.js` sigue ahí cada vez que lo corrés.)

Entonces tu programa necesita dos habilidades nuevas:

- **escribir** un archivo → guardar en el cajón
- **leer** un archivo → sacar del cajón

## 2. Por qué hay que "traer" algo: `import`

`process` y `console` vienen incluidos: los usás y ya. Pero Node trae muchas más
herramientas que **no** están disponibles de entrada, para no cargar todo en cada
programa. Las que querés usar, las pedís al principio del archivo.

La caja de herramientas para archivos se llama **`fs`** (*file system*, sistema de
archivos). Se pide escribiendo esto en la **primera línea de tu archivo `.js`** (no en la terminal):

    import fs from "node:fs"

Se lee: *"traeme la herramienta `fs` que viene con Node, y llamala `fs`"*.
El `node:` adelante significa "viene con Node, no la instalé de ningún lado".

Esto funciona gracias al `"type": "module"` del `package.json` (paso 1.A).
Ahí es donde se usa.

## 3. Escribir y leer

    fs.writeFileSync("ruta/del/archivo.txt", "el texto a guardar")

Crea el archivo si no existe. **Si ya existe, lo pisa entero**: no agrega al final,
reemplaza todo lo que había.

    const contenido = fs.readFileSync("ruta/del/archivo.txt", "utf8")

Lee el archivo y te lo da como texto. El `"utf8"` le dice que lo quieres como texto
legible. (Probá sacárselo alguna vez, para ver qué pasa.)

    fs.existsSync("ruta/del/archivo.txt")

Da `true` si el archivo existe y `false` si no.

El `Sync` del final significa que el programa **espera** a que termine de leer o
escribir antes de seguir a la línea siguiente. Es la forma más simple. Existe otra
forma que no espera, y la vamos a ver más adelante, cuando haga falta.

### Ojo con la ruta

La ruta se cuenta **desde la carpeta donde estás parado en la terminal**, no desde
donde está el archivo `.js`. Si corrés desde la raíz del repo, `"Asistente/algo.txt"`
es un archivo dentro de la carpeta `Asistente`.

---

## 4. JSON: de lista a texto y de texto a lista

> **Si estás en el paso 2.C, no leas esto todavía.** Hacé primero lo que dice el
> enunciado y chocate con el problema. Después volvé.

Un archivo solo guarda **texto**. Una lista no es texto: es una estructura con
elementos adentro, que tiene `length`, a la que le podés hacer `push`.

Para guardar una lista hay que **convertirla en texto**, y al leerla, **convertir ese
texto de nuevo en lista**. La forma estándar de escribir datos como texto se llama
**JSON**, y JavaScript trae las dos conversiones:

    JSON.stringify(valor)    // de valor (lista, objeto...) → a texto
    JSON.parse(texto)        // de texto → a valor de verdad

Un texto JSON se ve casi igual que el código: `["pagar la luz","comprar leche"]`.
Pero **parecerse no es serlo**: hasta que no le hacés `JSON.parse`, es solo una tira
de caracteres. Un texto también tiene `length`, pero cuenta letras, no tareas.

## Errores nuevos que vas a ver

| Error | Qué significa |
|---|---|
| `ENOENT: no such file or directory` | Quisiste leer un archivo que no existe (o la ruta está mal). |
| `The "data" argument must be of type string...` | Quisiste escribir en un archivo algo que no es texto. |
| `Unexpected token ... in JSON` / `is not valid JSON` | Le hiciste `JSON.parse` a un texto que no es JSON (o está vacío). |
| `fs is not defined` | Te olvidaste el `import`. |
