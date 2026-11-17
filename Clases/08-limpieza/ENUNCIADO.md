# Clase 8 — Limpieza

## Qué vas a aprender

A cambiar cómo está escrito el código sin cambiar lo que hace. Y a saber **cómo comprobarlo**
cuando los tests no cubren lo que tocaste.

**Leé `EXPLICACION.md` antes de empezar.**

**La red de seguridad de toda la clase:** después de cada paso, `node --test` da
**catorce en verde** y los cuatro comandos de la terminal responden igual que antes.

---

### Paso 8.A — Ordenar la sangría

En cada uno de los cuatro archivos de `Asistente/` (`logica.js`, `almacenamiento.js`,
`asistente.js`, `web.js`): abrilo y apretá **`Shift + Alt + F`**.

Mirá qué se movió antes de seguir con el próximo archivo.

**Listo cuando:** los cuatro están formateados, `node --test` da catorce en verde, y me
podés decir **si el formato cambió algo de lo que hace el programa**, y cómo lo sabés.

---

### Paso 8.B — Los comandos, escritos una sola vez

Hoy el mensaje del `else` de `asistente.js` repite a mano los nombres de los comandos, que
ya están en las constantes de arriba. Si mañana agregás `editar`, tenés que acordarte de
cambiarlo en dos lugares.

Hacé que el mensaje se arme **a partir de los comandos que ya existen**, sin volver a
escribir ningún nombre.

> Pista: en `logica.js` ya usaste una herramienta que pega los elementos de una lista en
> un solo texto. Buscala.

**Listo cuando:**
1. `node Asistente/asistente.js cualquiercosa` muestra los cuatro comandos.
2. Agregás un comando de mentira donde guardás los comandos (sin hacerle rama), corrés lo
   mismo, **y aparece en el mensaje sin que toques el mensaje**. Después lo sacás.

---

### Paso 8.C — Que `cargarTareas` no mienta

Primero hacé que el problema se vea. En `Clases/08-limpieza/practica/` creá un archivo
chico que importe `cargarTareas` y la llame con una ruta a un archivo **que no exista**,
por ejemplo uno dentro de esa misma carpeta `practica/`. Corrélo desde la raíz del repo.

¿Qué archivo se creó? ¿Qué dice el mensaje? ¿Es verdad?

Arreglalo. Antes, decidí: **¿esa función tiene que imprimir algo?** Hay dos respuestas
razonables; elegí una y explicame por qué.

**Listo cuando:** el mensaje (si queda) dice el nombre del archivo que de verdad se creó,
sea cual sea.

---

### Paso 8.D — Mismo dato, mismo nombre

`guardar` y `cargarTareas` reciben la misma cosa (la ruta del archivo), pero el parámetro
se llama distinto en cada una. Elegí un nombre que diga qué es, y usalo en las dos.

**Listo cuando:** las dos usan el mismo nombre de parámetro y `node --test` da catorce en
verde. Y contestame: ¿hacía falta tocar `asistente.js` para este cambio? ¿Por qué?

---

### Paso 8.E — ¿Vale la pena?

Hoy `completar` y `eliminar` llaman a `guardar` **siempre**, aunque el número sea inválido
y no haya cambiado nada.

No escribas código todavía. Contestame:

1. ¿Qué se pierde o se rompe hoy por esto? Probalo: `completar 99` y fijate qué queda en
   `tareas.json`.
2. Para guardar solo cuando cambió algo, ¿cómo se enteraría `asistente.js` de que cambió
   algo? ¿Dónde tendría que vivir esa información?
3. Con eso: **¿lo arreglás o lo dejás?** Las dos respuestas pueden ser correctas. Lo que
   cuenta es el porqué.

**Listo cuando:** contestaste las tres, y si decidiste arreglarlo, los comandos siguen
respondiendo igual.

---

## Preguntas de cierre (sin mirar la pantalla)

1. ¿Qué es un refactor? ¿Cómo sabés que lo que hiciste fue uno y no otra cosa?
2. En esta clase tocaste `asistente.js`. ¿Qué te avisaba si lo rompías?
3. ¿Por qué es peor tener el mismo dato escrito en dos lugares que en uno, si los dos
   están bien?
4. ¿Qué detalle decidiste **no** arreglar (o arreglar) en el 8.E, y por qué?
