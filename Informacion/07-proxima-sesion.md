# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-11-09 (sesión 13)

## Dónde estamos

**Clases 1 a 7 cerradas.** El asistente tiene **dos interfaces completas y una sola
lógica**:

    Asistente/
      logica.js          ← 5 funciones puras, CERO imports. Corre en Node y en el navegador.
      almacenamiento.js  ← guardar / cargarTareas con fs. Solo Node.
      asistente.js       ← cáscara de terminal: 4 comandos.
      index.html         ← la página "JARVIS", con Tailwind.
      web.js             ← cáscara de navegador: agregar, completar, eliminar con el mouse,
                           y localStorage para que sobreviva al F5.

**Catorce tests en verde** (`node --test`). La página se abre con **Live Server**.

## Cómo arrancar la próxima sesión

**Hay que elegir el tema de la Clase 8 con él.** Las opciones, en orden de cercanía al
Jarvis que quiere (ver `04-proyecto-asistente.md`):

1. **Fechas y prioridades** (etapa 5 del rumbo): comando `editar`, fecha de vencimiento,
   ordenar y filtrar. Trae `filter`, `sort` y el manejo de fechas. Es lo que más lo acerca
   a un asistente que use todos los días.
2. **Que corra solo** (etapa 10, el salto de reactivo a **proactivo**): tareas
   programadas, avisos. Es el escalón que él más quiere y el que más le cambia el
   proyecto. Pero necesita que algo quede vivo cuando la compu está apagada, así que
   aparece el tema de un servidor.
3. **Limpieza y fuente única** (clase corta, sin tema nuevo): los comandos en una sola
   estructura, los detalles sueltos de la lista de abajo. Consolida.

Sugerencia: preguntarle cuál le sirve más, como se hizo con la Clase 7 (eligió web y fue
la mejor decisión hasta ahora).

**Antes de los pasos, escribir el `EXPLICACION.md` de la clase.**

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 13

1. El mapa antes de los pasos, y un paso por mensaje.
2. **Mostrarle la consecuencia corriendo el código, no argumentar.** Lo mejor de todo.
3. **Tablas comparativas.** Lo destraban más rápido que cualquier explicación.
4. **Señalarle que algo ya lo escribió él, con archivo y línea.**
5. **Cuando junta instrucciones en una, darle la forma en renglones separados con el hueco
   marcado** (`???`), nunca la solución.
6. **Frente a la hoja en blanco: copiar y después quitar.** Nunca "escribí la función".
7. **Cuando no entiende qué contiene algo, que lo imprima.**
8. **Preguntarle qué hace cualquier sintaxis que no se le enseñó**, antes de seguir. El
   autocompletado le mete cosas: en la sesión 12 usó `lista.length = 0` sin saber qué era.
   **Dice la verdad cuando se le pregunta**, así que preguntar funciona.
9. **En cada test: "si rompo la función, ¿este test se pone en rojo?"**
10. **Insistirle con `Shift + Alt + F`.** Sus errores más frecuentes son de cierres de bloque.
11. **Leer el archivo COMPLETO antes de decirle que algo no cambió**, y **verificar antes
    de anticipar**. Las dos veces que Claude se equivocó fue por eso.
12. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
13. Si dice que está adivinando: ejercicios mínimos en `practica/`, de otro dominio, con
    predicción obligatoria. Modelo: `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`.
14. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. **Las dos que contestó mal al cerrar la Clase 7:**

- **¿Por qué entre un clic y otro la página no necesita guardar nada?** (Porque queda
  viva; el `localStorage` es solo para el F5. Contestó `localStorage`.)
- **¿Cuál de tus archivos no tiene ni un test?** (Contestó al revés: cree que los tests
  cubren la interacción. Cubren las reglas; `web.js` no tiene ninguno.)

Y las de arrastre:

- **`return` sin agarrar el resultado: octava aparición.** Si vuelve a pasar, ejercicio
  dedicado en `practica/`.
- **`=` vs `===`** (reincidente de la Clase 1).
- **`lista[0].hecha`**, acceder a un dato de un objeto en una lista.
- **Anidado:** sigue metiendo bloques en el lugar equivocado.
- Definir no ejecuta. `map` vs `forEach`. `className` con `=`, no con paréntesis.

## Detalles abiertos

- `"agregar"` está en la constante **y** a mano en el mensaje del `else` de `asistente.js`.
- `completar` y `eliminar` llaman a `guardar` siempre, incluso con número inválido.
- `cargarTareas` mezcla hacer con devolver, y su mensaje dice `tareas.json` a mano.
- Los parámetros de ruta se llaman distinto en `guardar` y `cargarTareas`.
- Los dos tests de formato de `listarTareas` comparan el texto exacto: frágiles.
- **`web.js` no tiene ni un test.** El bug de orden del guardado se le escapó por eso.
- La web y la terminal guardan en lugares distintos: no comparten tareas.

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
