import FormTarea from '@/components/formTarea/formTarea'

function PopUp(props){
    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={props.Cerrar}>
            <dialog className="">
                <FormTarea/>
            </dialog>
        </div>
    )
}
export default PopUp;
