"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Kanban from '../components/kanban/kanban';
import PopUp from '@/components/popUp/popUp';
import { getTareasPendientes, getTareasEnProgreso, getTareasFinalizadas, actualizarEstadoTarea } from '@/lib/data';
import FormUsuario from '@/components/formUsuario/formUsuario';

const HomePage = () => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const [tareasPendientes, setTareasPendientes] = useState([]);
  const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleButtonClick = () => {
    setMostrarPopUp(true);
  }

  const handleEdit = (tarea) => {
    setTareaEditando(tarea);
    setMostrarPopUp(true);
  };
  
  const handleClose = () => {
    setMostrarPopUp(false);
    setTareaEditando(null);
  }

  const handleUpdate = async () => {
    setTareasPendientes(await getTareasPendientes());
    setTareasEnProgreso(await getTareasEnProgreso());
    setTareasFinalizadas(await getTareasFinalizadas());
    console.log('Actualizando 1')
  }

  const handleDrop = async (e, nuevaCategoria) => {
    console.log('Actualizando')
    let id = e.dataTransfer.getData('tarea_id');
    await actualizarEstadoTarea(id, nuevaCategoria);
    await handleUpdate();
  };
  
  useEffect(() => {
    handleUpdate();
  }, []);
  
  if (!isLoggedIn) {
    return <FormUsuario onLogin={() => setIsLoggedIn(true)} />
  }
  return (
    <>
      <Kanban onUpdate={handleDrop} onButtonClick={handleButtonClick} onEdit={handleEdit} tareasPendientes={tareasPendientes} tareasEnProgreso={tareasEnProgreso} tareasFinalizadas={tareasFinalizadas} />
      {mostrarPopUp && <PopUp onClose={handleClose} onUpdate={handleUpdate} tarea={tareaEditando} />}
    </>
  );
};

export default HomePage;
