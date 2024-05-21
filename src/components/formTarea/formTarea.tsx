"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { crearTarea, actualizarTarea } from '@/lib/data'

const FormTarea = ({ onClose, onUpdate, tarea }) => {
    const [formData, setFormData] = useState({
      titulo: '',
      descripcion: '',
      status: 'PENDIENTE',
    });
  
    useEffect(() => {
        if (tarea) {
          setFormData(tarea);
        }
      }, [tarea]);
  
    function handleTitulo(e) {
      setFormData(prevState => ({ ...prevState, titulo: e.target.value }));
    }
    function handleDescripcion(e) {
      setFormData(prevState => ({ ...prevState, descripcion: e.target.value }));
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(tarea);
        if (tarea) {
          // Estás editando una tarea existente
          const tareaActualizada = await actualizarTarea(tarea.id, formData);
          onUpdate(tareaActualizada);
        } else {
          // Estás creando una nueva tarea
          const nuevaTarea = await crearTarea(formData);
          onUpdate(nuevaTarea);
        }
    
        onClose();
      };
  
  
    return (
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tarea">
            Título tarea:
          </label>
          <input onChange={handleTitulo} value={formData.titulo} required type="text" id="tarea" placeholder='Tarea' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
            Descripción:
          </label>
          <input onChange={handleDescripcion} value={formData.descripcion} required type="text" id="descripcion" placeholder='Descripción' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cerrar</button>
      </form>
    );
  };
  

export default FormTarea;

