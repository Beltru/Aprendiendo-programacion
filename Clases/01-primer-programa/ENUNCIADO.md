# Clase 1 — Tu primer programa

## Qué vas a aprender

Que un programa de consola **arranca, hace algo y muere**. Y que eso tiene una
consecuencia incómoda que vas a descubrir solo al final.

De paso: leer argumentos, guardar cosas en una lista, y ramificar según un comando.

## Está partida en tres pasos

Hacelos **en orden**, y probá cada uno antes de seguir al siguiente. Si el paso A no
corre, el B no se arregla escribiendo más código.

---

### Paso 1.A — Que corra algo tuyo

En la raíz del repo:

1. Corré `npm init -y`. Mirá el `package.json` que aparece.
2. Agregale la línea `"type": "module"`. Esto le dice a Node que use la sintaxis
   moderna de módulos (`import`), la misma que ya viste en front.
3. Creá `Asistente/asistente.js` y hacé que imprima cualquier cosa en pantalla.
4. Corrélo con `node Asistente/asistente.js`.

**Listo cuando:** ves tu texto en la terminal.

Parece poco. No lo es: acabás de confirmar que la cadena entera funciona (Node instalado,
archivo en el lugar correcto, comando bien escrito). Cuando algo falle más adelante,
vas a saber que el problema no está acá.

---

### Paso 1.B — Leer lo que escribiste

Hacé que el programa imprima lo que pusiste **después** del nombre del archivo:

    node Asistente/asistente.js hola mundo

Tiene que poder ver ese `hola` y ese `mundo`.

**Esto tenés que buscarlo vos.** En el navegador no existía. Node tiene un objeto
global que guarda eso. No está en `Referencia/` a propósito.

Pista, si hace falta: buscá *"node command line arguments"*.

**Listo cuando:** imprimís los argumentos y **entendés qué son los dos primeros**
que aparecen, que no escribiste vos. No sigas sin entender eso — es la mitad del ejercicio.

---

### Paso 1.C — Agregar y listar

Ahora sí, el asistente:

    node Asistente/asistente.js agregar "Estudiar meteorología"
    node Asistente/asistente.js listar

Requisitos:

- `agregar` toma el texto y confirma que se agregó.
- `listar` muestra todas las tareas, numeradas.
- Si el comando no existe o no pusiste ninguno, el programa avisa qué comandos hay.

**Listo cuando:** los tres casos funcionan, incluido el comando inventado.

Ese tercer requisito no es relleno. Un programa que solo funciona cuando el usuario
hace todo bien no está terminado.

---

## Las dos preguntas

Contestalas cuando entregues. Valen tanto como el código.

1. Los dos primeros argumentos que imprimiste en el paso 1.B, ¿qué son y por qué
   están ahí?
2. Al correr `listar` después de `agregar`, ¿la tarea aparece? **Pensá la respuesta
   antes de probarlo**, y después probalo. Si te sorprendió, escribí por qué.

La segunda pregunta define la Clase 2. No busques la respuesta: descubrila corriendo
el programa.

## Si te trabás

Decile a Claude **dónde** te trabaste y qué probaste. No pidas el código: no te lo va
a dar, y tampoco te sirve. Sintaxis, en `Referencia/01-js-lo-minimo.md`.
