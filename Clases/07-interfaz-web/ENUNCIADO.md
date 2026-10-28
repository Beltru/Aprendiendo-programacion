# Clase 7 — La interfaz web

## Qué vas a aprender

A usar la misma lógica en dos interfaces distintas. Y a reconocer, un nivel más arriba,
la mezcla que ya arreglaste en la Clase 6: un archivo que junta cosas que sirven en
cualquier lado con cosas que solo sirven en Node.

**Leé `EXPLICACION.md` antes de empezar.** Y `Referencia/08-navegador.md`, partes 1 a 4.

**La red de seguridad de esta clase:** al terminar cada paso, `node --test` tiene que
seguir dando **doce en verde** y la versión de terminal tiene que funcionar igual. Si se
rompen, tocaste la lógica — y la lógica no hay que tocarla.

---

### Paso 7.A — Partir `funciones.js` en dos

Hoy ese archivo mezcla cinco funciones puras con dos que usan `fs`. El navegador no puede
importar nada de ahí por culpa de esas dos.

1. Creá `Asistente/logica.js` y mudá ahí las cinco que **no** usan `fs`:
   `agregarTarea`, `completarTarea`, `eliminarTarea`, `listarTareas`, `estaEnRango`.
2. Creá `Asistente/almacenamiento.js` con `guardar` y `cargarTareas`.
3. Borrá `funciones.js`.
4. Arreglá los `import` de `asistente.js` y de los dos archivos de test.

**Listo cuando:** `logica.js` **no menciona `fs` en ninguna línea**, los cuatro comandos
funcionan igual, y `node --test` da doce en verde.

> Si algún test se rompe, no es un problema del test: es que algo quedó mal importado.

---

### Paso 7.B — La página, mostrando tareas

Creá `Asistente/index.html` con lo mínimo: el esqueleto, un `<div>` con un `id` para la
lista, y el `<script type="module">` al final apuntando a `Asistente/web.js`.

En `web.js`: importá `listarTareas` desde `logica.js`, armá **a mano** una lista con dos
tareas, y mostrá en el `<div>` lo que devuelve.

Abrilo con **Live Server** (clic derecho en `index.html`). Con doble clic no funciona:
la parte 1 de la Referencia explica por qué.

**Listo cuando:** ves las dos tareas en el navegador.

Y pensá una cosa: `listarTareas` devuelve un texto con `\n` adentro, que en una terminal
son saltos de línea. **En HTML el `\n` no se ve.** ¿Qué conviene hacer?

---

### Paso 7.C — Agregar desde la página

Agregá al HTML un `<input>` y un `<button>`, los dos con su `id`.

En `web.js`, cuando hagan clic en el botón:

1. leer lo que escribió el usuario,
2. llamar a `agregarTarea`,
3. volver a dibujar la lista,
4. vaciar el input.

Vas a necesitar una función propia que dibuje la lista, porque ahora la vas a llamar
desde varios lugares. Esa función es tu nuevo `console.log`.

**Listo cuando:** escribís algo, hacés clic, y aparece en la lista.

Probá también el caso de hacer clic con el input vacío. ¿Qué pasa? ¿Qué debería pasar?

---

### Paso 7.D — Completar y eliminar

Ahora cada tarea necesita sus propios botones, y para eso `listarTareas` no te sirve:
devuelve un solo texto, y vos necesitás elementos separados a los que pegarles un evento.

Así que en `web.js` recorré la lista y, por cada tarea, creá en pantalla su texto y dos
botones. Parte 5 de la Referencia (`createElement` y `appendChild`).

Cada botón, al hacer clic, llama a `completarTarea` o `eliminarTarea` con el número de
esa tarea, y vuelve a dibujar.

**Ojo con la numeración:** tus funciones esperan el número como lo escribe el usuario
(desde 1), y el `forEach` te da la posición (desde 0).

**Listo cuando:** podés completar y borrar tareas con el mouse.

---

### Paso 7.E — Que no se pierdan al recargar

Hoy, si recargás la página, se borra todo. Es el mismo problema de la Clase 1, en otro
lugar.

Usá `localStorage` (parte 6 de la Referencia): guardar después de cada cambio, y cargar
al abrir la página.

**Listo cuando:** agregás tareas, recargás con F5, y siguen ahí.

Pensá antes de escribir: ¿qué tiene que pasar la **primera** vez que alguien abre la
página, cuando no hay nada guardado? Ya resolviste este problema en el paso 2.E.

---

### Paso 7.F — Que no sea horrible

Agregá Tailwind con el `<script src="https://cdn.tailwindcss.com"></script>` en el
`<head>` y dale un diseño.

Acá no te voy a dar indicaciones: es tu terreno. Hacelo como te guste.

**Listo cuando:** te gusta cómo quedó.

---

## Preguntas para cuando entregues

1. ¿Por qué `logica.js` funciona en los dos lados y `almacenamiento.js` no?
2. Las dos versiones (terminal y web) comparten la lógica. Si mañana cambiás una regla
   —por ejemplo, que no se puedan agregar tareas vacías—, ¿cuántos lugares tocás?
3. ¿Por qué un programa de consola **tiene** que guardar en disco para recordar, y una
   página web puede recordar un rato sin guardar nada?
4. Tus doce tests siguen en verde y no probaste nada de la página. ¿Qué parte de la
   versión web está cubierta por esos tests y qué parte no?
