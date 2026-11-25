import {
  agregarTarea,
  completarTarea,
  eliminarTarea,
  listarTareas,
} from "./logica.js";
import { guardar, cargarTareas } from "./almacenamiento.js";

const agregar = "agregar";
const listar = "listar";
const eliminar = "eliminar";
const completar = "completar";
const n = Number(process.argv[3]);

const archivoTareas = "Asistente/tareas.json";

const tareas = cargarTareas(archivoTareas);

const comandos = [agregar, listar, eliminar, completar];

if (process.argv[2] === agregar) {
  const mensaje = agregarTarea(tareas, process.argv[3], process.argv[4]);
  guardar(tareas, archivoTareas);

  console.log(mensaje);
} else if (process.argv[2] === listar) {
  const mensaje = listarTareas(tareas);
  console.log(mensaje);
} else if (process.argv[2] === completar) {
  const mensaje = completarTarea(tareas, n);
  guardar(tareas, archivoTareas);

  console.log(mensaje);
} else if (process.argv[2] === eliminar) {
  const mensaje = eliminarTarea(tareas, n);
  guardar(tareas, archivoTareas);

  console.log(mensaje);
} else {
  console.log(
    comandos.join(", ") +
      " son los comandos disponibles. Para " +
      completar +
      " o " +
      eliminar +
      " una tarea, debe ingresar el número de la tarea como tercer argumento",
  );
}
