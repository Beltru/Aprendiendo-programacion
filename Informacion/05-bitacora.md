# Bitácora

Orden cronológico. La entrada más nueva va **arriba**.

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
