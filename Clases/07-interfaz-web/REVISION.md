# Revisión — Clase 7 (parcial)

**Fecha:** 2026-10-28 y 2026-11-02 (sesiones 11 y 12)
**Estado:** 7.A a 7.E cerrados. **Falta solo 7.F (Tailwind)** y las preguntas de cierre.
**Catorce tests en verde.**

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

---

## Sesión 12 (2026-11-02) — 7.C y 7.D cerrados, 7.E arrancado

**Estado:** 7.A a 7.D cerrados. **7.E en curso.** Falta 7.F (Tailwind).
**Catorce tests en verde.**

### Lo que cerró el 7.C

- `web.js` ahora agarra el mensaje que devuelve `agregarTarea` y lo muestra con `alert`.
  Antes, con el input vacío, no agregaba **y no avisaba nada**.
- Escribió el test del texto vacío **solo y bien** (los tres pasos), y después agregó la
  segunda comprobación (`lista.length === 0`) cuando se le señaló que sin eso el test
  pasaría aunque la función hiciera el `push`.

### 7.D — los botones por tarea

`dibujar` dejó de usar `listarTareas` y ahora recorre la lista creando, por cada tarea,
un `div` con su texto y dos botones (`Eliminar` y `Completar`), cada uno con su
`addEventListener`.

**La pregunta que contestó bien:** *¿`listarTareas` queda al pedo?* → *"No, la sigue
usando la terminal"*. De ahí salió una distinción fina que vale: las dos interfaces
comparten las **reglas** (`agregarTarea`, `completarTarea`, `eliminarTarea`), pero no la
**presentación** — `listarTareas` es el formato de salida de la terminal, y la web tiene
el suyo.

### Errores del camino

1. **Intentó escribir el mensaje de error a mano** en `web.js`, buscando un `#mensaje`
   inexistente, y con un `if` que preguntaba por `input.value` **después** de haberlo
   vaciado. Se le recordó que la función ya produce el mensaje: la cáscara solo lo muestra.
2. **Juntó las tres líneas de `createElement` en una sola** instrucción inválida
   (`createElement.appendChild("div", textContent = ...)`). Hubo que mostrarle la forma
   en tres renglones con el hueco marcado.
3. **`document.createElement("div")` sin guardar el resultado**, y después usando `div`,
   que no existía. **Séptima aparición** del valor de retorno descartado.
4. **`i - 1` en vez de `i + 1`.** Se destrabó con la tabla de las dos numeraciones
   (`forEach` 0,1,2 / usuario 1,2,3).
5. **El bloque del botón de completar quedó adentro del listener de eliminar.** Anidado,
   otra vez: la cosa correcta en el lugar equivocado. Y `botonEliminar.textContent =
   "Completar"`, con la variable equivocada.
6. **`)}` en vez de `})`**, y un cierre de más/de menos al final de `dibujar`.
7. Una coma suelta (`},`) que rompía el archivo entero.

### Preguntas suyas que valieron

- *"¿Por qué funcionó?"* sobre `const mensaje =` partido en dos renglones. Se le explicó
  que a JS no le importan los saltos de línea: lee hasta que la instrucción está completa.
- *"¿Por qué `divlista`?"* — buena pregunta sobre el segundo argumento de `appendChild`.

### Dónde quedó

Escribió `guardarEnNavegador` con `localStorage.setItem` y `JSON.stringify`. Le falta
**llamarla en los tres handlers** y después la otra mitad: **cargar** al abrir la página.

---

## 7.E cerrado (sesión 12, final)

`localStorage` funcionando: las tareas sobreviven al recargar y la página arranca vacía
la primera vez.

- `guardarEnNavegador()` con `setItem` + `JSON.stringify`, llamada en los tres puntos
  donde la lista cambia.
- `cargarDesdeNavegador()` con la misma forma que `cargarTareas` de la Clase 2: un `if`
  con dos `return` (lista vacía si `getItem` da `null`, `JSON.parse` si hay algo).
- `const lista = cargarDesdeNavegador()` reemplazó las dos tareas de prueba escritas a
  mano. No hizo falta `let`: las funciones de la lógica modifican la lista en el lugar.

### El autocompletado metiendo código que no entiende

Primero escribió `lista.length = 0` y `push(...JSON.parse(...))`. Al preguntarle qué
hacían, dijo que `length` **"revisa si la lista tiene elementos"** — o sea, no lo sabía, y
el spread no lo mencionó. **Dijo la verdad cuando se le preguntó**, que es lo importante.

Se reemplazó por la forma de `cargarTareas`, que sí entiende. Y quedó la regla:
**preguntarle qué hace cualquier sintaxis que no se le enseñó, antes de seguir.**

### Errores del camino

1. **`if (listaGuardada = null)`** — un solo `=`: asigna en vez de comparar. El error de
   la Clase 1. Hizo falta señalárselo dos veces.
2. Un `if` de más envolviendo el que valía (resto de un intento previo).
3. **El bug de orden**, el más instructivo: llamaba a `guardarEnNavegador()` **antes** de
   la función de lógica en dos de los tres handlers, así que guardaba el estado anterior
   al cambio. La rama de eliminar sí estaba bien, lo que servía de contraste.
4. Una llamada suelta a `cargarDesdeNavegador()` con el resultado descartado (**octava
   aparición** del tema).

### Lo que falta de la clase

**Solo el 7.F: Tailwind.** Sin indicaciones, es su terreno. Y después las cuatro preguntas
de cierre del enunciado.

---

## Cierre de la Clase 7 — sesión 13 (2026-11-09)

**7.F hecho y las cuatro preguntas contestadas. Clase 7 cerrada.**

### El diseño

Lo hizo solo y con soltura: `bg-gray-900`, un contenedor `flex flex-col items-center
justify-center min-h-screen`, el input con `w-[25vw]`, la lista con `max-h-[50vh]
overflow-y-auto`, y botones rojo/verde para eliminar y completar. Se nota que Tailwind es
su terreno.

Lo que sí costó fue **dónde** van las clases:

- Escribió `divlista.className("clase", "otra", ...)`: `className` como función y con
  varios argumentos. Se le explicó que es una **propiedad** (va con `=`) y recibe **un
  solo texto**. (Su instinto no era absurdo: `classList.add` sí recibe varios.)
- Después, corregida la sintaxis, siguió apuntando a `divlista` (el contenedor del HTML)
  en vez de `div` (el renglón de cada tarea). La distinción contenedor / elemento repetido
  le costó dos intentos.

### Las cuatro preguntas

1. **Por qué `logica.js` corre en los dos lados.** No se acordaba; con una pista (el error
   de CORS, la primera línea de cada archivo) llegó: *"Almacenamiento importa fs de node y
   logica.js no"*. Bien.
2. **Cuántos lugares toca al cambiar una regla.** *"Solo logica.js"*. Bien, y ya lo había
   comprobado en vivo con la regla del texto vacío.
3. **Por qué la consola necesita disco y la web no tanto.** Acertó la mitad de la consola
   (arranca de cero cada vez), pero contestó la web con `localStorage`. **Le faltaba el
   matiz:** la página **queda viva** esperando clics, así que la lista en memoria sobrevive
   entre uno y otro; `localStorage` solo hace falta para sobrevivir al F5.
4. **Qué cubren sus tests de la versión web.** Contestó *"la interacción del usuario y la
   escritura de la lista"* — **exactamente lo contrario**. Se le mostró con una tabla: los
   tests cubren las reglas, y nada de `web.js`. Se conectó con el bug de orden del
   `guardarEnNavegador`, que ningún test detectó porque vivía en la cáscara.

### Para repreguntar

Las respuestas 3 y 4 salieron mal o a medias. Volver sobre las dos:

- *¿Por qué entre un clic y otro no hace falta guardar nada?*
- *¿Cuál de tus archivos no tiene ni un test?*
