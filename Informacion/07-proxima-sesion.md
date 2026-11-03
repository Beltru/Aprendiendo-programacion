# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-11-02 (sesión 12, fin)

## Dónde estamos

**Clases 1 a 6 cerradas. Clase 7: 7.A a 7.E hechos. Falta solo 7.F (Tailwind).**

    Asistente/
      logica.js          ← 5 funciones puras, CERO imports. La usan las dos interfaces.
      almacenamiento.js  ← guardar / cargarTareas (fs). Solo Node.
      asistente.js       ← cáscara de terminal. Funciona igual que siempre.
      index.html         ← la página ("JARVIS")
      web.js             ← cáscara de navegador: agrega, completa y elimina con el mouse

**Catorce tests en verde** (`node --test`). La página se abre con **Live Server**.

**El asistente ya se usa completo desde el navegador**, con botones por tarea, y toda la
lógica la comparte con la versión de terminal.

## Cómo arrancar la próxima sesión

**El 7.E quedó cerrado y verificado:** las tareas sobreviven al recargar y la página
arranca vacía la primera vez (probado con `localStorage.clear()`).

Queda **solo el 7.F: Tailwind**, sin indicaciones — es su terreno y así quedó acordado.
Lo único: el `<script src="https://cdn.tailwindcss.com"></script>` en el `<head>`.

Y después, **las cuatro preguntas de cierre** del enunciado. La 2 y la 4 son las mejores:
cuántos lugares toca si cambia una regla, y qué parte de la web cubren sus tests.

**Ojo con el autocompletado.** En la sesión 12 escribió `lista.length = 0` y
`push(...JSON.parse(...))` sin saber qué hacían (al preguntarle, dijo que `length`
"revisa si la lista tiene elementos"). **Dijo la verdad cuando se le preguntó.** Se
reemplazó por la forma de `cargarTareas`, que sí entiende.
**Preguntarle siempre qué hace la sintaxis que no se le enseñó.**

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 12

1. El mapa antes de los pasos, y un paso por mensaje.
2. **Mostrarle la consecuencia corriendo el código, no argumentar.** Es lo que mejor
   funciona de todo.
3. **Tablas comparativas.** Las dos numeraciones (`forEach` vs usuario) lo destrabaron al
   toque. Lo mismo con "qué sirve en el navegador y qué no".
4. **Señalarle que algo ya lo escribió él, con archivo y línea.** Funciona siempre y le
   devuelve confianza.
5. **Cuando junta varias instrucciones en una, darle la forma en renglones separados con
   el hueco marcado** (`???`), no la solución.
6. **Frente a la hoja en blanco: copiar y después quitar.** Nunca "escribí la función".
7. **Cuando no entiende qué contiene algo, que lo imprima.**
8. **En cada test, preguntarle: "si rompo la función, ¿este test se pone en rojo?"**
9. **Insistirle con `Shift + Alt + F`.** Sus errores más frecuentes son de cierres de
   bloque, y con el código formateado se ven solos.
10. **Leer el archivo COMPLETO antes de decirle que algo no cambió**, y **verificar antes
    de anticipar**. Las dos veces que Claude se equivocó fue por eso.
11. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
12. Si dice que está adivinando: ejercicios mínimos en `practica/`, de otro dominio, con
    predicción obligatoria. Modelo: `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`.
13. Escenas concretas, no preguntas abstractas. Que prediga antes de correr.
14. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **`return` sin agarrar el resultado: séptima aparición** (`document.createElement` sin
  guardar). **Si vuelve a pasar, hacer un ejercicio dedicado en `practica/`.**
- **¿Por qué `createElement` solo no hace que el elemento aparezca?**
- **¿Por qué `i + 1` y no `i - 1`?**
- **¿Por qué `logica.js` se puede importar desde el navegador y `almacenamiento.js` no?**
- **Si una regla está escrita en las dos cáscaras, ¿qué problema hay?**
- **Anidado:** sigue metiendo bloques adentro del lugar equivocado.
- `lista[0].hecha` (3 intentos en la sesión 10). Definir no ejecuta. `map` vs `forEach`.

## Detalles abiertos

- La lista de `web.js` arranca con dos tareas de prueba escritas a mano (se van en el 7.E).
- `guardarEnNavegador` usa la `lista` global en vez de recibirla por parámetro. Aceptable
  en una cáscara; se le señaló.
- `"agregar"` está en la constante **y** a mano en el mensaje del `else` de `asistente.js`.
- `completar` y `eliminar` llaman a `guardar` siempre, incluso con número inválido.
- `cargarTareas` mezcla hacer con devolver, y su mensaje dice `tareas.json` a mano.
- Los parámetros de ruta se llaman distinto en `guardar` y `cargarTareas`.
- Los dos tests de formato de `listarTareas` comparan el texto exacto: frágiles.
- **Nada de la web está cubierto por tests** (los catorce cubren la lógica).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
