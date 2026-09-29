# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-09-28 (sesión 5)

## Dónde estamos

**Clases 1 a 4 cerradas.** El asistente tiene cuatro comandos:

    agregar "texto"   listar   eliminar N   completar N

Y desde la Clase 4 está partido en dos archivos: `Asistente/asistente.js` (los comandos,
48 líneas que se leen como un índice) y `Asistente/funciones.js` (`guardar`,
`cargarTareas`, `estaEnRango`).

Revisiones en las cuatro carpetas de `Clases/`.

## LO MÁS IMPORTANTE de este archivo

En la sesión 5 dijo, textual:

> *"estoy adivinando que hacer, mucho me lo resuelve el autocompletar"*

**Ese es el problema que este repo existe para evitar.** La receta que funcionó, y que hay
que repetir cada vez que un concepto no entre:

1. **Frenar** lo que se esté haciendo en el proyecto real.
2. **Bajar a `practica/`** con ejercicios mínimos, de tres líneas, **de otro dominio**
   (sin tareas, sin archivos, sin comandos). Ver `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`
   como modelo: cada ejercicio con una predicción obligatoria y una lección explícita.
3. **Volver al proyecto real** recién cuando el concepto esté.

**No** explicarlo otra vez más despacio: eso ya falló dos veces antes de bajar a los
ejercicios. Y recordarle **apagar el autocompletar** (Copilot) si vuelve a aparecer.

## Cómo arrancar la próxima sesión

Falta escribir `Clases/05-.../ENUNCIADO.md`. El rumbo (`04-proyecto-asistente.md`, etapa 5)
dice fechas, prioridades y filtros: `map`/`filter`/`reduce`, y el infierno de las fechas.

Dos alternativas mejores, a elegir con él:

- **Tests** (etapa 6). Ya tiene el gancho natural: en la Clase 4 quedó dicho que
  `estaEnRango` se puede probar sola. Y le daría una red de seguridad para refactors, que
  en la Clase 4 hizo falta a mano.
- **Fuente única de verdad + un comando nuevo** (`editar`), que es corto y consolida
  funciones sin material nuevo.

Sugerencia: preguntarle qué le sirve más para el asistente que quiere usar de verdad.

## Cómo enseñarle — calibrado en sesiones 2 a 5

1. **Para qué sirve ANTES de cómo se usa.** Sin excepción.
2. **No ofrecerle cortar la sesión.** Él avisa. Si se marea, simplificar.
3. **Si se marea o adivina: bajar a ejercicios mínimos en `practica/`.** (Ver arriba.)
4. **Separar ante cada traba:** *¿no sabés qué querés que pase, o cómo se escribe?*
5. **Que prediga antes de correr.** Es lo que mejor funciona de todo.
6. **Probar su código en una copia limpia del scratchpad**, con los dos `.js`,
   `tareas.json` y `package.json`. Sin eso no se ven los bugs del caso "primera vez":
   en la sesión 5 reintrodujo el bug del 2.E y en su máquina no se notaba.
7. **Mostrarle una tabla de qué pasa con cada caso** (comando → salida). Lo destraba.
8. **Cuando algo tiene dos niveles de decisión, mapearle qué va en cada nivel.**
   Anidar sigue siendo el punto débil.
9. **Pasos mecánicos numerados** cuando la traba es "no sé qué escribir": mover tal línea,
   agregar tal cosa. No otra explicación conceptual.
10. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **`return` sin agarrar el resultado.** Le pasó **tres veces** (dos con `JSON.stringify`,
  una con `cargarTareas()`). Preguntarle qué hace `cargarTareas()` sola en una línea.
- **Anidar:** por qué la validación va adentro de la rama del comando y no al lado.
- **Por qué conviene una constante en vez de un texto suelto** (contestó mal en sesión 2).
- **Nombres:** tres conversaciones ya. Si aparece un `n1` o un nombre que no dice qué es,
  marcarlo.

## Detalle abierto

`"agregar"` está en la constante **y** a mano en el mensaje del `else`. Fuente única de
verdad, sin resolver. Y `cargarTareas` mezcla hacer con devolver (se le señaló; decidió a
propósito dejarlo así y lo justificó bien).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
