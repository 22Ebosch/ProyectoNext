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

export async function actualizarEstadoTarea(id, status) {
  const tareaActualizada = await prisma.tarea.update({
    where: {
      id: Number(id),
    },
    data: {
      status: status,
    },
  });
  console.log(tareaActualizada);
  return tareaActualizada;
}

export async function crearUsuario(data) {
  const { contrasena, email } = data;

  const usuario = await prisma.usuario.create({
    data: data,
  })
  return usuario;
}

export async function obtenerUsuarios() {
  const usuarios = await prisma.usuario.findMany();
  return usuarios;
}

export async function actualizarUsuario(id, data) {
  const usuarioActualizado = await prisma.usuario.update({
    where: {
      id: id,
    },
    data: data,
  });
  return usuarioActualizado;
}

export async function eliminarUsuario(id) {
  const usuarioEliminado = await prisma.usuario.delete({
    where: {
      id: id,
    },
  });
  return usuarioEliminado;
}

export async function obtenerUsuarioPorEmail(email) {
  const usuario = await prisma.usuario.findUnique({
    where: {
      email: email,
    },
  });
  return usuario;
}
