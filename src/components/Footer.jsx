

import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {


    return (
      <div className=" flex justify-center md:justify-between gap-10 mb-6 py-10 text-sm 
            md:px-40 md:text-lg mt-12 text-center md:items-center ">
            <div className=" space-y-1 ">
                <h3 className=" text-2xl text-gray-300">Arcade</h3>  
                <div className=" flex gap-2 text-gray-400 text-4xl">
                    <a 
                    href="https://www.instagram.com/fabian.patinho/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <FaGithubSquare className="text-gray-600"/>
                    </a>
                    <a 
                    href="https://github.com/ArticKun"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <FaInstagram className="text-gray-600"/>
                    </a>
                </div>
            </div>
            <div className=" flex flex-col text-start md:flex-row gap-x-10 cursor-pointer">
                <a className=" text-gray-300 text-base hover:text-yellow-500 " 
                   href="#arcade">
                   Inicio
                </a>
                <a className=" text-gray-300 text-base hover:text-yellow-500 " 
                   href="#portfolio">
                   Proyectos
                </a>
                <a className=" text-gray-300 text-base hover:text-yellow-500 "
                   href="#experience">
                   Experiencia
                </a>
                
            </div>
      </div>
    )
};

export default Footer
