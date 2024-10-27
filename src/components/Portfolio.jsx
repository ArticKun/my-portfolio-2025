
import { useState } from 'react';

//PORTFOLIO IMAGES
import { projects } from '../data/projects';
// ICONS REACT
import { AiFillGithub } from 'react-icons/ai';
import Modal from './Modal';
// ANIMACION
import { motion } from 'framer-motion';



const Portfolio = () => {

    const [ currentProject, setCurrentProject ] = useState( 0 );
    const [ modalOpen, setModalOpen ] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        
        <section    
            className='my-4 flex flex-col md:flex-row gap-4 justify-center 
                    items-center'
            id='portfolio'
        >
            
            {/* MENU PROJECTS */}
            <div className='w-2/5 flex flex-col gap-4 text-center mb-4 md:mb-0 '
            >
                <motion.p 
                className=' text-gray-200 font-bold text-7xl md:text-6xl 
                text-center break-words break-all leading-[55px] mt-8 '
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                >
                <span className='secondary-color'>PRO</span>YECTOS
                </motion.p>

                <motion.ul 
                className='flex flex-col gap-x-6 justify-center text-2xl mt-4'
                whileInView={{ opacity:1,x:0 }}
                initial={{ opacity:0,x:-50 }}
                transition={{ duration: 1 }}
                >
                    { 
                        projects.map( ( project,index ) => (
                            <li 
                                key={ index }
                                onClick={ () => setCurrentProject( index ) }
                                className= { 
                                    `cursor-pointer custom-gradient2 hover:text-gray-500
                                    ${ currentProject === index ? 'active-project' : '' }` 
                                } 
                            >
                                { project.title }
                            </li>
                        )) 
                    }
                </motion.ul>

                {/* SOBRE MI */}
                <button 
                    className=' text-gray-300 font-grechen text-6xl md:text-8xl 
                    leading-9 md:leading-[55px] mb-6 mt-6 cursor-pointer -rotate-12 
                    text-center hover:scale-110 transition-transform duration-300'
                    onClick={ openModal }
                    >
                    Sobre<br/>Mí
                </button>
            </div>

            {/* PREVIEW PROJECTS */}
            <div className='glass w-full md:w-3/5 p-4 mb-4'>
                <div className=' w-full h-80 '>
                    <img 
                        src={ projects[ currentProject ].img } 
                        alt={ projects[ currentProject ].title }
                        className=' w-full h-full object-cover rounded-lg mb-4 '
                    />
                </div>
                <div className=' p-4 '>
                    <p className=' text-gray-200 my-4 '>
                        { projects[ currentProject ].description }
                    </p>
                    <div className=' flex space-x-4 '>
                        <a 
                            className=' px-4 py-2 bg-slate-600 text-gray-200
                                        rounded-lg hover:bg-slate-700 transition
                                        duration-300 flex items-center'
                            href={ projects[ currentProject ].links.github }
                            target="_blank" 
                            rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                        <a 
                            className=' px-4 py-2 bg-slate-600 text-gray-200
                                        rounded-lg hover:bg-slate-700 transition
                                        duration-300 '   
                            href={ projects[ currentProject ].links.site }
                            target="_blank" 
                            rel="noopener noreferrer">
                            Ver Sitio
                        </a>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <Modal modalOpen={ modalOpen } onCloseModal={ closeModal } />
        </section>
        
    )
};

export default Portfolio
