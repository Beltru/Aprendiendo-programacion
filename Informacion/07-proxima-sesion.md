# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-11-19 (sesión 15)

## Dónde estamos

**Clases 1 a 8 cerradas.** La Clase 8 (limpieza) dejó el código ordenado:

    Asistente/
      logica.js          ← 5 funciones puras, sin imports. Formateado.
      almacenamiento.js  ← guardar(tareas, archivoTareas) / cargarTareas(archivoTareas).
                           El aviso dice el archivo real que creó.
      asistente.js       ← terminal. const comandos = [...] y la ayuda armada con join
                           y las constantes. Sin nombres de comando escritos a mano.
      index.html, web.js ← la página con Tailwind + localStorage.

**Catorce tests en verde.** PC nueva: `C:\dev\Aprendiendo-programacion`, Node v26.13.1.

## Cómo arrancar la próxima sesión

**Elegir con él el tema de la Clase 9.** Para la 8 eligió limpieza. Las que quedan:

1. **Fechas y prioridades** (la recomendada): comando `editar`, fecha de vencimiento,
   ordenar y filtrar. Trae `filter`, `sort` y fechas. Lo acerca a usarlo todos los días,
   y además es lo que la opción 2 necesita para tener algo que avisar.
2. **Que corra solo**: avisos, tareas programadas, el salto a proactivo. Necesita algo
   vivo cuando la compu está apagada (servidor).

Confirmar con él. **Antes de los pasos, escribir el `EXPLICACION.md` de la clase.**

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 15

1. El mapa antes de los pasos, y un paso por mensaje.
2. **Mostrarle la consecuencia corriendo el código, no argumentar.** Renombrar
   `eliminar` a `borrar` le mostró la contradicción enseguida.
3. **Tablas comparativas**, también para decisiones (opción / a favor / en contra).
4. Señalarle que algo ya lo escribió él, con archivo y línea.
5. Cuando junta instrucciones en una, darle la forma en renglones separados con el hueco
   marcado (`???`), nunca la solución.
6. Frente a la hoja en blanco: copiar y después quitar.
7. Cuando no entiende qué contiene algo, que lo imprima.
8. Preguntarle qué hace cualquier sintaxis que no se le enseñó. Dice la verdad.
9. En cada test: "si rompo la función, ¿este test se pone en rojo?"
10. Insistirle con `Shift + Alt + F`.
11. **Verificar antes de dar algo por bueno**: correr el comando, mirar el archivo.
12. **Pedirle que pegue la salida, no que diga "listo".** En la sesión 15 dijo "ya lo
    hice" y no había borrado el archivo.
13. **No encadenar más de dos preguntas sobre lo mismo.** A la segunda, explicar directo
    (con tabla) y dejarle el código a él.
14. **NUEVO: preguntas concretas, con un caso de su código.** "¿Qué te avisaba?" lo trabó;
    "si el lunes rompés `completar`, ¿`node --test` se pone en rojo?" lo contestó al toque.
15. **NUEVO: no se acuerda de los términos** (refactor), aunque entienda la idea. Pista
    corta y que lo diga él.
16. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
17. Si dice que está adivinando: ejercicios mínimos en `practica/`, de otro dominio.
18. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **¿Por qué `completar` y no `comandos[3]`?** No se acordó al repreguntar. Posición vs nombre.
- **¿Qué es un refactor?**
- **Si en `asistente.js` la variable se llamara `ruta`, ¿`guardar` andaría?** (parámetros)
- **`./` y los `../`** (reincidente).
- `return` sin agarrar el resultado, `=` vs `===`, `lista[0].hecha`, anidado.

## Detalles abiertos

- Los tests de formato de `listarTareas` comparan el texto exacto: frágiles.
- `web.js` y `asistente.js` no tienen tests (y él ya sabe que no los tienen).
- `const indice = i` sobra en los dos listeners de `web.js`.
- `completar` / `eliminar` guardan siempre: **decidido dejarlo** (8.E).
- La web y la terminal guardan en lugares distintos (necesita servidor, clase futura).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
