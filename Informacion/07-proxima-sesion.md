# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-10-15 (sesión 9)

## Dónde estamos

**Clases 1 a 5 cerradas. Clase 6 a mitad: 6.A, 6.B y 6.C hechos.**

`funciones.js` ya tiene `agregarTarea(tareas, texto)` y `completarTarea(tareas, numero)`:
reciben datos, modifican la lista y **devuelven el mensaje** en vez de imprimirlo. Las
ramas de `agregar` y `completar` en `asistente.js` quedaron en tres líneas.

**Siete tests en verde** (`node --test`), uno de ellos ya de lógica:
`Clases/06-separar-logica/practica/logica.test.js`.

## LAS DOS REGLAS AL ENSEÑARLE (las más importantes de este archivo)

1. **Primero el mapa.** Cada clase necesita un `EXPLICACION.md` con el panorama —
   problema concreto, cómo queda al final, qué compra cada paso — y que lo lea antes de
   arrancar. Modelo: `Clases/06-separar-logica/EXPLICACION.md`.
2. **Después, un paso corto y verificable por mensaje**, recordándole dónde está en ese
   mapa. Los enunciados largos van al `.md`, nunca al chat.

Sin la 1, los pasos de la 2 se vuelven movimientos a ciegas: lo dijo él
(*"es medio robotico todo"*). Sin la 2, se bloquea. Van juntas.

## Cómo arrancar la próxima sesión

> "Te falta `eliminarTarea`, que es igual a `completarTarea` pero con el `splice`.
> ¿Te acordás de la receta para la hoja en blanco?"

La receta (funcionó dos veces): **cáscara vacía → pegar la rama de `asistente.js` tal
cual → lista numerada de qué borrar.** Nunca "escribí la función".

Después: **6.D** (`listarTareas`, con `map` y `join` — ojo, dos cosas nuevas, explicar el
para qué antes) y **6.E** (completar `logica.test.js` con la tabla de casos del enunciado).

## Cómo enseñarle — calibrado en sesiones 2 a 9

1. **El mapa antes de los pasos.** Ver arriba.
2. **Un paso corto por mensaje.** Ver arriba.
3. **Cuando no entiende qué contiene algo, que lo imprima.** Lo que lo destrabó en el 6.B
   fue cambiar un `assert` por un `console.log` y **ver** el valor. Sirve más que explicar.
4. **Frente a la hoja en blanco: copiar y después quitar.** Nunca pedirle que escriba una
   función de cero; que copie lo que ya funciona y se le dé la lista de qué borrar.
5. **Para qué sirve ANTES de cómo se usa.**
6. **No ofrecerle cortar la sesión.** Él avisa.
7. **Si dice que está adivinando: bajar a ejercicios mínimos en `practica/`**, de otro
   dominio, con predicción obligatoria. Modelo:
   `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`.
8. **Escenas concretas, no preguntas abstractas.**
9. **Recordarle que algo ya lo escribió él**, con archivo y línea.
10. **Cuando le des una forma genérica, decile qué va en cada hueco en su caso.**
11. **Tablas en vez de listas de instrucciones.**
12. **Si aparece sintaxis que no se le enseñó, preguntarle qué hace antes de seguir.**
13. **Que prediga antes de correr**, y probar su código en una copia limpia del
    scratchpad, mostrándole una tabla comando → salida.
14. **Llaves y dónde cierra un bloque es su error estructural más frecuente.**
15. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **¿Cómo le preguntás a una lista cuántos elementos tiene?** No se acordaba.
- **¿Por qué `completar 1` fallaba al pasarle `process.argv[3]`?** (Todo lo que viene de
  la terminal es texto. Error repetido de la Clase 3.)
- **¿Cuáles de tus comandos tienen tests?**
- **¿Qué hace `archivo = algo` en los paréntesis?** Lo usó sin saberlo.
- **`return` sin agarrar el resultado.** Sigue apareciendo.
- **Anidar**, y **por qué conviene una constante en vez de un texto suelto**.

## Detalles abiertos

- `"agregar"` está en la constante **y** a mano en el mensaje del `else`.
- `completar` ahora llama a `guardar` siempre, incluso cuando el número es inválido
  (escribe la lista sin cambios: inofensivo, pero está la pregunta 3 del enunciado sin
  hacer: cómo sabe la cáscara si hace falta guardar).
- `cargarTareas` mezcla hacer con devolver, y su mensaje dice `tareas.json` a mano.
- Los parámetros de ruta se llaman distinto en `guardar` (`archivo`) y en `cargarTareas`
  (`archivoTareas`).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
