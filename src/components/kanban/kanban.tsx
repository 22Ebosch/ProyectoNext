"use client";
import Tarea from '../tareas/tarea';
import { useState, useEffect } from 'react'
import { actualizarEstadoTarea } from '@/lib/data';

const Kanban = ({ onUpdate, onEdit, onButtonClick, tareasPendientes, tareasEnProgreso, tareasFinalizadas }) => {

  const [tareas, setTareas] = useState([...tareasPendientes, ...tareasEnProgreso, ...tareasFinalizadas]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, nuevaCategoria) => {
    let id = e.dataTransfer.getData('tarea_id');
    // Actualiza el estado de la tarea en la base de datos
    const tareaActualizada = await actualizarEstadoTarea(id, nuevaCategoria);

    // Actualiza el estado de las tareas en el cliente
    setTareas(prevTareas => {
      return prevTareas.map(tarea => tarea.id === id ? tareaActualizada : tarea);
    });
  };

  return (
    <>
      <h1 className='text-center m-4'>Bienvenido a mi sitio web</h1>
      <div className="flex justify-around p-4 items-start">
        <div className="w-1/4 bg-red-200 p-2 rounded" onDragOver={onDragOver} onDrop={(e) => handleDrop(e, 'PENDIENTE')}>
          <h2 className="font-bold mb-2">Pendientes</h2>
          {tareasPendientes.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} onUpdate={onUpdate} onEdit={onEdit} />
          ))}
        </div>
        <div className="w-1/4 bg-red-200 p-2 rounded" onDragOver={onDragOver} onDrop={(e) => handleDrop(e, 'EN_PROGRESO')}>
          <h2 className="font-bold mb-2">En Progreso</h2>
          {tareasEnProgreso.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} onUpdate={onUpdate} onEdit={onEdit} />
          ))}
        </div>
        <div className="w-1/4 bg-blue-200 p-2 rounded" onDragOver={onDragOver} onDrop={(e) => handleDrop(e, 'FINALIZADA')}>
          <h2 className="font-bold mb-2">Finalizadas</h2>
          {tareasFinalizadas.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} onUpdate={onUpdate} onEdit={onEdit} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="" onClick={onButtonClick}>Añadir tarea</button>
      </div>
    </>
  );
};

export default Kanban;
