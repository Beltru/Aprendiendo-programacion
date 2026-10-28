# El navegador: HTML, eventos y localStorage (Clase 7)

## 1. Cómo se corre una página con módulos

Un `<script type="module">` **no funciona abriendo el archivo con doble clic**
(`file://`): el navegador lo bloquea por seguridad. La página tiene que servirse por
`http://`.

La forma más simple en VS Code: instalá la extensión **Live Server**, hacé clic derecho
sobre `index.html` → *Open with Live Server*. Se abre en el navegador y además se
recarga sola cada vez que guardás.

## 2. El esqueleto de una página

    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>...</title>
    </head>
    <body>

      <!-- acá va lo que se ve -->

      <script type="module" src="./archivo.js"></script>
    </body>
    </html>

- El `<script>` va **al final del `<body>`**: así, cuando el JS corre, los elementos de
  arriba ya existen.
- `type="module"` es lo que permite usar `import` adentro de ese archivo.
- El `charset=UTF-8` es lo que hace que los acentos y los ✓ se vean bien.

## 3. Los elementos que vas a usar

    <input id="algo" type="text" placeholder="texto gris de ayuda">
    <button id="otro">Texto del botón</button>
    <div id="donde-va-la-lista"></div>

El **`id`** es el nombre con el que el JS encuentra ese elemento. Tiene que ser único en
la página.

## 4. Las tres herramientas del navegador

### Encontrar un elemento

    const elemento = document.querySelector("#elId")

El `#` significa "buscá por id". Te devuelve el elemento, o `null` si no lo encuentra
(error silencioso clásico: un id mal escrito da `null`, y el error aparece después).

### Leer o escribir lo que hay adentro

    elemento.value        // lo que el usuario escribió en un input (leer y escribir)
    elemento.textContent  // el texto de un elemento (leer y escribir)
    elemento.innerHTML    // el HTML de adentro: se usa para meter etiquetas

`textContent` pone texto tal cual. `innerHTML` interpreta las etiquetas: si le pasás
`"<b>hola</b>"`, muestra **hola** en negrita.

Para vaciar un elemento: `elemento.innerHTML = ""`.

### Escuchar un evento

    elemento.addEventListener("click", () => {
        // esto se ejecuta cada vez que hagan clic
    })

Se lee: *"cuando pase `click` en este elemento, ejecutá esta función"*. La función de
adentro tiene la misma forma que la del `forEach` o la del `test`: se la pasás a otro
para que la ejecute cuando corresponda.

Eventos útiles: `"click"` en botones, `"submit"` en formularios, `"keydown"` en inputs.

## 5. Crear elementos desde el JS

Dos caminos. El simple, armando texto HTML:

    contenedor.innerHTML = `<p>${algo}</p>`

Y el prolijo, creando el elemento de verdad (hace falta cuando querés ponerle un evento):

    const boton = document.createElement("button")
    boton.textContent = "Borrar"
    boton.addEventListener("click", () => { ... })
    contenedor.appendChild(boton)

- `createElement` lo fabrica (todavía no se ve).
- `appendChild` lo mete adentro de otro elemento (ahí aparece).

## 6. localStorage: el cajón del navegador

Es lo mismo que el archivo de la Clase 2, con la misma limitación: **solo guarda texto**.

    localStorage.setItem("unaClave", unTexto)   // guardar
    const texto = localStorage.getItem("unaClave")  // leer
    localStorage.removeItem("unaClave")          // borrar

Si la clave no existe, `getItem` devuelve **`null`**.

Y como solo guarda texto, para una lista necesitás lo mismo que ya sabés:

    localStorage.setItem("tareas", JSON.stringify(lista))
    const lista = JSON.parse(localStorage.getItem("tareas"))

**Es el mismo viaje de la Clase 2**: lista → texto → almacén, y almacén → texto → lista.
Solo cambió el almacén.

Dura hasta que el usuario borre los datos del navegador, y es **por navegador**: lo que
guardás en Chrome no lo ve Firefox, ni tu celular.

## 7. Errores nuevos que vas a ver

| Error | Qué significa |
|---|---|
| `Cannot use import statement outside a module` | te falta `type="module"` en el `<script>` |
| `CORS policy` / `blocked` al abrir el archivo | abriste con doble clic; necesitás Live Server |
| `Cannot read properties of null` | un `querySelector` no encontró nada: revisá el `id` |
| `fs is not defined` / `Failed to resolve module "node:fs"` | la página intentó usar algo de Node |
| Nada pasa al hacer clic | el `addEventListener` no se ejecutó, o el id está mal |

**Dónde se ven:** en el navegador, `F12` → pestaña **Console**. Ese es tu `console.log`
de acá en adelante: `console.log` sigue funcionando y aparece ahí.
