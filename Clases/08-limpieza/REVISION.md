# Revisión — Clase 8 (parcial)

**Fecha:** 2026-11-16 (sesión 14, primera en la PC nueva)
**Estado:** 8.A y 8.B cerrados. **8.C a medias:** reprodujo el problema, falta arreglarlo.
Faltan 8.D, 8.E y las preguntas de cierre. **Catorce tests en verde.**

## Lo que entregó

- **8.A:** los cuatro archivos de `Asistente/` formateados con `Shift + Alt + F`.
  También `index.html`.
- **8.B:** `const comandos = [agregar, listar, eliminar, completar]` y el mensaje del
  `else` armado con `comandos.join(", ")`. Agregó a propósito una ayuda sobre el número
  de tarea.
- **8.C (empezado):** `practica/prueba-carga.js` llama a `cargarTareas` con un archivo
  que no existe. Se creó `otro.json`.

## Lo flojo, y por qué

**1. Dio por probado lo que no había probado (8.A).** Dijo "anda todo" y solo había
probado la página. Se notó porque `tareas.json` no existía en la PC nueva. Cuando se le
preguntó directo, dijo la verdad. Es la trampa de toda la clase: `asistente.js` y
`web.js` no tienen tests, y "verde" no los cubre. **Hay que pedirle que pegue la salida,
no que diga "listo".**

**2. "No cambió nada" (8.A).** El formateador también agregó `;`, cambió las comillas y
sacó los paréntesis del `return`. No cambia el comportamiento, pero no lo había mirado.
Contestó bien por qué `return(x)` y `return x` son lo mismo.

**3. Volvió a escribir los nombres a mano adentro de la ayuda nueva (8.B).** Arregló el
`else` con la lista y en la frase nueva escribió `"completar o eliminar"` como texto. No
lo vio solo. **Lo vio cuando renombró `eliminar` a `borrar` y el mensaje se contradijo.**
Mostrarle la consecuencia funcionó otra vez.

**4. `comandos[3]` en vez de `completar` (8.B).** Usó la posición en la lista en lugar de
la constante. Se frustró ("decime cómo querés que lo haga") con la prueba de insertar
`"editar"` en el medio. Lo destrabó una **tabla de posiciones antes y después**. Al
cerrar dijo que la constante es mejor "porque si cambia se cambia en el mensaje". No es
la diferencia: con un renombre las dos cambian. Se le aclaró que la diferencia es **la
posición**. Repreguntar.

**5. Rutas relativas (8.C), otra vez.** Primero escribió `././`, después `../../`, que
quedaba una carpeta corto y además no entraba a `Asistente/`. Leyó el error con ayuda: la
ruta del `Cannot find module` muestra dónde buscó Node.

**6. `import fs` "porque sí".** Lo sacó cuando se le preguntó.

## Lo que salió bien

- El plan del 8.B lo dijo bien, en palabras, a la primera: lista, `join`, mensaje.
- Eligió **las constantes** y no los textos para la lista, con el motivo correcto.
- Por fin contestó bien la pregunta de la Clase 7: *"la terminal arranca de cero cada vez
  y la página está viva hasta que la recargás"*. Le hizo falta la explicación con tabla.

## Para retomar el 8.C

`otro.json` ya existe. **Tiene que borrarlo y volver a correr la prueba** para ver el
mensaje completo. Solo dijo "se creó el archivo"; todavía no notó que el mensaje dice
`tareas.json` mientras el archivo creado es `otro.json`. Que lo lea y lo descubra él.
