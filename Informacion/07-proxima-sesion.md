# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-09-03 (fin de la sesión 1)

## Dónde estamos

Rumbo definido y repo estructurado. **Todavía no se escribió una sola línea de código.**
Beltrán tuvo que irse; dejó todo armado justamente para arrancar directo la próxima.

## Cómo arrancar la próxima sesión

**No repasar todo esto en voz alta.** Retomá como quien sigue una charla de ayer:

> "La Clase 1 te espera. Empezás por el paso 1.A. ¿Arrancamos?"

Y que abra `Clases/01-primer-programa/ENUNCIADO.md`. Está todo ahí, partido en pasos.

## Clase 1 — asignada, sin empezar

`Clases/01-primer-programa/ENUNCIADO.md`. Tres pasos:

- **1.A** — `npm init -y`, `"type": "module"`, crear `Asistente/asistente.js` que
  imprima algo, y correrlo.
- **1.B** — imprimir los argumentos de la línea de comandos.
  **Que lo busque él** (`process.argv` NO está en `Referencia/`, es a propósito).
- **1.C** — comandos `agregar` y `listar`, más el aviso cuando el comando no existe.

Dos preguntas para cuando entregue: qué son los dos primeros argumentos, y si la
tarea sobrevive entre una corrida y otra. **La segunda no se contesta** — que la
descubra corriendo el programa. Ese descubrimiento es la bisagra hacia la Clase 2
(persistencia).

## Calibración importante

Beltrán avisó que **la sintaxis le cuesta mucho y está casi de cero** con eso.

- Pasos chicos, con un "listo cuando" verificable. Nada de enunciados grandes.
- Ante una traba, preguntar primero: **¿es sintaxis, o no sabés qué querés que pase?**
  Sintaxis → `Referencia/`. Lo segundo → ahí hay que pensar, sin atajo.
- Si necesita sintaxis nueva, **ampliá `Referencia/`** en vez de escribirle el código.
  Formas genéricas, nunca su caso concreto.

## Al terminar

Crear `Clases/01-primer-programa/REVISION.md` cuando entregue, y actualizar
`05-bitacora.md`, `06-conceptos.md` y este archivo.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
