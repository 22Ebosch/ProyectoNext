"use client";
import Tarea from '../tareas/tarea';
import PopUp from '../popUp/popUp'; // Asegúrate de que la ruta de importación sea correcta
import { useState, useEffect } from 'react'
import { eliminarUsuario ,actualizarEstadoTarea } from '@/lib/data';
import { FaUserCircle } from 'react-icons/fa';

const Kanban = ({ onLogout, usuario, onUpdate, onEdit, onButtonClick, tareasPendientes, tareasEnProgreso, tareasFinalizadas }) => {

  const [tareas, setTareas] = useState([...tareasPendientes, ...tareasEnProgreso, ...tareasFinalizadas]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(false);

  const handleEditProfileClick = () => {
    setForm(true);
  };
  
  const onDragOver = (e) => {
    e.preventDefault();
  };
  
  const handleDeleteUser = async () => {
    await eliminarUsuario(usuario.id);
    onLogout();
  };

  const handleLogout = async () => {
    localStorage.removeItem('usuario');
    onLogout();
  };
  
  const handleDrop = async (e, nuevaCategoria) => {
    let id = e.dataTransfer.getData('tarea_id');
    const tareaActualizada = await actualizarEstadoTarea(id, nuevaCategoria);
    setTareas(prevTareas => {
      return prevTareas.map(tarea => tarea.id === id ? tareaActualizada : tarea);
    });
  };

  useEffect(() => {
    console.log('Valor actual de isOpen:', isOpen);
    console.log('Usuario:', usuario);
  }, [isOpen]);
  return (
    <>
      <FaUserCircle className="absolute right-4 top-4 cursor-pointer" size={32} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && usuario && (
        <div className="absolute right-4 mt-12 bg-white text-black p-4 rounded shadow-md">
          <p><strong>Email:</strong> {usuario.email}</p>
          <button className="bg-red-500 text-white mt-4 p-2 rounded" onClick={handleDeleteUser}>Eliminar usuario</button>
          <button className="bg-blue-500 text-white mt-4 p-2 rounded" onClick={handleLogout}>Cerrar sesión</button>
          <button className="bg-green-500 text-white mt-4 p-2 rounded" onClick={handleEditProfileClick}>Editar perfil</button>
        </div>
      )}
      {form && <PopUp onClose={() => setForm(false)} onUpdate={onUpdate} tarea={null} isEditingUser={form} usuario={usuario} />}
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
