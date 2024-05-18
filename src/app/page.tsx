// HomePage.tsx
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
  
  const handleButtonClick = () => {
    setMostrarPopUp(true);
  }

  const handleClose = () => {
    setMostrarPopUp(false);
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
      <Kanban onButtonClick={handleButtonClick} tareasPendientes={tareasPendientes} tareasEnProgreso={tareasEnProgreso} tareasFinalizadas={tareasFinalizadas}/>
      {mostrarPopUp && <PopUp onClose={handleClose} onUpdate={handleUpdate}/>}
    </>
  );
};

export default HomePage;
