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
| Qué es la terminal y cómo correr un programa | flojo | Sesión 2 |
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
| Módulos ES (`import`) vs CommonJS (`require`) | pendiente | Clase 1 (paso 1.A) |
| Arrays: crear, `push`, `length` | pendiente | Clase 1 (paso 1.C.3) |
| Recorrer con `for...of` y con `forEach` | pendiente | Clase 1 (paso 1.C.3) |
| Template strings con `${}` | pendiente | Clase 1 |
| Objetos: propiedades, leer y escribir | pendiente | Clase 1 |
| Estado en memoria vs estado persistido | pendiente | Clase 1 (pregunta 2) |

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

- ¿Por qué al volver a correr el programa se pierde lo que habías agregado?
  (**No contestarla nunca. Es la bisagra a la Clase 2.**)
- ¿Cuál es la diferencia entre `=` y `===`?
- ¿Por qué `const` por defecto y no `let`?
- ¿Qué pasa si escribís mal el nombre de una constante? ¿Y si escribís mal el texto?
- ¿Por qué el `else` sin condición es mejor que agregar una rama por cada palabra?
