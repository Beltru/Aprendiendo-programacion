# Nivel real y stack elegido

## Dónde estoy parado (declarado el 2026-09-03)

| Tecnología | Nivel real |
|---|---|
| HTML / CSS / **Tailwind** | Base real. Hice páginas con esto. |
| **JavaScript** | Mi base real, pero la usé activamente hace ~1 año. Oxidada. |
| TypeScript | Poco. |
| Python | **Nada.** |
| Hardware / embebido físico | Nunca. |

En Operandi el stack es "lo que haga falta" (HTML, CSS, Tailwind, JS, TS, Python).
Pero para **aprender**, eso no sirve como criterio.

## Decisión: aprendemos en JavaScript

**Por qué JS y no Python ni TS:**

Ya construí páginas con JS y Tailwind — eso es base real, aunque esté oxidada.
Meter un lenguaje nuevo encima de una base floja da la sensación de avanzar mientras
el agujero sigue ahí. Primero se consolida JS.

- Cuando JS esté sólido → **TypeScript**, que es JS + tipos (salto corto).
- **Python** queda para cuando lo necesite de verdad, no antes.

## Decisión: consola (Node), no navegador

Arrancamos con programas de terminal en Node, sin HTML ni CSS.

**Por qué:** el layout es terreno conocido y me deja esconderme en lo que ya sé.
La consola obliga a la lógica pura, que es justo el músculo perdido. Cuando la lógica
esté firme le ponemos interfaz con Tailwind, y ahí juego de local.

## Entorno (verificado el 2026-09-03)

- Node **v25.2.1**
- npm **11.7.0**
- git **2.49.0.windows.1**
- SO: Windows 11. Terminal: PowerShell.
- Repo: `C:\Users\bako_\Desktop\Aprendiendo-programacion`
