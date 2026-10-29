# Revisión — Clase 7 (parcial)

**Fecha:** 2026-10-28 (sesión 11)
**Estado:** **7.A y 7.B cerrados. 7.C casi.** Faltan 7.D, 7.E y 7.F.
**Trece tests en verde.**

## Lo que entregó

**7.A — la separación.** `funciones.js` se partió en dos:

    logica.js          ← las 5 funciones puras. CERO imports. Sirve en Node y en el navegador.
    almacenamiento.js  ← guardar y cargarTareas, con su fs. Solo Node.

`asistente.js` quedó con dos líneas de import, una por capa. Los cuatro comandos
funcionan igual y los tests siguieron verdes en cada paso.

**7.B — la página mostrando tareas.** `index.html` (título: "JARVIS") + `web.js`
importando `listarTareas` desde `logica.js`. **La misma función que usa la terminal,
corriendo en el navegador, sin un cambio.**

**7.C — agregar desde la página.** `dibujar()`, los `querySelector`, y el
`addEventListener("click")` con el patrón completo: leer la entrada, llamar a la lógica,
redibujar, limpiar el input. **Lo escribió de una, sin ayuda.**

## El momento que mejor enseñó

Importó `almacenamiento.js` en `web.js` y la página explotó con:

    Access to script at 'node:fs' has been blocked by CORS policy

Dos líneas traían el problema: su propio `import fs` y `almacenamiento.js`, que lo
importa por dentro **sin que se vea**. `logica.js` no, porque no importa nada. Ahí quedó
clara la razón de todo el 7.A: **lo que no depende de nada se puede usar en cualquier
lado.**

## La conversación de diseño de la sesión

Con el input vacío no pasaba nada, y surgió dónde poner la regla. Eligió la cáscara
(`web.js`, con un `alert`). Se le mostró la consecuencia corriendo la terminal: seguía
agregando tareas con texto `undefined`. **Dos comportamientos distintos según la
interfaz.**

Entendió el argumento (*"no se pueden agregar tareas vacías" es una regla del asistente,
no un detalle del navegador*) y la movió a `agregarTarea`.

Y ahí apareció algo bueno: su `texto === ""` **no alcanzaba**, porque la terminal no manda
`""` sino `undefined`. Dos formas distintas de "vacío". Lo resolvió con `||`.

## Decisiones suyas, bien tomadas

- Al preguntarle dónde poner el `<br>` (adentro de `listarTareas` o en `web.js`), eligió
  **la cáscara**, con el razonamiento correcto: en la terminal se vería el `<br>` literal.
- Usó `return` para salir temprano de la función del evento. Primera vez que lo aplica así.
- Escribió un test que no se le pidió (el formato con una tarea completada), cubriendo la
  rama del `[✓]` que estaba sin probar.

## Errores del camino

- `id="tarea"` en el HTML y `querySelector("#input")` en el JS. **No falla al cargar**:
  da `null` en silencio. Se le mostró como ejemplo del error que aparece lejos de su causa.
- `divlista.replaceAll(...)` — aplicó una operación de texto a un elemento del DOM, y sin
  agarrar el resultado.
- Definió `dibujar()` y no la llamó (el Ej 1 de la Clase 4, otra vez).
- Agregó `import fs` en `web.js` por su cuenta.

## Un error mío

Le avisé que mover la validación a `agregarTarea` iba a romper un test, y no rompió
ninguno: el test existente pasa un texto con contenido. **Verificar antes de anticipar.**

## Lo que falta

1. **7.C:** mostrar el mensaje que devuelve `agregarTarea` en `web.js` (hoy no lo agarra
   nadie: con el input vacío no se agrega **y no se avisa**), y el test del texto vacío.
2. **7.D:** botones de completar y eliminar por tarea (`createElement`, `appendChild`).
3. **7.E:** `localStorage`.
4. **7.F:** Tailwind.
