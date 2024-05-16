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
