# Revisión — Clase 9 (parcial)

**Fechas:** 2026-11-24 y 2026-11-26 (sesiones 16 y 17)
**Estado:** 9.A a 9.D cerrados. 19 tests en verde.
Faltan 9.E (ordenar), 9.F (vencidas), 9.G (prioridad, solo) y las preguntas de cierre.

## Lo que entregó

- **9.A** (`practica/fechas.js`): vio el día 30 por la zona horaria, el `Date` que vuelve
  `string` de JSON, la comparación de textos sin ceros, y la fecha de hoy en variable.
- **9.B:** `agregarTarea(tareas, texto, fecha)`; la cáscara pasa `process.argv[4]`;
  `listarTareas` muestra `(Sin fecha)` o la fecha. Test `"Fechas"`. Tests de formato
  actualizados copiando el `+ actual`.
- **9.C:** `editarTarea(tareas, numero, nuevoTexto)` copiando `completarTarea`, dos tests,
  comando `editar`. **Apareció solo en la ayuda** gracias al 8.B.
- **9.D:** `filtrarNoHecha` con `filter` (+ test). Comando `pendientes`. Se chocó con la
  trampa de los números (`completar 1` desde pendientes completa otra). Se resolvió con
  `listarPendientes(tareas)`: `forEach` sobre **todas** + `if` + `push` del renglón con
  `i + 1` + `join`. Los números ahora coinciden con `listar`.

## Lo flojo, y por qué

**1. Parámetro vs valor, otra vez.** En el test de editar usó `nuevoTexto` (el nombre del
parámetro de `logica.js`) → `ReferenceError`. Es exactamente la repregunta que contestó
mal al arrancar ("le llegaría un archivo"). **Sigue sin estar firme** aunque se explicó
tres veces. Necesita un ejercicio dedicado en `practica/`, de otro dominio.

**2. Métodos sin objeto adelante.** `forEach(...)` suelto (como `getDate()` suelto en la
sesión 16). Y después `lista.forEach` sobre la lista **vacía** que acababa de crear, dos
veces seguidas, aun con tabla. Se destrabó recién diciéndole la palabra (`tareas`).

**3. Mezcla de cosas de otros archivos:** `assert.equal[4]` adentro de `logica.js` (quiso
poner `process.argv[4]`, que igual no va en la lógica). `.text` en vez de `.texto`.

**4. Imports olvidados, tres veces** (`editarTarea` en el test, `editarTarea` y
`listarPendientes` en `asistente.js`). Regla para recordarle: función nueva → import.

**5. Cierres de bloque** (`push(t)  })` dejando el `if` abierto → `SyntaxError` que rompió
todo). El dibujo con un cierre por renglón y `Shift + Alt + F` lo arreglaron.

**6. `length` de un texto vs de una lista** (copió el test de `filtrarNoHecha` para
`listarPendientes`: `27 !== 1`). Quedó pendiente al irse.

**7. "Listo" sin correr**, varias veces (la constante `editar` sin crear rompía todo el
programa).

## Lo que salió bien

- Resolvió solo el ternario de `(Sin fecha)` al final de la sesión 16.
- `editarTarea` copiando `completarTarea`: reconoció bien que editar **cambia un dato** y
  eliminar **saca**.
- Respondió bien "¿qué test se pone en rojo si borrás la línea 46?" y por qué.
- Entendió la trampa de los números en cuanto vio la tabla `listar` / `pendientes`.
- La analogía de **la lista del colegio** ("el profe lee los ausentes por su número") fue
  lo que destrabó el diseño de `listarPendientes`. El camino de `indexOf` lo perdió.

## Decisión de diseño que quedó

`filtrarNoHecha` ya no la usa la terminal (la usa solo su test). Se puede reutilizar en
9.F (`vencidas` = no hechas + fecha pasada) o borrar. Que lo decida él.
