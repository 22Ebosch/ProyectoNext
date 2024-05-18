import React from 'react';
import FormTarea from '@/components/formTarea/formTarea'; 

function PopUp({ onClose, onUpdate }) {
    return (
            <dialog className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <FormTarea onClose={onClose} onUpdate={onUpdate} />
                <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cerrar</button>
            </dialog>
    )
}
export default PopUp;
