# Revisión — Clase 8 (cerrada)

**Fecha:** 2026-11-16 y 2026-11-19 (sesiones 14 y 15)
**Estado:** **cerrada.** 8.A a 8.E hechos y las cuatro preguntas contestadas.
**Catorce tests en verde.**

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

## Sesión 15: 8.C, 8.D, 8.E y cierre

**8.C.** No había borrado `otro.json` y dijo "no se cargó nada". Se lo señaló la fecha
del archivo, que era del 16. Al borrarlo y leer el mensaje entero lo vio solo: *"se creó
otro.json y dice tareas.json"*. Eligió la opción A (que siga avisando) con un motivo
válido: quiere enterarse. Lo arregló con `+` y el parámetro. Le faltó el espacio
(`archivoClases/...`) y lo corrigió cuando se le marcó.

**8.D.** Renombró `archivo` a `archivoTareas` en `guardar`. Al preguntarle por qué no
hacía falta tocar `asistente.js` contestó *"porque son funciones"*: bien encaminado pero
impreciso. Se le explicó que **el parámetro solo existe adentro**, que se pasa el valor y
no el nombre, y que el `archivoTareas` de `asistente.js` es otra variable con el mismo
nombre por casualidad.

**8.E.** Probó `completar 99` y vio que no se pierde nada. Llegó a "comparando" el mensaje,
y una tabla le mostró que eso duplica el texto (el problema del 8.B). Decidió **dejarlo**.
Primero dio solo el costo ("es un quilombo"). En el cierre lo dijo completo: no complica
nada **y** cambiarlo era una dificultad innecesaria.

**Preguntas de cierre**

1. *Refactor:* no se acordaba del término. Con pista: *"cambiar lo que está escrito para
   que esté más prolijo"*. Se le precisó (el cómo sin el qué) y se marcaron las dos
   excepciones a propósito (los mensajes de 8.B y 8.C).
2. *¿Qué te avisa si rompés `asistente.js`?* En abstracto lo frustró ("son medio raras
   las preguntas"). Concreta ("¿`node --test` se pone en rojo?") la contestó bien:
   *"No, porque no tiene tests"*. **Era la que había contestado al revés en la Clase 7.**
3. *Dato en dos lugares:* bien, con el ejemplo de `borrar`.
4. *8.E:* bien, con costo y beneficio.

**Calibrado:** las preguntas de cierre funcionan mucho mejor **concretas, con un caso de
su código**, que en abstracto.
