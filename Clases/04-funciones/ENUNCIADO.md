# Clase 4 — Funciones: un solo lugar para cada cosa

## Qué vas a aprender

A sacar la lógica repetida a un lugar con nombre propio. Al final el archivo va a hacer
**exactamente lo mismo** que ahora, pero vas a poder leerlo de un vistazo.

Esta clase es distinta a las anteriores: **no agrega ninguna funcionalidad**. Se llama
*refactorizar*: cambiar cómo está escrito sin cambiar lo que hace. Por eso hay una regla
nueva, y es la más importante de la clase:

> **Después de cada paso, probá los cuatro comandos y comprobá que siguen haciendo lo
> mismo que antes.** Si algo cambió, rompiste algo.

Antes de arrancar, leé `Referencia/05-funciones.md`, partes 1 y 2.

---

### Paso 4.A — Un solo lugar para la ruta

`"Asistente/tareas.json"` está escrito **cuatro veces** en tu archivo. Si mañana querés
guardar las tareas en otro lado, tenés que acertarle a las cuatro.

Guardala en una constante arriba de todo y usá esa constante en los cuatro lugares.

**Listo cuando:** el texto `"Asistente/tareas.json"` aparece **una sola vez** en todo el
archivo, y los cuatro comandos siguen funcionando igual.

> Mismo problema, sin resolver todavía: la palabra `"agregar"` está en la constante
> **y** escrita a mano dentro del mensaje del `else`. Anotalo, lo dejamos para el final.

---

### Paso 4.B — Tu primera función: guardar

Estas dos líneas están repetidas en `agregar`, `eliminar` y `completar`:

    fs.writeFileSync(RUTA, JSON.stringify(tareas), "utf-8")

Escribí una función `guardar` que reciba la lista y haga eso, y llamala desde los tres
comandos.

No devuelve nada: existe para **hacer**, no para calcular.

**Listo cuando:** `writeFileSync` aparece dos veces en el archivo (una adentro de tu
función y otra en la creación del archivo la primera vez), y los cuatro comandos andan.

---

### Paso 4.C — Una función que devuelve: la validación

El problema que encontraste solo al cerrar la Clase 3. La misma condición está copiada
palabra por palabra en `eliminar` y en `completar`.

Escribí una función que reciba **el número** y **la cantidad de tareas**, y devuelva
`true` o `false`. Usala en los dos comandos.

Elegí bien el nombre: tiene que poder leerse como una pregunta.

**Listo cuando:** la condición larga aparece una sola vez, los dos `if` se leen como una
frase, y las cinco pruebas del 3.B siguen dando lo mismo:
`99`, `manteca`, `0`, sin número, y un número válido.

---

### Paso 4.D — Cargar las tareas

Las primeras líneas de tu programa hacen una sola cosa conceptual: **dejar las tareas
listas para usar**. Hoy son cinco líneas sueltas: preguntar si existe, crearlo si no,
leerlo, convertirlo.

Metelas en una función `cargarTareas` que no reciba nada y **devuelva la lista**.

Pensá antes de escribir: ¿el `console.log("Se creo el archivo")` va adentro de la función
o no? No hay una única respuesta correcta, pero decidilo a propósito y después explicame
por qué.

**Listo cuando:** arriba del `if` te queda una sola línea que dice qué pasa, y borrar el
archivo sigue sin romper nada.

---

### Paso 4.E — Separar en dos archivos

Creá `Asistente/tareas.js` y mudá ahí tus funciones. `asistente.js` queda con los
comandos y nada más.

Parte 5 de la Referencia. Ojo con la ruta del `import`: se cuenta desde el archivo que
importa, no desde donde estás parado en la terminal.

**Listo cuando:** los cuatro comandos andan igual y `asistente.js` se lee de arriba a
abajo sin tener que saber cómo se guarda un archivo.

---

## Preguntas para cuando entregues

1. ¿Por qué `guardar` no devuelve nada y la validación sí?
2. Si adentro de una función creás una constante, ¿por qué no la podés usar afuera?
3. ¿Qué gana tu programa con la función de validación, además de no repetir el código?
4. Después de separar en dos archivos, ¿cuál de los dos leerías primero para entender qué
   hace tu asistente? ¿Por qué?
