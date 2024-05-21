"use client"
import React from 'react';
import { useState, useEffect } from 'react';

const FormEditarUsuario = ({ onClose, onUpdate }) => {
    return (
      <form className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
            Email:
          </label>
          <input required type="text" id="email" placeholder='Email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Contraseña">
            Contraseña:
          </label>
          <input required type="text" id="contraseña" placeholder='Contraseña' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NickName">
            NickName:
          </label>
          <input required type="text" id="nickName" placeholder='NickName' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="SobreMi">
            Sobre mi:
          </label>
          <input required type="text" id="sobreMi" placeholder='sobreMi' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cerrar</button>
      </form>
    );
  };
  

export default FormEditarUsuario;

