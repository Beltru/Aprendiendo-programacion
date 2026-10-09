# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-10-08 (sesión 7)

## Dónde estamos

**Clases 1 a 5 cerradas.**

El asistente tiene cuatro comandos (`agregar`, `listar`, `eliminar N`, `completar N`),
está partido en `Asistente/asistente.js` (los comandos) y `Asistente/funciones.js`
(`guardar`, `cargarTareas`, `estaEnRango`, todas genéricas: reciben la ruta por parámetro),
y tiene **seis tests en verde**:

    node --test

Tests en `Clases/05-tests/practica/`: `rango.test.js` (cinco casos de `estaEnRango`) y
`archivos.test.js` (guardar + cargar contra un archivo de prueba).

## REGLA DE ORO al pedirle algo

**Un paso corto y verificable por mensaje.** Esperar su respuesta antes del siguiente.

En la sesión 7 dijo: *"deja de darme enunciados larguisimos que no se hacer"*, y tenía
razón. Los enunciados largos van al `.md` de la clase, **nunca al chat**. Si hay varios
datos, tabla. Desde que se pasó a un paso por mensaje, la clase salió sin fricción.

## Cómo arrancar la próxima sesión

> "Cerraste la Clase 5 con algo abierto: ninguno de tus cuatro comandos tiene test.
> ¿Te acordás por qué es difícil testearlos?"

**Tema de la Clase 6: separar la lógica de la entrada/salida.** Hoy `asistente.js` lee
`process.argv` e imprime, todo mezclado con las decisiones. Mientras sea así, los comandos
no se pueden testear — por el mismo motivo que `guardar` no se podía antes del 5.E.

El camino: funciones como `agregarTarea(tareas, texto)` que **reciben y devuelven** en vez
de leer `argv` e imprimir; `asistente.js` queda como la cáscara que lee la entrada, llama,
y muestra. Después, tests de los cuatro comandos.

Falta escribir `Clases/06-.../ENUNCIADO.md`. **Antes de los pasos, el para qué.**

Alternativa, si quiere algo más liviano: fechas y prioridades (etapa 5 del rumbo).

## Cómo enseñarle — calibrado en sesiones 2 a 7

1. **Un paso por mensaje.** Ver la regla de oro arriba. Es lo más importante.
2. **Para qué sirve ANTES de cómo se usa.** Sin excepción.
3. **No ofrecerle cortar la sesión.** Él avisa.
4. **Si se marea o dice que está adivinando: bajar a ejercicios mínimos en `practica/`**,
   de otro dominio, con predicción obligatoria. Modelo:
   `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`. **No** explicar lo mismo más despacio.
5. **Escenas concretas, no preguntas abstractas.** *"Tenés cinco tareas reales ahí, corrés
   los tests, ¿qué queda en el archivo?"* funcionó donde la pregunta general no llegaba.
6. **Recordarle que algo ya lo escribió él en otro archivo**, con archivo y línea. Lo
   destraba enseguida y le devuelve confianza.
7. **Cuando le des una forma genérica, decile qué va en cada hueco en su caso.** Tiende a
   copiarla literal, con los nombres del ejemplo.
8. **Tablas en vez de listas de instrucciones.**
9. **Si aparece sintaxis que no se le enseñó, preguntarle qué hace antes de seguir.** En la
   sesión 7 usó un valor por defecto y no sabía qué hacía. Puede venir del editor.
10. **Para errores de orden de argumentos: definición y llamada alineadas**, con flechas.
11. **Que prediga antes de correr.**
12. **Probar su código en una copia limpia del scratchpad**, y mostrarle una tabla
    comando → salida. Imprescindible para los casos "primera vez".
13. **Llaves y dónde cierra un bloque es su error estructural más frecuente.**
14. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **¿Cuáles de tus comandos tienen tests?** (Ninguno. Creía que sí.)
- **¿Qué hace `archivo = algo` en los paréntesis?** Lo usó sin saberlo.
- **¿Por qué un test que compara `true === true` es inútil?**
- **`return` sin agarrar el resultado.** Sigue apareciendo.
- **Anidar:** por qué la validación va adentro de la rama del comando.
- **Por qué conviene una constante en vez de un texto suelto** (contestó mal en sesión 2).
- **Importar un archivo lo ejecuta.**

## Detalles abiertos

- `"agregar"` está en la constante **y** a mano en el mensaje del `else`. Fuente única de
  verdad, sin resolver.
- `cargarTareas` mezcla hacer con devolver (decidido a propósito, lo justificó bien).
- El mensaje de `cargarTareas` dice `tareas.json` a mano, aunque ahora la ruta es un
  parámetro. Y sus parámetros se llaman distinto en las dos funciones (`archivo` vs
  `archivoTareas`).
- `a-mano.js` quedó con cinco parámetros a propósito, para comparar con `node:test`.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
