# Clase 9 — Fechas, filtros y orden

## Qué vas a aprender

`filter`, `sort` y fechas. Y a cuidar una regla: el número que ve el usuario tiene que ser
el que entiende el programa.

**Leé `EXPLICACION.md` antes de empezar.** La sintaxis está en
`Referencia/09-fechas-filtros-orden.md`.

**Red de seguridad:** después de cada paso, `node --test` en verde y los comandos viejos
de la terminal respondiendo igual. Cada función nueva de `logica.js` lleva **su test**.
Y cuando pruebes a mano, **pegame la salida**.

---

### Paso 9.A — Ver las trampas (en `practica/`)

Creá `Clases/09-fechas/practica/fechas.js`. Para cada línea, **escribí primero en un
comentario qué esperás que imprima**, y recién después corrélo.

1. Creá una fecha con `new Date("2026-12-01")` e imprimí su día con `getDate()`.
2. Guardá un objeto con una fecha adentro, pasalo por `JSON.stringify` y después por
   `JSON.parse`. Imprimí `typeof` de la fecha que volvió.
3. Compará como texto `"2026-11-30" < "2026-12-01"`. Después `"2026-2-1" < "2026-10-01"`.
4. Imprimí la fecha de hoy en formato `AAAA-MM-DD` (está en la Referencia).

**Listo cuando:** me contás cuál de tus predicciones falló, y por qué la sección 3 de la
explicación decide guardar la fecha como texto.

---

### Paso 9.B — Agregar con fecha

`agregar "pagar la luz" 2026-12-01` guarda la tarea con su fecha. `agregar "comprar pan"`,
sin fecha, tiene que seguir funcionando.

1. Pensá **dónde** llega la fecha en `process.argv`.
2. Cambiá `agregarTarea` para que reciba la fecha y la guarde en la tarea.
3. Cambiá `listarTareas` para que muestre la fecha **si la tarea tiene una**.
4. Tests: uno que agregue con fecha y compruebe que quedó guardada.

> Ojo: tus dos tests de formato de `listarTareas` comparan el texto exacto. Si cambiás el
> formato, se ponen en rojo. Eso es lo esperable: actualizalos. Pero fijate cuánto cuesta
> mantener un test que compara todo el texto.

**Listo cuando:** las dos formas de `agregar` andan, `listar` muestra la fecha solo donde
hay, y las tareas que ya tenías guardadas (sin fecha) se siguen listando bien.

---

### Paso 9.C — Editar

`editar 2 "texto nuevo"` cambia el texto de la tarea 2.

Antes de escribir: **¿qué función que ya tenés se parece muchísimo a esta?** Mirá
`logica.js`. Empezá copiándola.

**Listo cuando:** `editarTarea` tiene dos tests (número válido e inválido), el comando
anda, y **aparece solo** en el mensaje de ayuda. Si no aparece solo, revisá qué hiciste
en el 8.B.

---

### Paso 9.D — Pendientes (`filter`)

1. En `logica.js`, una función que reciba las tareas y **devuelva** solo las que no
   están hechas. Con `filter`. Test con `deepEqual`.
2. El comando `pendientes`, que las muestra.
3. Ahora probá esto: tres tareas, completá la **primera**, corré `pendientes`, y después
   `completar` con el número que te muestra `pendientes` para la primera de la lista.
   ¿Qué tarea se completó? **Pegame las salidas.**

Y recién ahí, arreglalo. La regla está en la sección 4 de la explicación.

**Listo cuando:** el número que muestra `pendientes` es el que entiende `completar`.

---

### Paso 9.E — Ordenar (`sort`)

`ordenar` ordena las tareas por fecha, la más cercana primero, y **guarda** ese orden.

Antes de escribir, decidí y contame:

1. Las tareas **sin fecha**, ¿adónde van? ¿Al principio, al final?
2. `sort` cambia la lista original. Acá eso, ¿es un problema o es justo lo que querés?
3. Después de `ordenar`, ¿los números de `listar` siguen coincidiendo con los de
   `completar`? ¿Por qué acá sí y en el 9.D no?

**Listo cuando:** `ordenar` + `listar` muestra las fechas de la más cercana a la más
lejana, las que no tienen fecha van donde decidiste, y hay un test que lo comprueba.

---

### Paso 9.F — Vencidas

`vencidas` muestra las tareas no hechas cuya fecha ya pasó.

La función de lógica recibe `hoy` **como parámetro** (sección 5 de la explicación). La
fecha de hoy la consigue `asistente.js`.

**Listo cuando:** hay un test que le pasa un `hoy` inventado y comprueba el resultado, y
el comando anda con la fecha real. Y contestame: **¿por qué el test no usa la fecha de hoy
real?**

---

### Paso 9.G — Prioridad (solo)

Sin pasos, sin pistas de entrada. Agregale a las tareas una **prioridad** (vos decidís
cuáles hay y cómo se escriben), y que se pueda ver o filtrar por ella.

Antes de escribir código, contame tu plan con palabras: qué dato nuevo, dónde llega, qué
funciones tocás, qué tests escribís.

**Listo cuando:** anda, tiene tests, y las tareas viejas sin prioridad no se rompen.

---

## Preguntas de cierre (sin mirar la pantalla)

1. Si guardás un `new Date()` en `tareas.json` y lo volvés a cargar, ¿qué te vuelve?
2. ¿Qué diferencia hay entre lo que devuelve la función que le pasás a `map` y la que le
   pasás a `filter`?
3. En `pendientes`, ¿por qué no podías numerar 1, 2, 3?
4. ¿Por qué `vencidas` recibe `hoy` de afuera en vez de averiguarlo ella?
