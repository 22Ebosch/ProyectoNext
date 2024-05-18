"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Kanban from '../components/kanban/kanban';
import PopUp from '@/components/popUp/popUp';
import { getTareasPendientes, getTareasEnProgreso, getTareasFinalizadas } from '@/lib/data';

const HomePage = () => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const [tareasPendientes, setTareasPendientes] = useState([]);
  const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);

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
  }

  useEffect(() => {
    handleUpdate();
  }, []);

  return (
    <>
      <Kanban onButtonClick={handleButtonClick} onUpdate={handleUpdate} onEdit={handleEdit} tareasPendientes={tareasPendientes} tareasEnProgreso={tareasEnProgreso} tareasFinalizadas={tareasFinalizadas} />
      {mostrarPopUp && <PopUp onClose={handleClose} onUpdate={handleUpdate} tarea={tareaEditando} />}
    </>
  );
};

export default HomePage;
