export function estaEnRango(numero, cantidad) {
  return numero >= 1 && numero <= cantidad && Number.isInteger(numero);
}

export function agregarTarea(tareas, texto, fecha) {
  if (texto === "" || texto === undefined) {
    return "No se puede agregar una tarea vacía";
  } else {
    tareas.push({ texto: texto, hecha: false, fecha: fecha });
    return "Se agrego una nueva tarea";
  }
}

export function completarTarea(tareas, numero) {
  if (estaEnRango(numero, tareas.length)) {
    tareas[numero - 1].hecha = true;
    return "Se completo la tarea";
  } else {
    return "El número de tarea ingresado no es válido";
  }
}

export function eliminarTarea(tareas, numero) {
  if (estaEnRango(numero, tareas.length)) {
    tareas.splice(numero - 1, 1);
    return "Se elimino la tarea";
  } else {
    return "El número de tarea ingresado no es válido";
  }
}

export function listarTareas(tareas) {
  if (tareas.length === 0) {
    return "No hay tareas para mostrar";
  } else {
    return tareas
      .map((t, i) => {
        return ` ${i + 1}. ${t.texto} (${t.fecha === undefined ? "Sin fecha" : t.fecha}) ${t.hecha ? "[✓]" : "[ ]"}`;
      })
      .join("\n");
  }
}

export function editarTarea(tareas, numero, nuevoTexto) {
  if (estaEnRango(numero, tareas.length)) {
    tareas[numero - 1].texto = nuevoTexto;
    return "Se edito la tarea";
  } else {
    return "El número de tarea ingresado no es válido";
  }
}

export function filtrarNoHecha(tareas) {
  const noHecha = tareas.filter((t) => t.hecha === false);
  return noHecha;
}

export function listarPendientes(tareas) {
  const listaPendientes = [];
  tareas.forEach((t, i) => {
    if (t.hecha === false) {
      listaPendientes.push(
        ` ${i + 1}. ${t.texto} (${t.fecha === undefined ? "Sin fecha" : t.fecha}) ${t.hecha ? "[✓]" : "[ ]"}`,
      );
    }
  });
  return listaPendientes.join("\n");
}
