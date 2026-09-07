# El proyecto: mi asistente personal

Construimos **mi asistente personal** de verdad, desde el día uno, en incrementos
chicos que escribo yo. No ejercicios de juguete: algo que voy a seguir usando.

Empieza como programa de consola en Node y crece de a poco.

## La visión (dicha por Beltrán, sesión 2 — 2026-09-06)

> "Mi idea de asistente personal es tipo tener un Jarvis, como el de Ironman. Que me
> recuerde cosas, que me diga qué tareas tengo, que me organice los repositorios y
> ponga agentes de Claude a trabajar en código automáticamente. Quiero que me
> simplifique la vida."

Nada de eso es ciencia ficción. Todo es alcanzable. Pero **"Jarvis" no es un programa,
es un conjunto de piezas**, y la pieza que las sostiene a todas es la más aburrida:
un programa que guarda estado, no se rompe con datos raros, y hace lo que dice hacer.

### La división que ordena todo el proyecto

| | Qué es | Qué hace falta |
|---|---|---|
| **Reactivo** — pasa cuando él lo pide | `asistente tareas`, `asistente repos` | Un programa que corre y termina. Clases 1–6. |
| **Proactivo** — pasa solo | "che, mañana vence esto" | Algo que esté **siempre corriendo**: tarea programada, servicio, servidor. |
| **Autónomo** — decide y ejecuta | agentes de Claude tocando código solos | Todo lo anterior + **permisos**: qué puede hacer sin preguntar. |

Cada escalón necesita el anterior firme. Un asistente proactivo que se olvida las cosas
al reiniciar no es proactivo, es ruido. Un agente autónomo sobre un sistema que no
entendés es una máquina de romper cosas de noche.

### Las tres cosas que separan un juguete de un Jarvis

1. **Estado que sobrevive.** Si no recuerda entre una corrida y otra, no es asistente.
   (Clase 2 — y él tiene que descubrir la carencia solo.)
2. **Algo que corre sin que él lo lance.** Ahí aparecen las tareas programadas, y la
   pregunta incómoda: ¿corre solo si la compu está apagada? Si la respuesta tiene que
   ser sí, aparece un servidor.
3. **Confianza y permisos.** Qué puede hacer el asistente sin consultarlo. Es una
   decisión de diseño, no técnica, y es la que más caro se paga si se saltea.

### Lo que decidimos NO hacer todavía

- **Voz** (hablarle y que conteste). Técnicamente accesible, pero es lo que más
  esfuerzo cuesta por unidad de utilidad real. Capricho de cierre, no cimiento.
- **Interfaz linda.** Es su terreno cómodo (Tailwind). Poner la UI primero sería
  esconderse de la lógica, que es justo lo atrofiado.

### Riesgo número uno del proyecto

No es técnico: es querer saltar a la parte espectacular (agentes automáticos) antes de
tener la aburrida (estado, errores, permisos) y terminar con un Jarvis que no puede
arreglar cuando se rompe — que es **exactamente el problema del que viene**. Si en algún
momento pide saltear etapas, recordarle esto con sus propias palabras.

## Rumbo general (no es un contrato, se ajusta sobre la marcha)

Cada etapa existe para enseñar algo concreto, no para tildar features:

1. **Tareas en memoria** — leer argumentos de terminal, arrays, objetos, funciones,
   ramificación. → *entender qué es un programa que corre y termina.*
2. **Persistencia en archivo** — leer y escribir JSON en disco, async, manejo de errores.
   → *entender que el estado no sobrevive solo.*
3. **Completar / borrar / editar** — buscar dentro de una colección, IDs, inmutabilidad.
4. **Organización del código** — separar en módulos, `import`/`export`, responsabilidades.
5. **Fechas, prioridades, filtros** — el infierno de las fechas, ordenar, `map`/`filter`/`reduce`.
6. **Tests** — probar sin abrir la terminal cada vez.
7. **Interfaz web con Tailwind** — recién acá, cuando la lógica esté firme.
8. **Integraciones** (agenda, notas, lo que use de verdad) — APIs, `fetch`, claves y secretos.

Y después, hacia el Jarvis:

9. **Leer el disco y los repos** — recorrer carpetas, ejecutar `git` desde el programa.
   → *el asistente deja de vivir solo adentro de su propio archivo.*
10. **Correr solo** — tareas programadas, procesos que quedan vivos, notificaciones.
    → *el salto de reactivo a proactivo.*
11. **Lanzar agentes de Claude** — Claude Code en modo no interactivo / Agent SDK,
    con permisos acotados y un registro de qué hizo.
    → *el salto a autónomo. Recién acá, y no antes.*

## Regla del proyecto

Cada etapa se cierra cuando **puedo explicar sin mirar** por qué está escrita así.
Que funcione no alcanza.
