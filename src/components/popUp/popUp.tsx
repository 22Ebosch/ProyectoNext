import React from 'react';
import FormTarea from '@/components/formTarea/formTarea';
import FormEditarUsuario from '@/components/formEditarUsuario/formEditarUsuario';

function PopUp({ onClose, usuario, onUpdate, tarea, isEditingUser }) {
    const FormComponent = isEditingUser ? FormEditarUsuario : FormTarea;

    return (
        <dialog className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <FormComponent usuario={usuario} onClose={onClose} onUpdate={onUpdate} tarea={tarea} />
        </dialog>
    )
}

export default PopUp;
