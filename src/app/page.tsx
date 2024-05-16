// HomePage.tsx
"use client"
import React from 'react';
import { useState } from 'react';
import Kanban from '../components/kanban/kanban';
import PopUp from '@/components/popUp/popUp';

const HomePage = () => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  
  const handleButtonClick = () => {
    setMostrarPopUp(true);
  }

  const handleClose = () => {
    setMostrarPopUp(false);
  }

  return (
    <>
      <Kanban onButtonClick={handleButtonClick}/>
      {mostrarPopUp && <PopUp onClose={handleClose}/>}
    </>
  );
};

export default HomePage;
