import React from 'react';
import useState  from 'react'

const FormTarea = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function handleTitulo(e){
        setTitulo(e.target.value);
    }
    function handleDescripcion(e){
        setDescripcion(e.target.value);
    }
    return (
        <form>
            <div>
                <label>Titulo tarea:</label>
                <input onChange={handleTitulo} required type="text" name="tarea" id="tarea" placeholder='Trea'/>
            </div>
            <div>
                <label>Descripción:</label>
                <input onChange={handleDescripcion} required type="text" name="descripcion" id="descripcion" placeholder='Descripción'/>
            </div>
            <button type='submit'>Enviar</button>
            <button type='button'>Cerrar</button>
        </form>
    );
};

export default FormTarea;
