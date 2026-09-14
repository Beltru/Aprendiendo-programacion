# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-09-14 (fin de la sesión 3; se fue a cenar a mitad del 2.C)

## Dónde estamos

- **Clase 1 cerrada.** `Asistente/asistente.js` agrega a una lista en memoria y cuenta.
  Descubrió solo que no recuerda entre corridas y **diseñó la solución en palabras**.
- **Clase 2 en curso** (`Clases/02-recordar-tareas/ENUNCIADO.md`).
  2.A y 2.B hechos. **Cortó a mitad del 2.C.** Faltan 2.D y 2.E.

Detalle: `Clases/02-recordar-tareas/REVISION.md`.

## Cómo arrancar la próxima sesión

Retomá sin repasar todo:

> "Te quedaste en el 2.C, a punto de correr `lista.js`. Antes: a `lista.js` le faltaba
> algo arriba de todo. ¿Te acordás qué?"

Tiene que responder: el `import`. Si no se acuerda, que compare con `escribir.js`.

## Los dos experimentos pendientes, en este orden

1. **`lista.js`**: agregar el `import`, sacar el `if` de comandos (sobra), correrlo con
   `node Clases/02-recordar-tareas/practica/lista.js`. Va a chocar con
   `The "data" argument must be of type string`. **Que diga por qué antes de leer la
   parte 4 de `Referencia/03-archivos-y-json.md`.**
2. **El `length`**: en `escribir.js`, imprimir `contenido.length` y **predecir antes**.
   Quedó abierta la pregunta *"en un texto, ¿qué sería un elemento?"*. No contestársela.

Juntos, esos dos experimentos son el descubrimiento de la clase: **un archivo solo guarda
texto, y un texto que parece lista no es una lista.** Recién ahí, JSON.

## ⚠ Ojo

`practica/escribir.js` **quedó apuntando a `lista.js`** para leer y escribir. Si corre
`agregar`, pisa el código de `lista.js`. Recordarle que lo vuelva a apuntar a `lista.txt`.

## Cómo enseñarle — calibrado en sesiones 2 y 3

1. **Para qué sirve ANTES de cómo se usa.** Siempre. Piso conceptual en
   `Referencia/02-la-terminal-y-node.md`.
2. **Separar ante cada traba:** *¿no sabés qué querés que pase, o cómo se escribe?*
3. **Diseñar en palabras antes de codear, con escenarios para simular.** En la sesión 3
   diseñó la persistencia entera así ("ayer guardaste X, hoy corrés Y, ¿qué hay en la lista?").
4. **Verificar corriendo, no corregir.** Todo lo que mejor aprendió lo vio en la salida.
   Pedirle que prediga antes de correr.
5. **Enunciados literales.** Qué archivo, qué va adentro, qué se corre, qué se debería
   ver. Dos veces se trabó por frases ambiguas de Claude ("primera línea", "a mano").
6. **Se adelanta y junta pasos.** No frenarlo en seco; cuando lo confunde, volver a
   "una cosa por vez" y explicar por qué.
7. **Terminal vs archivo no está firme.** Volvió a escribir JS en PowerShell.
8. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista en `06-conceptos.md`. Las más urgentes: **por qué conviene una constante en vez de
un texto suelto** (la contestó mal en sesión 2), y **terminal vs archivo**.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
