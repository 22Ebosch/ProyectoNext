"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { crearTarea } from '@/lib/data'
import { useRouter } from 'next/navigation';
import { getTareasPendientes, getTareasEnProgreso, getTareasFinalizadas } from '@/lib/data';


const FormTarea = ({ onClose }) => {
    const router = useRouter()
    const [tareasPendientes, setTareasPendientes] = useState([]);
    const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
    const [tareasFinalizadas, setTareasFinalizadas] = useState([]);
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        status: 'PENDIENTE',
    });

    function handleTitulo(e) {
        setFormData(prevState => ({ ...prevState, titulo: e.target.value }));
    }
    function handleDescripcion(e) {
        setFormData(prevState => ({ ...prevState, descripcion: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await crearTarea(formData);
        onClose();
    };

    useEffect(() => {

        async function obtenerTareasPendientes() {
            const tareas = await getTareasPendientes();
            setTareasPendientes(tareas);
        }
    
        async function obtenerTareasEnProgreso() {
            const tareas = await getTareasEnProgreso(); 
            setTareasEnProgreso(tareas);
        }
    
        async function obtenerTareasFinalizadas() {
            const tareas = await getTareasFinalizadas(); 
            setTareasFinalizadas(tareas);
        }
    
        obtenerTareasPendientes();
        obtenerTareasEnProgreso();
        obtenerTareasFinalizadas();
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tarea">
                    Título tarea:
                </label>
                <input onChange={handleTitulo} required type="text" id="tarea" placeholder='Tarea' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                    Descripción:
                </label>
                <input onChange={handleDescripcion} required type="text" id="descripcion" placeholder='Descripción' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        </form>
    );
};

export default FormTarea;

