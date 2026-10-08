# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-10-07 (sesión 6)

## Dónde estamos

**Clases 1 a 4 cerradas. Clase 5 (tests) a mitad: 5.A, 5.B y 5.C hechos.**

El asistente tiene cuatro comandos (`agregar`, `listar`, `eliminar N`, `completar N`),
está partido en `Asistente/asistente.js` + `Asistente/funciones.js`, y desde esta sesión
tiene **cinco tests en verde** sobre `estaEnRango`:

    node --test

## Cómo arrancar la próxima sesión

> "Te quedaste en el 5.D, que es solo pensar: ¿qué pasa si querés testear `guardar`?
> ¿Qué archivo se escribe cuando el test la llama?"

**El 5.D no se contesta, se pregunta.** Tiene que ver solo que testear `guardar` le
escribiría sus tareas de verdad. Recién después, el 5.E: pasarle la ruta por parámetro a
`guardar` y `cargarTareas` para poder testearlas contra un archivo de prueba. Es un
refactor, así que vale la regla de la Clase 4: probar los cuatro comandos y el caso sin
archivo después de cada cambio.

Ahí aparecen dos cosas nuevas: `assert.deepEqual` (porque `[1,2] === [1,2]` es `false`) y
la idea de que **lo difícil de testear suele estar mal diseñado**.

Y un círculo para cerrar: preguntarle **por qué la herramienta de Node necesita dos cosas
(un texto y una comparación) y la que él escribió en `a-mano.js` terminó con cinco
parámetros.**

## Cómo enseñarle — calibrado en sesiones 2 a 6

1. **Para qué sirve ANTES de cómo se usa.** Sin excepción.
2. **No ofrecerle cortar la sesión.** Él avisa. Si se marea, simplificar.
3. **Si se marea o dice que está adivinando: bajar a ejercicios mínimos en `practica/`**,
   de otro dominio, con predicción obligatoria. Ver `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`
   como modelo. **No** explicar lo mismo otra vez más despacio: eso ya falló dos veces.
4. **Cuando le des una forma genérica, decile qué va en cada hueco en su caso.** Tiende a
   copiarla literal, con los nombres del ejemplo incluidos.
5. **Las listas de instrucciones cortas no le alcanzan. Darle tablas.** Entrada →
   esperado → qué debería decir el nombre. Eso lo destraba enseguida.
6. **Para errores de orden de argumentos: mostrar definición y llamada alineadas**, una
   debajo de la otra, con flechas. Funciona al toque.
7. **Que prediga antes de correr.** Lo mejor de todo.
8. **Probar su código en una copia limpia del scratchpad** (los dos `.js`, `tareas.json`,
   `package.json`). Sin eso no se ven los bugs del caso "primera vez".
9. **Mostrarle una tabla de qué pasa con cada caso** (comando → salida).
10. **Llaves y dónde cierra un bloque es su error estructural más frecuente.** Recordarle
    el truco de VS Code: clic al lado de una llave y se resalta la pareja.
11. **Pasos mecánicos numerados** cuando la traba es "no sé qué escribir".
12. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **Por qué un test que compara `true === true` es inútil.** Fue el error grave de esta sesión.
- **`return` sin agarrar el resultado.** Le pasó tres veces; la cuarta la resolvió solo.
- **Anidar:** por qué la validación va adentro de la rama del comando y no al lado.
- **Por qué conviene una constante en vez de un texto suelto** (contestó mal en sesión 2).
- **Importar un archivo lo ejecuta.**

## Detalles abiertos

- `"agregar"` está en la constante **y** a mano en el mensaje del `else`. Fuente única de
  verdad, sin resolver.
- `cargarTareas` mezcla hacer con devolver (decidido a propósito, lo justificó bien).
- `a-mano.js` quedó con cinco parámetros y mensajes duplicados, **a propósito**, para
  comparar con `node:test`.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
