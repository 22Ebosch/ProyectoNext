"use server";
import prisma from "./prisma";

export async function getTareasPendientes() {
  const tareasPendientes = await prisma.tarea.findMany({
    where: {
      status: 'PENDIENTE',
    },
  });
  return tareasPendientes;
}

export async function getTareasEnProgreso() {
  const tareasEnProgreso = await prisma.tarea.findMany({
    where: {
      status: 'EN_PROGRESO',
    },
  });
  return tareasEnProgreso;
}

export async function getTareasFinalizadas() {
  const tareasFinalizadas = await prisma.tarea.findMany({
    where: {
      status: 'FINALIZADA',
    },
  });
  return tareasFinalizadas;
}

export async function crearTarea(data) {
  const { titulo, descripcion } = data;

  const tarea = await prisma.tarea.create({
    data: data,

  })
  return tarea;
}

export async function eliminarTarea(id) {
  const tareaEliminada = await prisma.tarea.delete({
    where: {
      id: id,
    },
  });
  return tareaEliminada;
}

export async function actualizarTarea(id, data) {
  const tareaActualizada = await prisma.tarea.update({
    where: {
      id: id,
    },
    data: data,
  });
  return tareaActualizada;
}
