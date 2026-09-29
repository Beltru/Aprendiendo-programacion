# Conceptos

Registro de lo que ya trabajé. Sirve para que Claude me **repregunte sin aviso**
en sesiones siguientes (repaso espaciado).

Estados: **firme** (lo explico sin mirar) / **flojo** (lo hice pero no lo explico) /
**pendiente** (aún no lo vi).

## Aclaración de partida (2026-09-03)

Beltrán avisó que **la sintaxis de JS le cuesta y está casi de cero**. Toda la tabla
arrancó en "pendiente" por eso, aunque haya hecho páginas web hace un año. No asumir
que algo lo sabe porque "ya lo vio".

| Concepto | Estado | Visto en |
|---|---|---|
| Qué es la terminal y cómo correr un programa — terminal vs archivo | flojo (volvió a confundirlos en sesión 3) | Sesión 2 |
| Qué es Node y qué significa `node archivo.js` | flojo | Sesión 2 |
| Argumentos de línea de comandos (`process.argv`) | **firme** | Clase 1 (paso 1.B) |
| Índice desde 0: por qué su palabra cae en `[2]` | **firme** | Clase 1 (paso 1.B) |
| Dirección del `=`: la derecha entra en la izquierda | flojo | Sesión 2 |
| `if / else if / else`, y el `else` como "todo lo demás" | flojo | Clase 1 (paso 1.C.2) |
| `===` vs `=` | flojo | Clase 1 |
| Llaves `{}` como bloques: contarlas para ubicar un error | flojo | Sesión 2 |
| Errores que gritan vs errores silenciosos | flojo | Sesión 2 |
| `const` vs `let` | flojo | Clase 1 |
| `&&`, `\|\|`, `!` — y `\|\|` como valor por defecto | flojo | Sesión 2 |
| `import` — traer herramientas que no vienen incluidas | flojo | Clase 2 |
| Leer un error de Node: archivo:línea, tipo, ignorar `node:internal` | flojo | Clase 2 |
| `fs.writeFileSync` sobreescribe entero | **firme** (lo descubrió) | Clase 2 (2.A) |
| `fs.readFileSync` devuelve texto, no ejecuta | flojo | Clase 2 (2.C) |
| JSON: lista → texto → lista | **firme** | Clase 2 (2.C) |
| Archivo inexistente la primera vez (`existsSync`) | **firme** | Clase 2 (2.E) |
| Arrays: crear, `push`, `length` | **firme** | Clase 1 (paso 1.C.3) |
| `splice` para sacar un elemento | flojo | Clase 3 (3.A) |
| Anidar `if` dentro de `if` (afuera el comando, adentro el detalle) | flojo (tropezó 3 veces) | Clase 3 |
| Condiciones en positivo, y por qué | flojo | Clase 3 (3.B) |
| Todo lo que llega de la terminal es texto; `Number()` | flojo | Clase 3 (3.B) |
| `NaN`: toda comparación con NaN da false | flojo | Clase 3 (3.B) |
| Objetos: `{ texto, hecha }`, leer y escribir con el punto | flojo | Clase 3 (3.C) |
| Migración de datos: el formato viejo ya guardado | **firme** | Clase 3 (3.C) |
| Ternario `cond ? a : b` dentro de un template string | flojo | Clase 3 (3.D) |
| Cerrar `})`: último que abre, primero que cierra | flojo | Clase 3 |
| Código (`.js`) vs datos (`.json`), y reglas de JSON | flojo | Clase 3 (3.C) |
| Recorrer con `forEach((t, i) => ...)` | **firme** | Clase 3 |
| Template strings con `${}` | **firme** | Clase 1 |
| Objetos: propiedades, leer y escribir | pendiente | Clase 1 |
| Estado en memoria vs estado persistido | **firme** (lo descubrió y diseñó la solución) | Clase 1 (pregunta 2) |

## Ya contestadas (repreguntar sin aviso más adelante)

- **¿Qué objeto global de Node te da lo que escribiste después de `node archivo.js`?**
  → Lo buscó en Google y llegó a `process.argv`. Correcto.
- **Los dos primeros elementos de esa lista, ¿qué son?**
  → El ejecutable de Node y la ruta de su archivo. Llegó solo, comparando la cantidad
  de palabras que tipeó con la cantidad de elementos. Correcto.
- **¿Por qué su palabra cae en la posición 2?**
  → Porque las listas cuentan desde 0 y las posiciones 0 y 1 están siempre ocupadas.
  Se equivocó una vez por sobrecorregir, contó de a uno y llegó. Correcto.
- **¿Para qué sirve usar constantes en vez de comparar contra texto suelto?**
  → Contestó *"capaz que si compara tarda más"*. **Motivo equivocado.** El motivo real
  es que un nombre mal escrito da `ReferenceError` y un texto mal escrito no dice nada.
  Se le explicó. **Repreguntar esto.**

## Preguntas abiertas

- ~~¿Por qué al volver a correr el programa se pierde lo que habías agregado?~~ → **Contestada sola en sesión 3.** Repreguntar: "¿dónde vive la lista mientras corre el programa?"
- ¿Cuál es la diferencia entre `=` y `===`?
- ¿Por qué `const` por defecto y no `let`?
- ¿Qué pasa si escribís mal el nombre de una constante? ¿Y si escribís mal el texto?
- ¿Por qué el `else` sin condición es mejor que agregar una rama por cada palabra?
- ¿En qué posición de `process.argv` cae el texto de una tarea? ¿Y sin comillas?
- ¿Qué hace `writeFileSync` si el archivo ya existe?
- Si leés un archivo con `readFileSync`, ¿qué tipo de cosa te devuelve? ¿Qué cuenta su `length`?
- ¿Por qué hay que cargar las tareas al empezar, y no solo guardar al terminar?
- ¿Por qué la validación va **adentro** de la rama del comando y no al lado?
- ¿Qué pasa si comparás `NaN < 1`? ¿Y `NaN === NaN`?
- ¿Por qué `"2" + 1` da `"21"`?
- Si dos comandos comparten la misma validación, ¿qué problema hay?

## Clase 4 — funciones (sesión 5)

| Concepto | Estado | Visto en |
|---|---|---|
| Los paréntesis son el botón: `saludar` vs `saludar()` | **firme** (lo descubrió solo) | Clase 4 (ej1) |
| Definir una función no la ejecuta | **firme** | Clase 4 (ej1) |
| Parámetro = hueco que se llena al llamar | flojo | Clase 4 (ej2) |
| Los nombres de los parámetros no existen afuera | flojo (se equivocó en el asistente) | Clase 4 (ej5, 4.C) |
| `return` entrega un valor; si no lo agarrás se pierde | flojo (**le pasó 3 veces**) | Clase 4 (ej3) |
| Devolver una condición sin `if` adentro | **firme** | Clase 4 (ej4) |
| Acción (sin `return`) vs respuesta (con `return`) | flojo | Clase 4 (pregunta 1) |
| Scope: lo de adentro muere adentro | **firme** | Clase 4 (ej5) |
| Error de borde (`<` vs `<=`) | flojo | Clase 4 (ej5) |
| `export` / `import { }` con `./` y `.js` | flojo | Clase 4 (4.E) |
| Cada archivo es un mundo: los `import` no se heredan | flojo | Clase 4 (4.E) |
| Intención vs mecanismo: para qué sirve nombrar | flojo | Clase 4 (pregunta 3) |
| Refactorizar: cambiar cómo, no qué; probar después de cada paso | flojo | Clase 4 |
| Elegir nombres que digan qué es la cosa | flojo (**3ª conversación**) | Clases 3 y 4 |

## Más preguntas para repreguntar

- ¿Qué diferencia hay entre `cargarTareas` y `cargarTareas()`?
- Si una función tiene `return` y la llamás sin guardar el resultado, ¿qué pasa?
- ¿Por qué `estaEnRango(numero, cantidad)` en la llamada da `ReferenceError`?
- ¿Por qué `funciones.js` necesita su propio `import fs` si `asistente.js` ya lo tenía?
- ¿Por qué `guardar` no lleva `return` y `estaEnRango` sí?
