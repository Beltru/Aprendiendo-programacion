# Bitácora

Orden cronológico. La entrada más nueva va **arriba**.

---
## 2026-09-06/07 — Sesión 2: la visión Jarvis y el primer código propio

**Qué pasó**

Arrancó contando **qué asistente quiere**: un Jarvis. Que le recuerde cosas, le diga
qué tareas tiene, le organice los repos y ponga agentes de Claude a trabajar en código
automáticamente. Quedó registrado en `04-proyecto-asistente.md`, junto con la división
que ahora ordena el proyecto: **reactivo → proactivo → autónomo**, y la advertencia de
no saltar a lo espectacular antes de tener estado, errores y permisos.

Después, la primera sesión de código real. **Escribió su primer programa.**

**Lo que hizo**

- Cerró **1.A** (`npm init -y`, `"type": "module"`, archivo que imprime).
- Cerró **1.B**: buscó `process.argv` en Google como decía el enunciado, imprimió la
  lista completa, y **entendió por qué su palabra cae en la posición 2**.
- Cerró **1.C.1 y 1.C.2**: cadena `if / else if / else` con los cuatro casos cubiertos.
- Queda **1.C.3** (guardar y listar tareas de verdad).

Detalle completo en `Clases/01-primer-programa/REVISION.md`.

**Lo que se aprendió sobre cómo enseñarle** ← lo más importante de esta entrada

A mitad de sesión dijo, textual: *"no entiendo qué es lo que querés que logre hacer, no
sé por qué usamos eso de node Asistente/asistente.js, no entiendo para qué sirve, no
entiendo por qué usamos process.argv (...) no sé correr cosas en consolas"*.

**El error fue mío: arranqué explicando por la mitad.** Di por sabido qué es una
terminal, qué es Node, y por qué un programa de consola necesita `argv`. Él nunca lo
había visto. La frustración no vino del ejercicio: vino de no tener el piso.

Se escribió `Referencia/02-la-terminal-y-node.md` con todo eso desde cero. **Antes de
introducir cualquier herramienta nueva, explicar primero por qué existe y qué problema
resuelve.** El "para qué sirve" va antes que el "cómo se usa", siempre.

También apareció, textual: *"no me quiero empezar a frustrar, pero me enoja no tener ni
idea de lo que quiero hacer"*. Sirvió nombrarlo: esa es exactamente la parte atrofiada
que vinimos a entrenar, y que le moleste significa que la está usando. **No minimizar
la frustración ni consolar de más: explicarle qué músculo le duele y por qué.**

Y funcionó separar, cada vez que se trababa: *¿es que no sabés qué querés que pase, o
que no sabés cómo se escribe?* Hacia el final él mismo llegó a decir la lógica correcta
en palabras antes de saber escribirla. Ahí la traba ya era solo sintaxis → `Referencia/`.

**Cambios en el repo**

- `04-proyecto-asistente.md`: la visión Jarvis, los tres escalones, las etapas 9–11.
- `Referencia/02-la-terminal-y-node.md`: **nuevo**. Terminal, Node, `node archivo.js`,
  por qué consola y no web, y por qué existe `process.argv`. Es el piso.
- `Referencia/01-js-lo-minimo.md`: sección nueva **"Comparar y combinar condiciones"**
  (`&&`, `||`, `!`, el `||` como valor por defecto, y `??`). Creía que `||` era "and".
- `Clases/01-primer-programa/REVISION.md`: **nuevo**.

---


## 2026-09-03 — Sesión 1 (cont.): estructura del repo

**Qué pasó**

Beltrán aclaró algo importante: **la sintaxis le cuesta mucho, se la olvida, está casi
de cero con eso.** Confirmó que el objetivo y el método le parecen correctos.

De ahí salieron dos cosas:

- **Enmienda al método** (al final de `02-objetivo-y-metodo.md`): la sintaxis no es lo
  atrofiado, así que Claude sí puede dar material de consulta. Nace `Referencia/`.
  La línea: forma genérica del idioma sí, solución a su problema no.
- **Recalibración:** tareas partidas en pasos chicos con "listo cuando" verificable.
  La Tarea 1 original se reescribió como Clase 1 en tres pasos (1.A, 1.B, 1.C).

A pedido suyo se estructuró el repo entero: `Referencia/`, `Clases/`, `Asistente/`,
más un `README.md` con el mapa. Criterio: separar lo que escribe Claude (contexto,
enunciados, chuletas, revisiones) de lo que escribe él (`practica/` y `Asistente/`).

Se fue antes de empezar a programar. Dejó todo listo para arrancar directo la próxima.

**Estado del código:** sigue sin escribirse una línea. Clase 1 asignada, sin empezar.

---

## 2026-09-03 — Sesión 1: definir el rumbo

**Qué pasó**

Primera sesión. Beltrán se presentó y explicó por qué quiere aprender: siente que
delegando en la IA perdió conocimientos que tenía.

Decisiones tomadas:

- **Lenguaje: JavaScript.** No Python (no sabe nada) ni TS (poco). Se consolida la
  base que ya tiene. Razonamiento completo en `03-nivel-y-stack.md`.
- **Modo profesor: DURO.** Claude nunca escribe el código. Regla en `02-objetivo-y-metodo.md`.
- **Formato: proyecto real** (su asistente personal) en incrementos chicos, con
  chequeo de conceptos en cada paso. Quiere asegurarse de ir aprendiendo, no solo avanzar.
- **Empezamos por consola (Node), no por web.** Razón en `03-nivel-y-stack.md`.
- Se creó esta carpeta `Informacion/` a pedido suyo, para que las sesiones de Claude
  sean continuas.

**Diagnóstico compartido:** lo atrofiado es *generar* y *debuggear*; *leer y revisar*
se conserva. De ahí sale todo el método.

**Estado del código:** todavía no se escribió nada. Tarea 1 asignada, sin entregar.

**Entorno verificado:** Node v25.2.1, npm 11.7.0, git 2.49.0.
