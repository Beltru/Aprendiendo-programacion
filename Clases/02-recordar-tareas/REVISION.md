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
