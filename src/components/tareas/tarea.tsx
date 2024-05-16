import React from 'react';

const Tarea = ({ tarea }) => {
  return (
    <div id={tarea.id} className="bg-white p-2 rounded mb-2 text-black">
      <h1 className="text-2xl">{tarea.titulo}</h1>
      <p className="text-base">{tarea.descripcion}</p>
    </div>
  );
};

export default Tarea;
