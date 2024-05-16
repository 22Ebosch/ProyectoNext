import React from 'react';
import {useState}  from 'react'

const FormTarea = ({ onClose }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function handleTitulo(e){
        setTitulo(e.target.value);
    }
    function handleDescripcion(e){
        setDescripcion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para añadir la tarea
        console.log("Título: ", titulo);
        console.log("Descripción: ", descripcion);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tarea">
                    Título tarea:
                </label>
                <input onChange={handleTitulo} required type="text" id="tarea" placeholder='Tarea' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                    Descripción:
                </label>
                <input onChange={handleDescripcion} required type="text" id="descripcion" placeholder='Descripción' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        </form>
    );
};

export default FormTarea;

