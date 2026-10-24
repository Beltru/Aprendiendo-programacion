# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-10-23 (sesión 10)

## Dónde estamos

**Clases 1 a 6 hechas.** De la 6 solo quedan las cuatro preguntas de cierre.

El asistente está separado en dos capas:

- **`Asistente/asistente.js`** — la cáscara. Lee `process.argv`, llama, guarda, imprime.
  Las cuatro ramas tienen la misma forma. Cero `fs`, cero `JSON`, cero validaciones.
- **`Asistente/funciones.js`** — toda la lógica: `agregarTarea`, `completarTarea`,
  `eliminarTarea`, `listarTareas`, más `guardar`, `cargarTareas` y `estaEnRango`.
  **Ninguna sabe que existe una terminal.**

**Doce tests en verde** (`node --test`), en `Clases/05-tests/practica/` y
`Clases/06-separar-logica/practica/logica.test.js`.

## Cómo arrancar la próxima sesión

Primero cerrar la Clase 6 con las cuatro preguntas del enunciado (están en
`Clases/06-separar-logica/ENUNCIADO.md`). Son cortas y la cuarta es la mejor: *si mañana
quisieras el asistente en una página web, qué parte reescribirías y qué parte no.*

Después, **Clase 7**. Falta escribir el enunciado y su `EXPLICACION.md`. Opciones, en
orden de utilidad para el Jarvis que quiere:

1. **Fechas y prioridades** (etapa 5 del rumbo): `editar`, fecha de vencimiento, ordenar,
   filtrar. Trae `filter`/`sort` y el infierno de las fechas. Es la que más le acerca algo
   que use de verdad.
2. **Fuente única de verdad y limpieza**: los comandos en una sola estructura en vez de
   cuatro constantes + el mensaje del `else` escrito a mano. Corta, consolida, sin tema nuevo.
3. **Interfaz web con Tailwind** (etapa 7): ahora es posible de verdad, porque la lógica
   ya está separada. Sería el premio, y su terreno cómodo.

Preguntarle cuál le sirve más.

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa.** Cada clase necesita un `EXPLICACION.md` con el panorama
   (problema concreto, cómo queda al final, qué compra cada paso) y que lo lea antes de
   arrancar. Modelo: `Clases/06-separar-logica/EXPLICACION.md`.
2. **Después, un paso corto y verificable por mensaje.**

Sin la 1 los pasos se vuelven mecánicos (*"es medio robotico todo"*); sin la 2 se bloquea.

## Cómo enseñarle — calibrado en sesiones 2 a 10

1. **El mapa antes de los pasos**, y **un paso por mensaje**. Ver arriba.
2. **Frente a la hoja en blanco: copiar y después quitar.** Cáscara vacía → pegar el
   código que ya funciona → lista numerada de qué borrar. Funcionó cinco veces. **Nunca
   pedirle "escribí la función".**
3. **Cuando no entiende qué contiene algo, que lo imprima.** Cambiar el `assert` por un
   `console.log` y mirar el valor lo destrabó tres veces. Vale más que explicar de nuevo.
4. **En cada test, preguntarle: "si rompo la función, ¿este test se pone en rojo?"**
   Escribió tres falsos positivos en dos clases.
5. **Tablas, no listas de instrucciones.** Con la tabla armar/llamar/comprobar escribió
   tres tests casi sin ayuda.
6. **Leer el archivo COMPLETO antes de decirle que algo no cambió.** En la sesión 10
   Claude insistió tres veces con que no había guardado, y en realidad había agregado una
   rama nueva más abajo. Él tenía razón.
7. **Para qué sirve antes de cómo se usa.**
8. **No ofrecerle cortar la sesión.** Él avisa.
9. **Si dice que está adivinando: bajar a ejercicios mínimos en `practica/`**, de otro
   dominio, con predicción obligatoria. Modelo:
   `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`.
10. **Escenas concretas, no preguntas abstractas.**
11. **Recordarle que algo ya lo escribió él**, con archivo y línea.
12. **Si aparece sintaxis que no se le enseñó, preguntarle qué hace antes de seguir.**
13. **Que prediga antes de correr**, y probar en una copia limpia del scratchpad con una
    tabla comando → salida.
14. **Llaves y dónde cierra un bloque sigue siendo su error estructural más frecuente.**
15. **Frustración: nombrarla, no consolarla.**

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **`lista[0].hecha`** — acceder a un dato de un objeto dentro de una lista. Tres intentos
  en la sesión 10. Y por qué `lista[0].completada` da `undefined` en vez de fallar.
- **"¿Este test se pone en rojo si rompo la función?"**
- **Todo lo que viene de la terminal es texto** (pasó `argv[3]` en vez de `n`, 2ª vez).
- **`map` vs `forEach`.**
- **`return` sin agarrar el resultado.** Apareció en cinco clases distintas.
- **¿Cuáles de tus comandos tienen tests?** (Ahora sí tienen: preguntárselo de nuevo.)
- **Anidar**, y **por qué conviene una constante en vez de un texto suelto**.

## Detalles abiertos

- `"agregar"` está en la constante **y** a mano en el mensaje del `else`. (Candidato a
  Clase 7, opción 2.)
- `completar` y `eliminar` llaman a `guardar` siempre, incluso con número inválido.
  Inofensivo, pero la pregunta de diseño quedó sin hacer.
- `cargarTareas` mezcla hacer con devolver, y su mensaje dice `tareas.json` a mano.
- Los parámetros de ruta se llaman distinto en `guardar` (`archivo`) y `cargarTareas`
  (`archivoTareas`).
- El test del formato de `listarTareas` compara el texto exacto: se le avisó que es
  frágil ante un cambio de espaciado.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
