"use client";
import Tarea from '../tareas/tarea';

const Kanban = ({ onUpdate, onEdit, onButtonClick, tareasPendientes, tareasEnProgreso, tareasFinalizadas }) => {

  return (
    <>
      <h1 className='text-center m-4'>Bienvenido a mi sitio web</h1>
      <div className="flex justify-around p-4 items-start">
        <div className="w-1/4 bg-red-200 p-2 rounded">
          <h2 className="font-bold mb-2">Pendientes</h2>
          {tareasPendientes.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} onUpdate={onUpdate} onEdit={onEdit} />
          ))}
        </div>
        <div className="w-1/4 bg-green-200 p-2 rounded">
          <h2 className="font-bold mb-2">En Progreso</h2>
          {tareasEnProgreso.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} onUpdate={onUpdate} onEdit={onEdit} />
          ))}
        </div>
        <div className="w-1/4 bg-blue-200 p-2 rounded">
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
