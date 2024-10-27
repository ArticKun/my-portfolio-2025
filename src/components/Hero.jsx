
// FOTO
import profilepic from "../assets/ppic2.png";
// ANIMACION
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// ICONS
import {
    AiFillLinkedin, 
    AiFillGithub, 
    AiFillBehanceCircle
} from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
} from 'react-icons/di'
import { RiTailwindCssFill,RiNextjsFill } from 'react-icons/ri';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiMongodb
} from 'react-icons/si'; 
import { FaGitAlt } from "react-icons/fa";
import { LiaFigma } from "react-icons/lia";



const Hero = () => {
  return (
    /* BENTO */
    <section className="grid md:grid-cols-8 gap-4 mt-6"
             id="home"
    >   
        {/* IMAGE / NAME ANIMATED */}
        <div className=" grid grid-cols-2 md:col-span-5 p-8 glass
        place-items-center "
        >
            <motion.img 
            className=" w-[800px] "
            src={ profilepic } 
            alt="profile pic" 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            /> 

            {/* PORTFOLIO TITLE */}
            <p 
            className=" transform -rotate-90 custom-gradient
            text-5xl lg:text-8xl xl:text-[120px] font-bold break-words 
            break-all leading-[40px] lg:leading-[75px] xl:leading-[95px]
            text-warp " >
                PORTAFOLIO
            </p>
            <div className=" ml-8 flex-col text-gray-200">
                <p className="text-2xl md:text-6xl font-semibold leading-6 ">
                    Hey! Soy Fabian
                    <br />
                    <TypeAnimation 
                        sequence={[
                            "Diseño",
                            1000,
                            "Web",
                            1000,
                            "UI",
                            1000,
                            "Música",
                            1000,
                            "Arte",
                            1000,
                        ]}
                        wrapper="span"
                        className="primary-color"
                        speed={ 30 }
                        repeat={ Infinity }
                    />
                </p>
                <a 
                    href="/CV Fabian Patiño.pdf"
                    download="CV Fabian Patiño"
                    className="inline-block mt-4 px-4 py-2 text-sm md:text-lg font-semibold
                    text-gray-100 bg-gray-600 hover:bg-gray-700 transition-all duration-300 
                    rounded-lg md:leading-6">
                    Download CV
                </a>
            </div> 
            {/* 2025 */}
            <motion.div 
            className=" text-gray-200 font-bold "
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            >
                <p className=" leading-[55px] text-7xl md:text-9xl 
                   md:leading-[95px] ">
                    20 <br/> 25
                </p>
            </motion.div>    
        </div>

        {/* TECHNOLOGYS */}
        <div className=" grid md:col-span-3 gap-4 ">
            {/* PRINCIPAL GRID */}
            <div className=" text-5xl p-8 glass flex flex-col justify-center items-center gap-4 ">
                <p className=" text-gray-200 text-2xl font-bold text-center ">
                    {/* Tecnologías que más uso */}
                </p>
                {/* LOGOS */}
                <motion.div 
                className=" grid grid-cols-4 gap-4 justify-items-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                >
                    <DiHtml5 className="text-orange-600 text-6xl"/>
                    <DiCss3 className="text-blue-600 text-6xl"/>
                    <RiTailwindCssFill className="text-sky-400 text-6xl"/>
                    <DiSass className="text-pink-600 text-6xl"/>
                    <DiJavascript1 className="text-yellow-500 text-6xl"/>
                    <DiReact className="text-blue-500 text-6xl"/>
                    <FaGitAlt className="text-orange-600 text-6xl"/>
                    <LiaFigma className="text-slate-300 text-6xl"/>
                    <SiAdobeillustrator className="text-orange-600 text-5xl"/>
                    <SiAdobephotoshop className="text-blue-600 text-5xl"/>
                    <SiAdobepremierepro className="text-purple-700 text-5xl"/>
                    <SiAdobeaftereffects className="text-indigo-800 text-5xl"/>
                </motion.div>

                <p className=" text-stone-50 text-2xl font-bold text-center ">
                    Tecnologías que aprendo
                </p>
                <motion.div 
                className=" flex gap-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                >
                    <DiNodejsSmall className="text-green-500 text-5xl"/>
                    <RiNextjsFill className="text-slate-200 text-5xl"/>
                    <SiMongodb className="text-green-500 text-5xl"/>
                </motion.div>
                
            </div>

            <div 
                className=" flex justify-center items-center glass 
                text-gray-600 text-6xl py-4 mb-8 md:mb-0 gap-1"
                >
                <a 
                href="https://github.com/ArticKun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                ><AiFillGithub />
                </a> 
                <a 
                href="https://www.linkedin.com/in/fabian-pati%C3%B1o-3a483a258/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition-transform duration-300"       
                ><AiFillLinkedin /></a> 
                <a 
                href="https://www.behance.net/fabianpatio1"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                ><AiFillBehanceCircle /></a>    
            </div>

        </div>        
      
    </section>
  )
}

export default Hero
