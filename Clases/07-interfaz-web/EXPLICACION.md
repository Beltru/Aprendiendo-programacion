# Clase 7, el panorama completo

> El mapa de la clase. Leelo entero antes de los pasos.

---

## 1. Qué vamos a hacer

Tu asistente va a tener una página web: un campo para escribir, un botón para agregar, la
lista de tareas en pantalla, y botones para completar y borrar cada una. Con Tailwind.

**Y la lógica no se va a tocar.** Eso es lo que estamos por comprobar.

## 2. Por qué esto es el premio de la Clase 6

Acordate de la pregunta 4 que contestaste: *si quisieras el asistente en una página web,
¿qué reescribirías?* Dijiste bien: la cáscara, no la lógica.

Esta clase es ejecutar esa respuesta. `asistente.js` se reemplaza por una página; tus
cuatro funciones de lógica siguen **idénticas**. Si la separación de la Clase 6 estuvo
bien hecha, esto va a funcionar casi sin pelea. Si no, nos vamos a enterar enseguida.

Fijate lo que significa: el mismo `agregarTarea` va a servir en la terminal **y** en el
navegador, sin una línea distinta. Eso es reutilizar código de verdad.

## 3. El problema que vamos a encontrar

Hay uno, y es importante: **en el navegador no existen los archivos.**

Tu `funciones.js` empieza con `import fs from "node:fs"`. `fs` es de Node, no del
navegador. Si la página intenta importar ese archivo, explota.

Y mirá por qué: `funciones.js` tiene **dos clases de cosas mezcladas**:

| Qué hay adentro | ¿Sirve en el navegador? |
|---|---|
| `agregarTarea`, `completarTarea`, `eliminarTarea`, `listarTareas`, `estaEnRango` | **Sí.** Son puras: reciben datos y devuelven datos. |
| `guardar`, `cargarTareas` | **No.** Usan `fs`, que solo existe en Node. |

Es el mismo tipo de mezcla que arreglamos en la Clase 6, un nivel más arriba: en vez de
mezclar lógica con pantalla dentro de una función, el archivo mezcla lógica con disco.

**La solución es la misma: separar.** `funciones.js` se parte en dos:

    logica.js          ← las cinco funciones puras. Sirve en Node Y en el navegador.
    almacenamiento.js  ← guardar y cargarTareas. Solo Node.

Y el navegador guarda las tareas en otro lado: **`localStorage`**, que es el almacén que
trae el propio navegador. La idea es idéntica a la de la Clase 2 (algo que sobrevive
cuando el programa termina); solo cambia dónde.

## 4. Cómo queda el proyecto

    Asistente/
      logica.js          ← lo que vale. Lo usan las DOS versiones.
      almacenamiento.js  ← disco (Node)
      asistente.js       ← cáscara de terminal   (sigue funcionando)
      index.html         ← la página
      web.js             ← cáscara de navegador  (nueva)

**Dos cáscaras, una lógica.** Esa es la foto final de la clase.

## 5. Lo nuevo del navegador

En la terminal, la entrada y la salida eran `process.argv` y `console.log`. En el
navegador son otras dos cosas:

| | Terminal | Navegador |
|---|---|---|
| **Entrada** | `process.argv` | lo que el usuario escribe en un `<input>` |
| **Salida** | `console.log` | texto y elementos dentro de un `<div>` |
| **Cuándo corre** | una vez, y muere | queda vivo, esperando clics |

Esa última fila es el cambio más grande de mentalidad. Un programa de consola arranca,
hace y muere — por eso necesitabas guardar en disco. Una página **queda abierta**, y
reacciona cuando el usuario hace algo. Eso se llama **evento**: *"cuando hagan clic acá,
ejecutá esta función"*.

Las tres herramientas nuevas son solo eso:

1. **Encontrar** un elemento del HTML desde el JS.
2. **Escuchar** un evento (un clic, por ejemplo).
3. **Escribir** en la pantalla.

Están en `Referencia/08-navegador.md`.

## 6. El patrón que vas a usar todo el tiempo

Una interfaz web suele funcionar así, y lo vas a repetir en cada paso:

    1. algo pasa (clic, tecla)
    2. llamo a la lógica, que cambia la lista
    3. vuelvo a dibujar la lista entera en pantalla
    4. guardo

**Paso 3: redibujar todo, no parchear.** Es más simple y menos propenso a errores que
intentar modificar solo el pedacito que cambió. Con listas chicas no se nota nada.

## 7. Qué compra cada paso

1. **7.A** — partir `funciones.js` en dos. La terminal y los tests siguen funcionando
   igual. Sin esto, la página no puede importar nada.
2. **7.B** — la página mostrando tareas escritas a mano. Confirma que el navegador puede
   usar tu lógica.
3. **7.C** — el campo y el botón de agregar. Primer evento.
4. **7.D** — botones de completar y eliminar en cada tarea.
5. **7.E** — `localStorage`: que las tareas sobrevivan al recargar la página.
6. **7.F** — Tailwind, para que no sea horrible.

## 8. Lo que NO cambia

`Asistente/asistente.js` y los doce tests. Al terminar la clase, la versión de terminal
tiene que seguir funcionando **exactamente igual**, y `node --test` tiene que seguir
dando doce en verde. Es la red de seguridad: si se rompen, tocaste la lógica, y la lógica
no había que tocarla.
