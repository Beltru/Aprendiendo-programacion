# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-11-26 (sesión 17)

## Dónde estamos

**Clases 1 a 8 cerradas. Clase 9 (fechas): 9.A a 9.D cerrados.**

    Asistente/
      logica.js     ← agregarTarea con fecha, listarTareas con "(Sin fecha)",
                      editarTarea, filtrarNoHecha (filter), listarPendientes
                      (forEach sobre TODAS + if + push con i+1 → números correctos).
      asistente.js  ← comandos: agregar, listar, eliminar, completar, editar, pendientes.
                      Todos aparecen solos en la ayuda (lista `comandos` + join).

**19 tests en verde.** El de `listarPendientes` compara el renglón exacto
`" 2. Tarea 2 (Sin fecha) [ ]"` (le costó: primero `length`, después el espacio inicial).
**9.D cerrado.**

Material: `Clases/09-fechas/EXPLICACION.md`, `ENUNCIADO.md`, `REVISION.md` (parcial),
`Referencia/09-fechas-filtros-orden.md`.

## Cómo arrancar la próxima sesión

1. `git status` y `node --test`.
2. **Ejercicio dedicado de parámetros** en `Clases/09-fechas/practica/` (otro dominio,
   corto), antes de seguir. Lleva tres sesiones fallándolo y en la 17 usó `nuevoTexto` en
   un test. Algo como: una función `saludar(nombre)` que se llama desde afuera con una
   variable de otro nombre, y él tiene que decir qué se imprime y por qué. Sin
   predicciones obligatorias (las rechazó): que lo corra y explique.
3. Preguntarle qué hacer con `filtrarNoHecha`, que ya no usa la
   terminal (¿borrarla o reutilizarla en `vencidas`?).
4. 9.E (ordenar con `sort`), 9.F (vencidas con `hoy` por parámetro), 9.G (prioridad,
   solo) y las preguntas de cierre. **9.E es difícil** (comparador + tareas sin fecha):
   ir de a un renglón.

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 17

1. El mapa antes de los pasos, y un paso por mensaje.
2. Mostrarle la consecuencia corriendo el código, no argumentar.
3. **Tablas comparativas.** Sesión 17: `listar` / `pendientes` lado a lado.
4. Señalarle que algo ya lo escribió él, con archivo y línea.
5. Darle la forma en renglones separados con el hueco marcado (`???`), nunca la solución.
   **Ojo:** en la sesión 17 los `???` lo confundieron varias veces. Si dice "no entendí",
   pasar al punto 6.
6. **Copiar y después cambiar, con lista numerada**: "copiá el test X, cambiá el nombre,
   borrá los dos assert, escribí este renglón". Fue lo que mejor anduvo en la 17.
7. **Un cambio por mensaje cuando se satura** ("primero solo esto, avisame").
8. **Si falló dos veces la misma cosa, decirle la palabra exacta** (`tareas`) y seguir.
9. Analogías de la vida real para el **diseño** (la lista del colegio destrabó
   `listarPendientes`).
10. Cuando no entiende qué contiene algo, que lo imprima.
11. Preguntarle qué hace cualquier sintaxis que no se le enseñó. Dice la verdad.
12. En cada test: "si rompo la función, ¿este test se pone en rojo?"
13. Insistirle con `Shift + Alt + F`, sobre todo después de cerrar bloques.
14. **Verificar siempre corriendo**, y **pedirle que pegue la salida**: sigue diciendo
    "listo" sin correr.
15. No encadenar más de dos preguntas sobre lo mismo.
16. Preguntas concretas, con un caso de su código.
17. No imponerle predicciones (las rechazó).
18. Si empieza a adivinar, frenar y achicar.
19. Apurado no lee la Referencia: tabla de traducción o salida limpia.
20. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
21. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

- **Parámetros** (prioridad absoluta, ver arriba).
- **Función nueva → import** (3 olvidos en la sesión 17).
- `length` de un texto vs de una lista.
- ¿Por qué la fecha se guarda como texto? ¿Por qué `pendientes` no numera 1, 2, 3?
- `return` sin agarrar el resultado / métodos sin objeto adelante (`getDate()`,
  `forEach` sueltos).
- `comandos[3]` vs `completar`, `./` y `../`, `=` vs `===`.

## Detalles abiertos

- `filtrarNoHecha` sin uso en la terminal (decidir).
- Test `"Fechas"`: nombre poco descriptivo.
- `tareas.json` con tareas repetidas de prueba.
- Los tests de formato comparan texto exacto: frágiles (ya lo sufrió por un espacio).
- La ayuda dice "Para completar o eliminar..." y `editar` también lleva número.
- `web.js` y `asistente.js` sin tests. `const indice = i` sobra en `web.js`.
- La web no muestra fechas ni tiene editar/pendientes (clase corta futura).
- La web y la terminal guardan en lugares distintos (servidor, clase futura).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
