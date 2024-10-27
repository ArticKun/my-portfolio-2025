
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
//Libreria de scroll se reemplazo por forma nativa de scroll 
// import { Link } from "react-scroll"; 

const Navbar = () => {

    const [ nav, setnav ] = useState( false );
    const [activeLink, setActiveLink] = useState(''); // Estado para el enlace activo
    

    const handleNav = () => {
        setnav( !nav );
    };

    const closeMenu = () => {
        setnav( false )
    };

    // Función para determinar las clases del enlace activo
    const getLinkClass = (link) => {
        return activeLink === link ? 'text-[#FDA000] ' : '';
    };

    const handleSetActive = (link) => {
        setActiveLink(link); // Cambia el enlace activo
        closeMenu();         // Cierra el menú si está abierto
    };

    
    return (
        <nav className="text-gray-200 max-w-[1200px] h-24 mx-auto flex 
             justify-between items-center text-lg px-4 md:px-6 mt-2"
        >   
            {/* NAME OR LOGO */}
            <h1 
            className=" text-6xl md:text-7xl font-grechen px-8 "
            id="arcade"
            > 
                Arcade
            </h1>

            {/* NORMAL MENU */}
            <ul className="hidden md:flex cursor-pointer">
                <li className="p-5">
                    <a
                    href="#portfolio"
                    className={ getLinkClass('portfolio') }
                    onClick={ () => handleSetActive('portfolio') }
                    >
                    Proyectos
                    </a>
                </li>
                <li className="p-5">
                    <a
                    href="#experience"
                    className={ getLinkClass('about') }
                    onClick={ () => handleSetActive('about') }
                    >
                    Experiencia
                    </a>
                </li>
                <li className="p-5">
                    <a
                    href="#contact"
                    className={ getLinkClass('contact') }
                    onClick={ () => handleSetActive('contact') }
                    >
                    Contacto
                    </a>
                </li>
            </ul>

            {/* BURGUER BUTTON CONDITIONAL */}
            <div className="block md:hidden z-40 cursor-pointer relative" 
                 onClick={handleNav}>
                {/* Ícono de menú */}
                <AiOutlineMenu
                    size={25}
                    className={`mr-10 transform transition-transform duration-300 
                    secondary-color ${ nav ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100' }`}
                />
                {/* Ícono de cerrar */}
                <AiOutlineClose
                    size={25}
                    className={`mr-10 transform transition-transform duration-300 absolute top-0 left-0 
                    secondary-color ${ nav ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0' }`}
                />
            </div>

            {/* BARRA LATERAL CONDITIONAL */}
            <div className= { nav 
                ? "z-40 text-gray-300 fixed left-0 top-0 h-full w-[65%] lg:w-[40%] xl:w-[30%] border-r glass ease-in-out duration-500 flex flex-col justify-center items-center " 
                : "fixed left-[-100%] top-0 h-full ease-in-out duration-500" 
            }>
                <p className=" mb-6 text-6xl font-bold font-grechen ">
                Ver
                </p>
                {/* CLOSE BARRA LATERAL */}
                <ul className=" flex flex-col px-10 gap-3 text-2xl cursor-pointer md:text-4xl 
                italic py-6 rounded-lg glass "
                >
                    <button
                        className="bg-[#151515] text-[#FDA000] py-2 px-4 rounded-lg 
                        text-4xl font-bold font-grechen "
                        onClick={ closeMenu }
                        > {'<<'}
                    </button>
                    <li className="py-2 bg-[#151515] px-4 rounded-lg text-xl text-center ">
                        <a
                        href="#portfolio"
                        className={ getLinkClass('portfolio') }
                        onClick={ () => handleSetActive('portfolio') }
                        >
                        Proyectos
                        </a>
                    </li>
                    <li className="py-2 bg-[#151515] px-4 rounded-lg text-xl text-center">
                        <a
                        href="#experience"
                        className={ getLinkClass('experience') }
                        onClick={ () => handleSetActive('experience') }
                        >
                        Experiencia
                        </a>
                    </li>
                    <li className="py-2 bg-[#151515] px-4 rounded-lg text-xl text-center">
                        <a
                        href="#contact"
                        className={ getLinkClass('contact') }
                        onClick={ () => handleSetActive('contact') }
                        >
                        Contacto
                        </a>
                    </li>
                </ul>
                {/* <p className=" mt-6 text-7xl font-bold -rotate-90 ">XX</p> */}
            </div>
        </nav>
    )
};

export default Navbar
