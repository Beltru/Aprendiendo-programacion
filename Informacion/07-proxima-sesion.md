# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-11-24 (sesión 16)

## Dónde estamos

**Clases 1 a 8 cerradas. Clase 9 (fechas) en curso: 9.A cerrado, 9.B casi.**

    Asistente/
      logica.js       ← agregarTarea(tareas, texto, fecha) guarda la fecha.
                        listarTareas TODAVÍA NO la muestra (se borró el intento).
      asistente.js    ← agregar pasa process.argv[4] como fecha.
      tareas.json     ← mezcla tareas con y sin fecha (y algunas repetidas de prueba).

**15 tests: 13 verdes, 2 ROJOS a propósito.** Al final lo resolvió solo:
`(${t.fecha === undefined ? "Sin fecha" : t.fecha})` — eligió mostrar "Sin fecha" y así
esquivó el template anidado. Los dos tests de formato de `listarTareas` están en rojo
porque cambió el formato. **Lo primero de la próxima sesión: actualizarlos.**

Material: `Clases/09-fechas/EXPLICACION.md`, `ENUNCIADO.md`,
`Referencia/09-fechas-filtros-orden.md`.

## Cómo arrancar la próxima sesión

1. `node --test` y `git status` para ver cómo quedó.
2. **Cerrar el 9.B: actualizar los dos tests de formato** (el texto esperado ahora
   lleva `(Sin fecha)` o la fecha). Preguntarle de paso: ¿cuánto cuesta mantener un test
   que compara todo el texto? (lo anticipaba el enunciado).
3. Repreguntar cómo armó el ternario: lo destrabó él, con un primer paso que imprimía
   solo la condición (`true`/`false`). Buen método para recordarle.
4. Seguir con 9.C (editar).

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 16

1. El mapa antes de los pasos, y un paso por mensaje.
2. Mostrarle la consecuencia corriendo el código, no argumentar.
3. **Tablas comparativas.** Siguen siendo lo que mejor funciona (sesión 16: `process.argv`,
   `1/12/26` vs `new Date`, el test renglón por renglón).
4. Señalarle que algo ya lo escribió él, con archivo y línea.
5. Darle la forma en renglones separados con el hueco marcado (`???`), nunca la solución.
6. Frente a la hoja en blanco: copiar y después quitar.
7. Cuando no entiende qué contiene algo, que lo imprima.
8. Preguntarle qué hace cualquier sintaxis que no se le enseñó. Dice la verdad.
9. En cada test: "si rompo la función, ¿este test se pone en rojo?"
10. Insistirle con `Shift + Alt + F`.
11. **Verificar antes de dar algo por bueno**: correr el comando, mirar el archivo.
12. **Pedirle que pegue la salida, no que diga "listo".** Sigue haciendo falta.
13. No encadenar más de dos preguntas sobre lo mismo: a la segunda, explicar directo.
14. Preguntas concretas, con un caso de su código.
15. No se acuerda de los términos aunque entienda la idea: pista corta.
16. **NUEVO: no imponerle predicciones.** Las rechazó explícitamente. Como mucho, después
    de correr: "¿te sorprendió algo?".
17. **NUEVO: si empieza a adivinar (prueba formas al azar), frenar y achicar.** No darle
    tres piezas de sintaxis nueva juntas. Señal típica: escribe cosas que no estaban en
    ningún ejemplo.
18. **NUEVO: cuando está apurado no quiere leer la Referencia** y pide "el blueprint".
    La línea no se le da; sí una tabla de traducción ejemplo → su caso, o una salida
    limpia (deshacer y dejar verde) para retomar con calma.
19. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
20. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

- **Parámetros: ¿si `archivoTareas` se llamara `ruta`, andaría `guardar`?** Contestó mal
  en la sesión 16. Prioridad alta.
- **¿Por qué la fecha se guarda como texto?**
- `comandos[3]` vs `completar` (posición vs nombre).
- **`return` sin agarrar el resultado: novena aparición** (`new Date` suelto). Ya
  amerita el ejercicio dedicado en `practica/` que se viene anunciando.
- `./` y `../`, `=` vs `===`, `lista[0].hecha`, anidado.

## Detalles abiertos

- Test `"Fechas"`: nombre poco descriptivo (sugerido: "agregarTarea guarda la fecha").
- `tareas.json` con tareas repetidas de prueba.
- Los tests de formato de `listarTareas` comparan texto exacto: frágiles.
- `web.js` y `asistente.js` sin tests. `const indice = i` sobra en `web.js`.
- La web y la terminal guardan en lugares distintos (servidor, clase futura).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
