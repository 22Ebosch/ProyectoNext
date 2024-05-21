import React, { useState, useEffect } from 'react';
import { actualizarUsuario } from '@/lib/data'

const FormEditarUsuario = ({ onClose, onUpdate, usuario }) => {
    
    const [formData, setFormData] = useState({
      email: '',
      contrasena: '',
      nickName: '',
      sobreMi: '',
    });

    useEffect(() => {
        if (usuario) {
          setFormData({
            email: usuario.email || '',
            contrasena: usuario.contrasena || '',
            nickName: usuario.nickName || '',
            sobreMi: usuario.sobreMi || '',
          });
        }
    }, [usuario]);
    

    function handleEmail(e) {
        setFormData(prevState => ({ ...prevState, email: e.target.value }));
      }
      function handleContraseña(e) {
        setFormData(prevState => ({ ...prevState, contrasena: e.target.value }));
      }
      function handleNick(e) {
        setFormData(prevState => ({ ...prevState, nickName: e.target.value }));
      }
      function handleSobreMi(e) {
        setFormData(prevState => ({ ...prevState, sobreMi: e.target.value }));
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (usuario) {
          // Estás editando un usuario existente
          const usuarioActualizado = await actualizarUsuario(usuario.id, formData);
          onUpdate(usuarioActualizado);
        }
        onClose();
    };
    

    return (
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
            Email:
          </label>
          <input value={formData.email} onChange={handleEmail} required type="text" id="email" placeholder='Email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Contraseña">
            Contraseña:
          </label>
          <input value={formData.contrasena} onChange={handleContraseña} required type="text" id="contraseña" placeholder='Contraseña' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NickName">
            NickName:
          </label>
          <input value={formData.nickName} onChange={handleNick} required type="text" id="nickName" placeholder='NickName' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="SobreMi">
            Sobre mi:
          </label>
          <input value={formData.sobreMi} onChange={handleSobreMi} required type="text" id="sobreMi" placeholder='sobreMi' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cerrar</button>
      </form>
    );
};

export default FormEditarUsuario;
