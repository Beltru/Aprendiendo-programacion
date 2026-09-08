# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-09-07 (fin de la sesión 2)

## Dónde estamos

**Ya escribió su primer programa, y funciona.** `Asistente/asistente.js` reconoce
`agregar` y `listar`, y avisa qué comandos existen cuando le mandás cualquier otra cosa.

Pasos **1.A, 1.B, 1.C.1 y 1.C.2 cerrados**. Falta **1.C.3**.

Revisión completa en `Clases/01-primer-programa/REVISION.md`.

## Cómo arrancar la próxima sesión

**No repasar todo esto en voz alta.** Retomá donde quedó, con la pregunta que ya está
sobre la mesa:

> "Quedaste en 1.C.3: que `agregar` guarde el texto de verdad. ¿En qué posición de
> `process.argv` cae `"comprar leche"`?"

## Paso 1.C.3 — lo que falta

    node Asistente/asistente.js agregar "comprar leche"   → guarda la tarea
    node Asistente/asistente.js listar                    → las muestra numeradas

Dos cosas nuevas: **de dónde sale el texto** (posición 3 — que lo deduzca él, ya
entiende cómo funciona el índice) y **dónde se guarda** (arrays: crear, `push`,
recorrer). La sección "Listas (arrays)" de `Referencia/01-js-lo-minimo.md` ya lo cubre.

Y después, **la pregunta que define la Clase 2**: al correr `listar` después de
`agregar`, ¿la tarea sigue ahí? Que lo piense antes de probarlo. **No contestársela
jamás** — el descubrimiento es el puente a la persistencia.

## Cómo enseñarle — calibrado en la sesión 2

Esto es lo más importante de este archivo. Leerlo antes de empezar.

1. **Explicá para qué sirve algo ANTES de cómo se usa.** El peor momento de la sesión 2
   fue por haber dado por sabido qué es una terminal y qué es Node. Se frustró y con
   razón. Si aparece una herramienta nueva, primero: *¿qué problema resuelve?*
   El piso conceptual está en `Referencia/02-la-terminal-y-node.md`.
2. **Ante cada traba, separar:** *¿no sabés qué querés que pase, o no sabés cómo se
   escribe?* Esto funcionó todas las veces. Lo primero se piensa (sin atajo); lo
   segundo va a `Referencia/`, y si falta, **se amplía `Referencia/`** con la forma
   genérica — nunca con su caso.
3. **Pasos chiquitos, con un "listo cuando" verificable.** Cuando algo le sale grande,
   partilo en tres. Lo hace y avanza.
4. **Que verifique corriendo, no que le crean.** Los mejores momentos fueron cuando
   corrió el programa y **vio** el problema (el silencio ante `manteca`, la lista de
   cuatro elementos). Eso vale más que cualquier explicación.
5. **Cuando llega a la lógica correcta en palabras, decíselo.** Le cambia el ánimo y es
   verdad: ahí ya no está perdido, solo le falta sintaxis.
6. **Frustración: nombrarla, no consolarla.** Dijo *"me enoja no tener ni idea de lo
   que quiero hacer"*. Sirvió explicarle que esa es exactamente la parte atrofiada que
   vinimos a entrenar, y que le duela significa que la está usando.

## Para repreguntar sin aviso

Está la lista en `06-conceptos.md`. La más urgente: **por qué conviene una constante
en vez de un texto suelto** — la contestó mal (dijo que era por velocidad).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
