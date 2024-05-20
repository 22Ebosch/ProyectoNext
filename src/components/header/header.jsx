'use client'
import React from 'react';
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';

const Header = ( usuario ) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <header className="w-full bg-blue-500 text-white p-4 relative">
        <h1 className="text-center text-xl">Este es mi encabezado</h1>
        <FaUserCircle className="absolute right-4 top-4 cursor-pointer" size={32} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="absolute right-4 mt-12 bg-white text-black p-4 rounded shadow-md">
            <p><strong>Email:</strong> {usuario.email}</p>
          </div>
        )}
      </header>
    );
  };
  
  export default Header;