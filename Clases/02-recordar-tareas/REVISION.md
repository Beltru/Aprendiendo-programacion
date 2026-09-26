# Revisión — Clase 2 (parcial)

**Fecha:** 2026-09-14 (sesión 3)
**Estado:** 2.A y 2.B hechos. **2.C a medio hacer.** Faltan 2.D y 2.E.

## Lo que hizo

- **Se adelantó**: en `practica/escribir.js` juntó escribir, leer, `agregar` y `listar`
  en vez de hacer solo el 2.A. No se le hizo borrar; se usó para los experimentos.
- **`ReferenceError: fs is not defined`**: olvidó el `import`. Se le enseñó a leer un
  error de Node (archivo:línea, el `^`, el tipo de error, ignorar `at node:internal`).
- **Escribió el `import` en la terminal** en vez del archivo. Error de PowerShell
  (`CommandNotFoundException`). De nuevo la confusión terminal vs archivo. Parte de la
  culpa fue de la Referencia, que decía "primera línea" sin decir de qué: corregida.
- **Descubrió solo que `writeFileSync` sobreescribe**: *"puede ser porque se sobreescribe
  cada vez?"*. Lo conectó con su propio plan de cargar + guardar la lista entera.
- **Malinterpretó el 2.C**: creó `lista.js` con una lista y apuntó `escribir.js` a
  *leer* `lista.js`. Vio el código impreso como texto. Se le explicó que `readFileSync`
  no ejecuta, lee caracteres. El error de enunciado fue en parte de Claude ("a mano" no
  estaba claro).

## Estado de `practica/` al cortar

- `lista.js`: tiene la lista a mano y `fs.writeFileSync(..., lista, ...)` — el
  experimento correcto — **pero le falta el `import`** y tiene un `if` de comandos que
  sobra (se le pidió sacarlo). Todavía no lo corrió.
- `escribir.js`: **quedó apuntando a `lista.js`** para leer y escribir. Si corre
  `agregar`, pisa el código de `lista.js`. Se le avisó.

## Pendiente

- Experimento del `length`: imprimir `contenido.length` en `escribir.js` y predecir
  antes. No sabía qué número daría; se le preguntó "en un texto, ¿qué es un elemento?".
  **No contestado.**
- Correr `lista.js` y chocarse con el error de pasarle una lista a `writeFileSync`.
  Recién ahí, parte 4 de la Referencia (JSON).

---

## Cierre — sesión 4 (2026-09-25)

**Clase 2 cerrada.** Terminó 2.C, 2.D y 2.E.

- En 2.C descubrió el punto de la clase con el experimento del `length`: `texto.length`
  daba 23 (caracteres) y `lista.length` 3 (tareas). Antes de eso escribió
  `JSON.stringify(lista)` en una línea suelta, sin recibir el resultado — se le explicó
  con la analogía de la carta traducida que no se agarra.
- Errores del camino: `lista.texto` en vez de `texto.length` (le faltaba leer el punto
  como "de"); `tareas = JSON.parse(...)` sin `const` (`tareas is not defined`);
  reasignar una `const` (eligió pasarla a `let`).
- En 2.E llegó solo a que hay que arrancar con lista vacía, pero creía que igual hacía
  falta un archivo. El bug final fue de **orden**: leía el archivo antes del `if` que lo
  creaba. Lo encontró siguiendo el programa línea por línea.
- Las cuatro preguntas, bien. En la 4 llegó solo a que el repo debe llevar **el programa,
  no sus datos**, y creó el `.gitignore` (primero con `\` de Windows; se le explicó que
  Git usa `/`).
- **Commiteó y pusheó él mismo** por primera vez: `74f64a9`.
