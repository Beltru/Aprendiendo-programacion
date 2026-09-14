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
| JSON: lista → texto → lista | pendiente | Clase 2 (2.C) |
| Archivo inexistente la primera vez (`existsSync`) | pendiente | Clase 2 (2.E) |
| Arrays: crear, `push`, `length` | flojo | Clase 1 (paso 1.C.3) |
| Recorrer con `for...of` y con `forEach` | pendiente | Clase 1 (paso 1.C.3) |
| Template strings con `${}` | flojo (lo usó solo) | Clase 1 |
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
