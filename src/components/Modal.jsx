
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import profilepic from "../assets/ppic3.png";


const Modal = ( { modalOpen, onCloseModal } ) => {


    const [showImage, setShowImage] = useState(false); // Bandera para mostrar la imagen

    // Función para cerrar al hacer clic fuera del contenido del modal
    const onOverlayClick = ( e ) => {
        // Verifica que el clic sea en el overlay, no en el contenido
        if (e.target.classList.contains('overlay')) {
            onCloseModal();
        }
    };

    // Efecto para actualizar la bandera al abrir el modal
    useEffect(() => {
        if ( modalOpen ) {
            // Cambia la bandera según el tamaño de la ventana
            setShowImage(window.innerWidth > 768); 
        }
    }, [modalOpen]); // Solo se ejecuta cuando modalOpen cambia

    return (
        <>
            {
                modalOpen && (
                    <div 
                    className="overlay glass" 
                    onClick={ onOverlayClick }
                    >
                        <div className="modal-content text-gray-300 pb-8 md:pb-14 
                        p-14 gap-6 flex flex-col md:grid grid-cols-2 w-[800px] 
                        justify-center items-center"
                        >
                            <div className='flex flex-col justify-center items-start gap-4'>
                                <p className=' text-base blockquote'>
                                    <span className='secondary-color'>Docente</span> de Música, con mas de 10 años de experiencia, 
                                    <span className='secondary-color'>diseñador</span> gráfico con 5 años de experiencia y actualmente 
                                    aprendo <span className='secondary-color'>programación web</span>. <br/>
                                    Con la experiencia en diseño gráfico y un enfoque en el 
                                    desarrollo frontend, busco <span className='secondary-color'>fusionar</span> mis habilidades para 
                                    crear experiencias digitales visualmente atractivas e intuitivas ...
                                </p>
                                <button 
                                className="close text-4xl font-grechen py-2 secondary-color" 
                                onClick={ onCloseModal }
                                >  {'<'} Portafolio
                                </button>
                            </div>
                            {/* Renderiza la imagen solo si la bandera es verdadera */}
                            { showImage && (
                                <img 
                                    className="w-[200px] md:w-[500px]" 
                                    src={ profilepic } 
                                    alt="profile pic" 
                                />
                            )}
                        </div>
                    </div>
                ) 
            }
        </>
    )
};


// PropTypes para validar los tipos de las props
Modal.propTypes = {
    modalOpen   : PropTypes.bool.isRequired, // modalOpen debe ser un booleano
    onCloseModal: PropTypes.func.isRequired  // onCloseModal debe ser una función
};

export default Modal
