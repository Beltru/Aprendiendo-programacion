# El proyecto: mi asistente personal

Construimos **mi asistente personal** de verdad, desde el día uno, en incrementos
chicos que escribo yo. No ejercicios de juguete: algo que voy a seguir usando.

Empieza como programa de consola en Node y crece de a poco.

## Rumbo general (no es un contrato, se ajusta sobre la marcha)

Cada etapa existe para enseñar algo concreto, no para tildar features:

1. **Tareas en memoria** — leer argumentos de terminal, arrays, objetos, funciones,
   ramificación. → *entender qué es un programa que corre y termina.*
2. **Persistencia en archivo** — leer y escribir JSON en disco, async, manejo de errores.
   → *entender que el estado no sobrevive solo.*
3. **Completar / borrar / editar** — buscar dentro de una colección, IDs, inmutabilidad.
4. **Organización del código** — separar en módulos, `import`/`export`, responsabilidades.
5. **Fechas, prioridades, filtros** — el infierno de las fechas, ordenar, `map`/`filter`/`reduce`.
6. **Tests** — probar sin abrir la terminal cada vez.
7. **Interfaz web con Tailwind** — recién acá, cuando la lógica esté firme.
8. **Integraciones** (agenda, notas, lo que use de verdad) — APIs, `fetch`, claves y secretos.

## Regla del proyecto

Cada etapa se cierra cuando **puedo explicar sin mirar** por qué está escrita así.
Que funcione no alcanza.
