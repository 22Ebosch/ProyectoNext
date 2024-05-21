import React from 'react';
import FormTarea from '@/components/formTarea/formTarea';

function PopUp({ onClose, onUpdate, tarea }) {
    return (
        <dialog className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <FormTarea onClose={onClose} onUpdate={onUpdate} tarea={tarea} />
        </dialog>

    )
}
export default PopUp;
