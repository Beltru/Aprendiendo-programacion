# Bitácora

Orden cronológico. La entrada más nueva va **arriba**.

---
## 2026-10-08 — Sesión 7: cierre de la Clase 5

**Qué pasó**

Cerró la Clase 5. Hizo 5.D (ver que un test no puede tocar datos reales) y 5.E (pasarle
la ruta por parámetro a `guardar` y `cargarTareas` para poder testearlas). **Seis tests en
verde.** `funciones.js` quedó sin ninguna mención a `tareas.json`.

Detalle en `Clases/05-tests/REVISION.md`.

**Lo más importante de esta sesión: cómo pedirle las cosas**

A mitad de camino dijo, textual:

> *"No se que queres que haga ni como, deja de darme enunciados larguisimos que no se hacer"*

**Tenía razón.** Le había dado un bloque con tres pasos, una pista y una advertencia, todo
junto. A partir de ahí se pasó a **un paso corto por mensaje**, esperando su respuesta
antes del siguiente — y el resto de la clase salió sin fricción.

Regla: **una acción verificable por mensaje.** Los enunciados largos van al `.md` de la
clase, nunca al chat. Si hay varios datos, tabla. Guardado también en memoria.

**Lo que funcionó para destrabarlo**

- **La escena concreta** en vez de la pregunta abstracta: *"tenés cinco tareas reales ahí;
  corrés los tests; ¿qué queda en el archivo?"*. Con la pregunta general no llegaba.
- Señalarle que algo ya lo había escrito él en otro archivo (`asistente.js` línea 11,
  `const tareas = cargarTareas(...)`) cuando preguntó cómo guardar un valor devuelto.

**Lo que hay que vigilar**

- **Usó un valor por defecto sin saber qué hacía** (`archivo = archivoTareas`). Al
  preguntarle, contestó mal. Cuando aparezca sintaxis que no se le enseñó, **preguntarle
  qué hace antes de seguir** — puede venir del editor.
- Dijo que los tests prueban "que los comandos funcionan". **Ninguno de sus comandos tiene
  test.** Repreguntar.
- Sigue apareciendo la llamada sin agarrar el resultado.

**Cambios en el repo**

- `Asistente/funciones.js`: `guardar` y `cargarTareas` reciben la ruta (lo escribió él).
- `Clases/05-tests/practica/archivos.test.js` y `tareas-de-prueba.json`: nuevos.
- `Clases/05-tests/REVISION.md`: cierre.

---

## 2026-10-07 — Sesión 6: Clase 5 (tests), pasos 5.A a 5.C

**Qué pasó**

Eligió tests por sobre fechas y prioridades. Hizo tres pasos:

- **5.A:** tests a mano con `if` y `console.log` sobre `estaEnRango`.
- **5.B:** sacó la repetición a una función propia de comprobación.
- **5.C:** los mismos cinco casos con `node:test` y `assert`. **Cinco en verde con
  `node --test`.** Rompió la función a propósito y vio cuál se ponía en rojo.

Faltan 5.D y 5.E. Detalle en `Clases/05-tests/REVISION.md`.

**El momento que más enseñó**

Escribió un test que comparaba `true === true` sin llamar nunca a la función: **pasaba
siempre**. Se le explicó que un test así es peor que no tener test, y quedó la regla:
*obtenido sale de ejecutar; esperado lo escribís vos*.

**Patrones que se repiten y hay que tener presentes**

1. **Copia la forma genérica de la Referencia literal**, sin sustituir los marcadores
   (dejó `assert.equal(obtenido, esperado)` tal cual). Cuando se le da una forma genérica,
   **decirle explícitamente qué va en cada hueco en su caso.**
2. **Llaves y dónde cierra un bloque** sigue siendo su error estructural más frecuente
   (esta vez todo el archivo quedó adentro de la función).
3. **Orden de los argumentos**: agregó un parámetro primero en la definición y último en
   las llamadas. Conviene mostrarle definición y llamada alineadas una debajo de la otra:
   eso lo destrabó al toque.
4. Las instrucciones en lista corta ("escribí los otros cuatro, con nombres que digan qué
   caso cubre") **no le alcanzan**: pidió explícitamente qué hacer. **Darle la tabla de
   casos** (entrada → esperado → qué debería decir el nombre) lo destrabó enseguida.

**Cambios en el repo**

- `Clases/05-tests/`: enunciado, práctica (`a-mano.js`, `rango.test.js`) y revisión parcial.
- `Referencia/06-tests.md`: **nuevo**.

---

## 2026-09-28 — Sesión 5: Clase 4 (funciones), y el aviso más importante hasta ahora

**Qué pasó**

Hizo la **Clase 4 entera**: refactorizó el asistente con tres funciones y lo separó en
dos archivos. El programa quedó haciendo exactamente lo mismo, pero `asistente.js` pasó
a leerse como un índice. Las cuatro preguntas de cierre, bien.

Pero lo importante de esta sesión es otra cosa.

**El aviso: "estoy adivinando"**

A mitad del refactor dijo, textual:

> *"No estoy entendiendo las functions sinceramente, no las comprendo, no entiendo la
> logica detras de las mismas, estoy adivinando que hacer, mucho me lo resuelve el
> autocompletar."*

**Esto es exactamente lo que el repo existe para evitar.** Lo que se hizo, y que es la
receta a repetir:

1. **Frenar el refactor.** El archivo de 70 líneas era demasiado grande para aprender el
   concepto de cero.
2. **Pedirle apagar el autocompletar de Copilot** para este repo.
3. **Bajar a `practica/` con ejercicios mínimos de otro dominio** — cinco ejercicios de
   tres líneas, sin tareas ni archivos ni comandos, solo funciones
   (`Clases/04-funciones/EJERCICIOS-FUNCIONES.md`).
4. **Volver al proyecto real después.**

Funcionó: después de los cinco ejercicios pudo escribir y usar sus funciones en el
asistente. **Cuando un concepto no entra, esta es la salida, no explicarlo otra vez más
despacio.**

**Lo que hay que vigilar**

- **El valor de retorno descartado le pasó por tercera vez** (`JSON.stringify` suelto en
  la Clase 2, dos veces; `cargarTareas()` sin `const tareas =` acá). Repreguntarlo.
- **Anidar sigue siendo el punto débil.** Metió el `return` adentro del `if`.
- **Tercera conversación sobre nombres** (`lista` para una ruta, `n1`/`tareas1` para
  parámetros). La regla que se le dio: un buen nombre contesta "¿qué es esta cosa?".
- **Probar en una copia limpia del scratchpad es indispensable**: en el 4.B reintrodujo
  el bug del 2.E y en su máquina no se veía, porque su `tareas.json` ya existe.

**Cambios en el repo**

- `Clases/04-funciones/`: enunciado, ejercicios, práctica (5 archivos suyos) y revisión.
- `Referencia/05-funciones.md`: **nuevo**, con la parte **2.bis "Cómo se piensa una
  función (la receta)"** agregada a pedido suyo.
- `Asistente/funciones.js`: **nuevo** (lo escribió él).

---

## 2026-09-25 — Sesión 4: Clase 2 terminada y Clase 3 completa

**Qué pasó**

Sesión larga y productiva. Terminó el 2.C (descubrió que `texto.length` daba 23 y
`lista.length` 3), hizo 2.D y 2.E, **contestó las cuatro preguntas de la Clase 2**,
creó su `.gitignore` y **commiteó y pusheó él mismo por primera vez** (`74f64a9`).

Después hizo la **Clase 3 entera**: `eliminar`, validación, objetos `{texto, hecha}` y
`completar`. Cuatro comandos andando. Detalle en
`Clases/03-completar-y-borrar/REVISION.md`.

**Lo más importante para próximas sesiones**

1. **Anidar `if` es su punto débil actual.** Tropezó tres veces en la misma sesión
   poniendo la condición del detalle al lado de la del comando. Dijo *"es algo que nunca
   me explicaste"* y tenía razón. Se agregó la sección al Referencia 01. Cuando algo
   tenga dos niveles de decisión, **mapearle explícitamente qué va en cada nivel**.
2. **No ofrecerle cortar la sesión.** Dijo textual: *"no voy a dejar nada hasta que yo
   te diga"*. Si se marea, simplificar (una cosa por vez, menos texto), nunca sugerir parar.
3. **Cuando se marea, el problema suele ser que le tiré tres cosas juntas.** La salida
   que funciona: recordarle en una línea dónde está, qué ya logró, y darle **un** paso.
4. **Probar su código en una copia aislada del scratchpad** (copiando `asistente.js`,
   `tareas.json` y `package.json`) para no tocar sus datos y poder mostrarle la tabla de
   qué pasa con cada caso. Eso lo destrabó varias veces.
5. **Pedirle que prediga antes de correr** sigue siendo lo que mejor funciona.

**Cambios en el repo**

- `Clases/03-completar-y-borrar/`: enunciado, práctica y revisión. **Nuevos.**
- `Referencia/04-numeros-y-listas.md`: **nuevo** (texto vs número, `NaN`, `splice`,
  objetos, meter un objeto en una lista, ternario).
- `Referencia/01-js-lo-minimo.md`: sección nueva **"Decidir adentro de una decisión"**.
- `Clases/02-recordar-tareas/REVISION.md`: cierre.
- `.gitignore`: lo creó él. `Asistente/tareas.json` no se sube.

---

## 2026-09-14 — Sesión 3: cierre de Clase 1, diseño de la persistencia, arranque de Clase 2

**Qué pasó**

Volvió después de una semana. Había dejado `const tareas = []` creado.

- **Cerró la Clase 1.** Hizo el `push` y descubrió solo que la tarea no sobrevive entre
  corridas (la pregunta bisagra). Después **diseñó la persistencia en palabras**, sin
  código: cargar al empezar, operar, guardar la lista entera al terminar.
- **Arrancó la Clase 2** (`Clases/02-recordar-tareas/`). Hizo 2.A y 2.B, descubrió que
  `writeFileSync` sobreescribe. Quedó a mitad del 2.C. Se fue a cenar.

Detalle en los `REVISION.md` de Clase 1 (cierre) y Clase 2 (parcial).

**Lo que se aprendió sobre cómo enseñarle**

- **El diseño en palabras funciona muy bien.** Con escenarios concretos para simular
  ("ayer guardaste 'pagar la luz', hoy corrés agregar...") llegó solo al diseño completo.
  Usar esto antes de cada paso grande.
- **Hacerlo verificar corriendo en vez de corregirle** sigue siendo lo mejor: la
  posición 3, las comillas, la sobreescritura — todo lo encontró mirando la salida.
- **Tiende a adelantarse y juntar pasos.** No frenarlo en seco, pero cuando eso lo
  confunde, volver a "una cosa por vez" y explicar por qué.
- **La confusión terminal vs archivo volvió** (escribió `import` en PowerShell).
  No está firme. Si vuelve a pasar, repasar la tabla de los dos lugares.
- **Los enunciados tienen que ser más literales.** Dos veces el problema fue una frase
  ambigua mía ("en la primera línea", "a mano"). Escribir qué archivo, qué se corre y
  qué debería verse.

**Cambios en el repo**

- `Clases/02-recordar-tareas/ENUNCIADO.md` y `practica/`: **nuevos**.
- `Referencia/03-archivos-y-json.md`: **nuevo**. Para qué sirve, `import`, `fs`,
  escribir/leer/existsSync, rutas relativas, JSON (parte 4, bloqueada hasta el 2.C).
- `Clases/01-primer-programa/REVISION.md`: cierre. `Clases/02-recordar-tareas/REVISION.md`: parcial.

---

## 2026-09-06/07 — Sesión 2: la visión Jarvis y el primer código propio

**Qué pasó**

Arrancó contando **qué asistente quiere**: un Jarvis. Que le recuerde cosas, le diga
qué tareas tiene, le organice los repos y ponga agentes de Claude a trabajar en código
automáticamente. Quedó registrado en `04-proyecto-asistente.md`, junto con la división
que ahora ordena el proyecto: **reactivo → proactivo → autónomo**, y la advertencia de
no saltar a lo espectacular antes de tener estado, errores y permisos.

Después, la primera sesión de código real. **Escribió su primer programa.**

**Lo que hizo**

- Cerró **1.A** (`npm init -y`, `"type": "module"`, archivo que imprime).
- Cerró **1.B**: buscó `process.argv` en Google como decía el enunciado, imprimió la
  lista completa, y **entendió por qué su palabra cae en la posición 2**.
- Cerró **1.C.1 y 1.C.2**: cadena `if / else if / else` con los cuatro casos cubiertos.
- Queda **1.C.3** (guardar y listar tareas de verdad).

Detalle completo en `Clases/01-primer-programa/REVISION.md`.

**Lo que se aprendió sobre cómo enseñarle** ← lo más importante de esta entrada

A mitad de sesión dijo, textual: *"no entiendo qué es lo que querés que logre hacer, no
sé por qué usamos eso de node Asistente/asistente.js, no entiendo para qué sirve, no
entiendo por qué usamos process.argv (...) no sé correr cosas en consolas"*.

**El error fue mío: arranqué explicando por la mitad.** Di por sabido qué es una
terminal, qué es Node, y por qué un programa de consola necesita `argv`. Él nunca lo
había visto. La frustración no vino del ejercicio: vino de no tener el piso.

Se escribió `Referencia/02-la-terminal-y-node.md` con todo eso desde cero. **Antes de
introducir cualquier herramienta nueva, explicar primero por qué existe y qué problema
resuelve.** El "para qué sirve" va antes que el "cómo se usa", siempre.

También apareció, textual: *"no me quiero empezar a frustrar, pero me enoja no tener ni
idea de lo que quiero hacer"*. Sirvió nombrarlo: esa es exactamente la parte atrofiada
que vinimos a entrenar, y que le moleste significa que la está usando. **No minimizar
la frustración ni consolar de más: explicarle qué músculo le duele y por qué.**

Y funcionó separar, cada vez que se trababa: *¿es que no sabés qué querés que pase, o
que no sabés cómo se escribe?* Hacia el final él mismo llegó a decir la lógica correcta
en palabras antes de saber escribirla. Ahí la traba ya era solo sintaxis → `Referencia/`.

**Cambios en el repo**

- `04-proyecto-asistente.md`: la visión Jarvis, los tres escalones, las etapas 9–11.
- `Referencia/02-la-terminal-y-node.md`: **nuevo**. Terminal, Node, `node archivo.js`,
  por qué consola y no web, y por qué existe `process.argv`. Es el piso.
- `Referencia/01-js-lo-minimo.md`: sección nueva **"Comparar y combinar condiciones"**
  (`&&`, `||`, `!`, el `||` como valor por defecto, y `??`). Creía que `||` era "and".
- `Clases/01-primer-programa/REVISION.md`: **nuevo**.

---


## 2026-09-03 — Sesión 1 (cont.): estructura del repo

**Qué pasó**

Beltrán aclaró algo importante: **la sintaxis le cuesta mucho, se la olvida, está casi
de cero con eso.** Confirmó que el objetivo y el método le parecen correctos.

De ahí salieron dos cosas:

- **Enmienda al método** (al final de `02-objetivo-y-metodo.md`): la sintaxis no es lo
  atrofiado, así que Claude sí puede dar material de consulta. Nace `Referencia/`.
  La línea: forma genérica del idioma sí, solución a su problema no.
- **Recalibración:** tareas partidas en pasos chicos con "listo cuando" verificable.
  La Tarea 1 original se reescribió como Clase 1 en tres pasos (1.A, 1.B, 1.C).

A pedido suyo se estructuró el repo entero: `Referencia/`, `Clases/`, `Asistente/`,
más un `README.md` con el mapa. Criterio: separar lo que escribe Claude (contexto,
enunciados, chuletas, revisiones) de lo que escribe él (`practica/` y `Asistente/`).

Se fue antes de empezar a programar. Dejó todo listo para arrancar directo la próxima.

**Estado del código:** sigue sin escribirse una línea. Clase 1 asignada, sin empezar.

---

## 2026-09-03 — Sesión 1: definir el rumbo

**Qué pasó**

Primera sesión. Beltrán se presentó y explicó por qué quiere aprender: siente que
delegando en la IA perdió conocimientos que tenía.

Decisiones tomadas:

- **Lenguaje: JavaScript.** No Python (no sabe nada) ni TS (poco). Se consolida la
  base que ya tiene. Razonamiento completo en `03-nivel-y-stack.md`.
- **Modo profesor: DURO.** Claude nunca escribe el código. Regla en `02-objetivo-y-metodo.md`.
- **Formato: proyecto real** (su asistente personal) en incrementos chicos, con
  chequeo de conceptos en cada paso. Quiere asegurarse de ir aprendiendo, no solo avanzar.
- **Empezamos por consola (Node), no por web.** Razón en `03-nivel-y-stack.md`.
- Se creó esta carpeta `Informacion/` a pedido suyo, para que las sesiones de Claude
  sean continuas.

**Diagnóstico compartido:** lo atrofiado es *generar* y *debuggear*; *leer y revisar*
se conserva. De ahí sale todo el método.

**Estado del código:** todavía no se escribió nada. Tarea 1 asignada, sin entregar.

**Entorno verificado:** Node v25.2.1, npm 11.7.0, git 2.49.0.
