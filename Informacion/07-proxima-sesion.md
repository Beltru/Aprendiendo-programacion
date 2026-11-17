# Estado actual y próxima sesión

> Se reescribe entero al final de cada sesión. Es la foto de dónde estamos.

**Última actualización:** 2026-11-16 (sesión 14)

## Dónde estamos

**Clases 1 a 7 cerradas. Clase 8 (limpieza) en curso: 8.A y 8.B cerrados, 8.C empezado.**

**PC nueva:** el repo está en `C:\dev\Aprendiendo-programacion`, con Node v26.13.1, git
2.56 y Live Server. Anda todo. `tareas.json` está en `.gitignore`, así que en esta PC la
terminal arrancó sin tareas.

    Asistente/
      logica.js          ← 5 funciones puras, sin imports. Formateado.
      almacenamiento.js  ← guardar / cargarTareas con fs.
      asistente.js       ← terminal. NUEVO: const comandos = [...] y el mensaje del
                           else armado con join (más una ayuda sobre el número).
      index.html, web.js ← la página con Tailwind + localStorage.

**Catorce tests en verde.** Enunciado y mapa en `Clases/08-limpieza/`.

## Cómo arrancar la próxima sesión

**Retomar el 8.C**, ver el final de `Clases/08-limpieza/REVISION.md`:

1. Que **borre** `Clases/08-limpieza/practica/otro.json` y vuelva a correr
   `node Clases/08-limpieza/practica/prueba-carga.js`.
2. Que **lea el mensaje entero**. Dice `tareas.json` y el archivo creado es `otro.json`:
   que lo descubra él.
3. Que decida si `cargarTareas` tiene que imprimir algo, y lo arregle.

Después siguen 8.D (mismo nombre de parámetro en `guardar` y `cargarTareas`), 8.E (¿vale
la pena guardar solo si cambió algo? Es una pregunta, no necesariamente código) y las
preguntas de cierre.

**Clase 9, ya conversada:** fechas y prioridades (opción 1). Es la recomendada y la
siguiente natural después de limpiar.

## LAS DOS REGLAS AL ENSEÑARLE

1. **Primero el mapa** (`EXPLICACION.md` por clase, que lo lea antes de arrancar).
2. **Después, un paso corto y verificable por mensaje.**

## Cómo enseñarle — calibrado en sesiones 2 a 14

1. El mapa antes de los pasos, y un paso por mensaje.
2. **Mostrarle la consecuencia corriendo el código, no argumentar.** Sesión 14:
   renombrar `eliminar` a `borrar` hizo que el mensaje se contradijera y lo vio enseguida.
3. **Tablas comparativas.** Sesión 14: la tabla de posiciones de la lista lo destrabó.
4. **Señalarle que algo ya lo escribió él, con archivo y línea.**
5. Cuando junta instrucciones en una, darle la forma en renglones separados con el hueco
   marcado (`???`), nunca la solución.
6. Frente a la hoja en blanco: copiar y después quitar.
7. Cuando no entiende qué contiene algo, que lo imprima.
8. **Preguntarle qué hace cualquier sintaxis que no se le enseñó.** Dice la verdad.
9. En cada test: "si rompo la función, ¿este test se pone en rojo?"
10. Insistirle con `Shift + Alt + F`.
11. **Verificar antes de dar algo por bueno**: correr el comando, mirar el archivo. En la
    sesión 14 así se detectó que no había probado la terminal, y que Claude había
    anticipado mal el 8.C (el test llama a `guardar` primero y el mensaje nunca sale).
12. **NUEVO: pedirle que pegue la salida, no que diga "listo" o "anda todo".**
13. **NUEVO: no encadenar más de dos preguntas sobre lo mismo.** Si a la segunda no sale,
    explicar el concepto directo (con tabla) y dejarle el código a él. Las dos
    frustraciones de la sesión 14 vinieron de darle vueltas.
14. Para qué sirve antes de cómo se usa. No ofrecerle cortar la sesión (él avisa).
15. Si dice que está adivinando: ejercicios mínimos en `practica/`, de otro dominio.
16. Frustración: nombrarla, no consolarla.

## Para repreguntar sin aviso

Lista completa en `06-conceptos.md`. Las más urgentes:

- **¿Por qué `completar` es mejor que `comandos[3]`?** (Contestó "porque si cambia se
  cambia en el mensaje", pero eso pasa con las dos. La diferencia es la posición.)
- **¿Cuál de tus archivos no tiene ni un test?** (Pendiente desde la Clase 7. Hoy dio
  por probada la terminal sin correrla.)
- **¿Qué significa `./`? ¿Cómo contás los `../`?** (Reincidente.)
- `return` sin agarrar el resultado, `=` vs `===`, `lista[0].hecha`, anidado.

## Detalles abiertos (los que cubre la Clase 8 se tachan al cerrarlos)

- ~~`"agregar"` en la constante y a mano en el `else`~~ → resuelto en 8.B.
- `cargarTareas` dice `tareas.json` a mano → 8.C.
- Los parámetros de ruta se llaman distinto en `guardar` y `cargarTareas` → 8.D.
- `completar` y `eliminar` guardan siempre, incluso con número inválido → 8.E.
- Los tests de formato de `listarTareas` comparan el texto exacto: frágiles.
- `web.js` y `asistente.js` no tienen tests.
- `const indice = i` sobra en los dos listeners de `web.js`.
- La web y la terminal guardan en lugares distintos (necesita servidor, clase futura).

## Recordatorio

Modo DURO: Claude no escribe su código. Ver `02-objetivo-y-metodo.md`, incluida la
enmienda sobre sintaxis al final.
