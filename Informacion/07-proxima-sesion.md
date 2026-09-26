# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-09-25 (sesión 4)

## Dónde estamos

**Clases 1, 2 y 3 cerradas.** `Asistente/asistente.js` tiene cuatro comandos andando:

    agregar "texto"   listar   eliminar N   completar N

Las tareas se guardan en `Asistente/tareas.json` como objetos `{ texto, hecha }`, el
número se valida en los dos comandos que lo usan, y `listar` marca con ✓ / ✗.

Revisiones: `Clases/01-primer-programa/`, `02-recordar-tareas/`, `03-completar-y-borrar/`.

## Cómo arrancar la próxima sesión

La Clase 4 ya tiene su gancho, dicho por él al cerrar la Clase 3:

> "Cerraste la Clase 3 con un problema abierto: la validación está copiada igual en
> `eliminar` y en `completar`. Dijiste que si la cambiás, la tenés que cambiar en dos
> lugares. Eso se arregla con funciones. ¿Arrancamos?"

**Falta escribir `Clases/04-.../ENUNCIADO.md`.** Tema: funciones (`function`, parámetros,
`return`), sacar la validación duplicada a un solo lugar, y separar en módulos
(`import`/`export`) si da el tiempo. Antes de los pasos, explicar **para qué sirve** una
función — no arrancar por la sintaxis.

## Cómo enseñarle — calibrado en sesiones 2, 3 y 4

1. **Para qué sirve ANTES de cómo se usa.** Sin excepción. Piso conceptual en
   `Referencia/02-la-terminal-y-node.md`.
2. **No ofrecerle cortar la sesión.** Textual: *"no voy a dejar nada hasta que yo te
   diga"*. Si se marea, simplificar; nunca sugerir parar.
3. **Si se marea, casi siempre es porque le tiré tres cosas juntas.** La salida:
   recordarle en una línea dónde está y qué ya logró, y darle **un** paso.
4. **Separar ante cada traba:** *¿no sabés qué querés que pase, o cómo se escribe?*
5. **Que prediga antes de correr**, y que verifique corriendo. Es lo que mejor funciona.
6. **Probar su código en una copia aislada** (scratchpad, con `asistente.js`,
   `tareas.json` y `package.json`) y mostrarle una tabla de qué pasa con cada caso.
   No tocar sus datos.
7. **Cuando algo tiene dos niveles de decisión, mapearle qué va en cada nivel.**
   Anidar es su punto débil: tropezó tres veces en la sesión 4.
8. **Enunciados literales:** qué archivo, qué va adentro, qué se corre, qué debería verse.
9. Se adelanta y junta pasos. No frenarlo en seco, pero volver a "una cosa por vez".
10. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **Por qué la validación va adentro de la rama del comando y no al lado.** (Anidar.)
- **Por qué conviene una constante en vez de un texto suelto** (contestó mal en sesión 2:
  dijo que era por velocidad; el motivo real es `ReferenceError` vs error silencioso).
- **Terminal vs archivo**, y su hermana nueva: **código (`.js`) vs datos (`.json`)**.

## Detalle abierto

Quedó dicho y sin resolver: la palabra `"agregar"` está en la constante **y** escrita a
mano dentro del mensaje del `else`. Retomarlo cuando se hable de fuente única de verdad.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
