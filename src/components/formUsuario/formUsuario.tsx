import { useState } from 'react';
import React from 'react';
import { crearUsuario, obtenerUsuarios, obtenerUsuarioPorEmail } from '@/lib/data';

const FormUsuario = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [usuario, setUsuario] = useState(null);
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const usuarios = await obtenerUsuarios();
      const usuarioExistente = usuarios.find(usuario => usuario.email === email);
      if (usuarioExistente) {
        alert('Este email ya está registrado.');
      } else {
        await crearUsuario({ email, contrasena });
        const usuario = await obtenerUsuarioPorEmail(email);
        setUsuario(usuario);
        alert('Usuario registrado con éxito.');
      }
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const usuarios = await obtenerUsuarios();
      const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.contrasena === contrasena);
      if (usuarioValido) {
        setUsuario(usuarioValido);
        onLogin(usuarioValido);
      } else {
        alert('Email o contraseña incorrectos.');
      }
    };
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <form className="p-8 bg-white rounded shadow-md w-80">
            <h2 className="text-2xl font-bold mb-8 text-center">Iniciar sesión / Registrarse</h2>
            <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" required />
            <button className="mb-2 w-full px-3 py-2 bg-blue-500 text-white rounded" type="button" onClick={handleRegister}>Registrarse</button>
            <button className="w-full px-3 py-2 bg-green-500 text-white rounded" type="button" onClick={handleLogin}>Iniciar sesión</button>
          </form>
        </div>
      );
  };
  
  export default FormUsuario;