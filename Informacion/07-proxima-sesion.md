# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-10-28 (sesión 11)

## Dónde estamos

**Clases 1 a 6 cerradas. Clase 7 (interfaz web) a mitad: 7.A y 7.B hechos, 7.C casi.**

    Asistente/
      logica.js          ← 5 funciones puras, CERO imports. La usan las dos interfaces.
      almacenamiento.js  ← guardar / cargarTareas (fs). Solo Node.
      asistente.js       ← cáscara de terminal. Funciona igual que siempre.
      index.html         ← la página ("JARVIS")
      web.js             ← cáscara de navegador: muestra la lista y agrega desde un input

**Trece tests en verde** (`node --test`). La página se abre con **Live Server** (clic
derecho en `index.html`); con doble clic no funciona.

## Cómo arrancar la próxima sesión

Hay dos cosas cortas pendientes del 7.C antes de seguir:

1. **En `web.js`, mostrar el mensaje que devuelve `agregarTarea`.** Hoy nadie lo agarra:
   con el input vacío no agrega **y no avisa nada**, que es peor que antes. Una constante
   y un `alert`.
2. **El test del texto vacío** en `logica.test.js`: lista vacía, `agregarTarea(lista, "")`,
   comprobar que la lista queda en 0 y el mensaje es el de error.

Después, **7.D** (botones de completar y eliminar por tarea), **7.E** (`localStorage`) y
**7.F** (Tailwind, sin indicaciones: es su terreno).

Para el 7.D, el enunciado ya avisa lo que importa: `listarTareas` **no sirve** ahí, porque
devuelve un solo texto y él necesita elementos separados para colgarles un evento. Hay que
recorrer la lista y crear los elementos (parte 5 de `Referencia/08-navegador.md`). Y ojo
con la numeración: las funciones esperan desde 1, el `forEach` da desde 0.

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 11

1. El mapa antes de los pasos, y un paso por mensaje.
2. **Mostrarle la consecuencia corriendo el código, no argumentar.** Lo que lo convenció
   de mover la regla a la lógica fue ver la terminal agregando `undefined`, no la
   explicación. Es lo que mejor funciona de todo.
3. **Frente a la hoja en blanco: copiar y después quitar.** Cáscara vacía → pegar lo que
   ya funciona → lista numerada de qué borrar. **Nunca "escribí la función".**
4. **Cuando no entiende qué contiene algo, que lo imprima.**
5. **En cada test, preguntarle: "si rompo la función, ¿este test se pone en rojo?"**
6. **Tablas, no listas de instrucciones.**
7. **Leer el archivo COMPLETO antes de decirle que algo no cambió.** Ya pasó una vez que
   él tenía razón y Claude insistía con que no había guardado.
8. **Verificar antes de anticipar.** En la sesión 11 se le anunció que algo iba a romper
   un test y no rompió nada.
9. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
10. Si dice que está adivinando: ejercicios mínimos en `practica/`, de otro dominio, con
    predicción obligatoria. Modelo: `Clases/04-funciones/EJERCICIOS-FUNCIONES.md`.
11. Escenas concretas, no preguntas abstractas. Recordarle que algo ya lo escribió él,
    con archivo y línea.
12. Si aparece sintaxis que no se le enseñó, preguntarle qué hace antes de seguir.
13. Que prediga antes de correr; probar en una copia limpia del scratchpad con una tabla
    comando → salida.
14. Llaves y dónde cierra un bloque sigue siendo su error estructural más frecuente.
15. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **¿Por qué `logica.js` se puede importar desde el navegador y `almacenamiento.js` no?**
- **Si una regla está escrita en las dos cáscaras, ¿qué problema hay?**
- **`lista[0].hecha`** — acceder a un dato de un objeto en una lista (3 intentos en la
  sesión 10). Y por qué una propiedad que no existe da `undefined` en vez de fallar.
- **`return` sin agarrar el resultado.** Apareció en seis clases distintas.
- **Definir una función no la ejecuta.** Volvió a pasar con `dibujar()`.
- **Todo lo que viene de la terminal es texto.**
- `map` vs `forEach`. Anidar. La constante vs el texto suelto.

## Detalles abiertos

- `"agregar"` está en la constante **y** a mano en el mensaje del `else` de `asistente.js`.
- `completar` y `eliminar` llaman a `guardar` siempre, incluso con número inválido.
- `cargarTareas` mezcla hacer con devolver, y su mensaje dice `tareas.json` a mano.
- Los parámetros de ruta se llaman distinto en `guardar` (`archivo`) y `cargarTareas`
  (`archivoTareas`).
- Los dos tests de formato de `listarTareas` comparan el texto exacto: frágiles ante un
  cambio de espaciado (se le avisó).
- **La web todavía no persiste nada** (eso es el 7.E).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
