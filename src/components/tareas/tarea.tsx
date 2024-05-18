import React from 'react';
import { eliminarTarea } from '@/lib/data';

const Tarea = ({ tarea, onUpdate, onEdit }) => {
  const handleDelete = async () => {
    await eliminarTarea(tarea.id);
    onUpdate();
  };

  const handleClick = () => {
    onEdit(tarea);
    console.log("tarea.tsx", tarea)
  };

  return (
    <div id={tarea.id} className="bg-white p-2 rounded mb-2 text-black relative group">
      <div className='text-right absolute right-0 top-0 invisible group-hover:visible mr-3'>
        <a onClick={handleDelete} className="text-red-500 underline cursor-pointer">Eliminar</a>
      </div>
      <h1 onClick={handleClick} className="text-2xl cursor-pointer">{tarea.titulo}</h1>
      <p className="text-base">{tarea.descripcion}</p>
    </div>
  );
};

export default Tarea;
