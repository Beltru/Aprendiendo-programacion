# Desde cero: la terminal, Node, y por qué existe `process.argv`

> Escrito en la sesión 2, cuando quedó claro que arranqué explicando por la mitad.
> Esto es el piso. Si algo más arriba no se entiende, el problema está acá.

---

## 1. Qué es la terminal

Una ventana donde **escribís el nombre de un programa y ese programa se ejecuta**.

Antes de que existieran las ventanas y los iconos, así se usaba una computadora: se
escribía qué querías que pasara. Los programadores la seguimos usando porque es rápida
y precisa: en vez de buscar un botón, escribís exactamente lo que querés.

Hacer doble clic en un icono y escribir el nombre del programa en la terminal son
**la misma acción**. Solo cambia cómo la pedís.

## 2. Qué es Node

JavaScript nació para vivir adentro del navegador. Si escribías JS, corría en una
página web y en ningún otro lado.

**Node es un programa que ejecuta JavaScript fuera del navegador**, directo en tu
computadora. Eso es todo lo que es. Gracias a Node, JS puede leer archivos de tu disco,
usar internet, correr como una herramienta — cosas que en el navegador no puede.

Cuando escribís `node` en la terminal, estás arrancando ese programa.

## 3. Qué significa `node Asistente/asistente.js`

Son dos partes:

    node                        Asistente/asistente.js
    └── el programa a correr    └── el archivo que le doy para que lea

Se lee: *"Node, agarrá este archivo y ejecutá lo que hay adentro."*

`Asistente/asistente.js` es solo **dónde está el archivo**: en la carpeta `Asistente`,
el archivo `asistente.js`. Por eso hay que estar parado en la raíz del repo cuando lo
corrés: la ruta se cuenta desde donde estás.

Node lee tu archivo de arriba hacia abajo, ejecuta cada línea, y cuando se termina el
archivo **el programa muere**. Eso es importante para el punto 5.

## 4. Por qué la consola y no una página web

Porque hacer páginas ya lo sabés hacer (HTML, Tailwind). Ese es terreno cómodo, y en
terreno cómodo uno se esconde: podés pasar tres horas acomodando un botón sin escribir
una línea de lógica.

La consola no tiene dónde esconderse. No hay colores, no hay diseño. Solo hay
**lógica**: qué entra, qué se decide, qué sale. Que es justo el músculo atrofiado.

La interfaz linda viene después, cuando la lógica ya esté firme.

## 5. Por qué existe `process.argv` — la parte que importa

Acá está la idea central, y es una sola:

> **Un programa de consola arranca, hace lo suyo, y muere. No te puede preguntar nada
> mientras corre. Lo único que sabe del mundo es lo que le escribiste en el momento de
> arrancarlo.**

Es como mandar a alguien al supermercado con una nota. Una vez que salió, no lo podés
llamar. Todo lo que necesita saber tiene que estar escrito en la nota, **antes** de
que se vaya.

Esa nota es lo que escribís después del nombre del archivo:

    node Asistente/asistente.js agregar "comprar leche"
    └──────── arrancar el programa ────┘ └─── la nota ───┘

Node junta **todas** las palabras de esa línea, las mete en una lista, y deja esa lista
disponible dentro de tu programa con el nombre `process.argv`. Tu código puede mirar
esa lista y decidir qué hacer.

**`process.argv` es el único canal entre tu teclado y el programa.** Sin eso, tu
programa hace siempre exactamente lo mismo, pase lo que pase.

### Qué hay adentro

    node Asistente/asistente.js hola mundo

produce:

    [0] 'C:\Program Files\nodejs\node.exe'      ← el programa Node
    [1] 'C:\...\Asistente\asistente.js'         ← tu archivo
    [2] 'hola'                                  ← lo primero que pediste vos
    [3] 'mundo'

Las posiciones 0 y 1 **son siempre esas dos**, en cualquier programa de Node. Por eso
lo tuyo empieza en la **posición 2**.

### `process.argv[2]` ya viene con algo adentro

Este es el error más fácil de cometer: pensar que hay que darle un valor.

    process.argv[2] = "Manteca"     // ✗ esto PISA lo que escribió el usuario
    const comando = process.argv[2] // ✓ esto LEE lo que escribió el usuario

El `=` va **siempre** en una dirección: lo de la derecha entra en lo de la izquierda.
`process.argv[2]` es una caja **que ya viene llena** — adentro está tu palabra. El
trabajo es leerla, no llenarla.

## 6. Adónde vamos con todo esto

El objetivo final es que esto funcione:

    node Asistente/asistente.js agregar "comprar leche"   → guarda la tarea
    node Asistente/asistente.js listar                    → muestra las tareas

Para eso el programa tiene que poder **distinguir** una orden de la otra. Y la única
forma de distinguirlas es mirar la palabra que quedó en `process.argv[2]`.

Todo lo demás de la Clase 1 se apoya en eso.
