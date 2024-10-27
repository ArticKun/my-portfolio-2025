import { EXPERIENCES } from "../data/about";
import { motion } from "framer-motion";



const About = () => {
    
    return (
      <section className="pb-4" id="experience">
          <h2 className=" mt-10 mb-10 mx-7 text-start md:text-center 
          text-5xl md:text-6xl text-gray-300 font-bold "
          >
            <span className='secondary-color'>EX</span>PERIENCIA
          </h2>
          {/* CONTENEDOR CARDS */}
          <div>
            { EXPERIENCES.map( ( experience, index ) => (
                <div 
                key={ index }
                className="mb-4 flex flex-wrap lg:justify-center 
                glass p-7"
                >
                  <motion.div 
                  className="w-full lg:w-1/4 "
                  whileInView={{ opacity:1,x:0 }}
                  initial={{ opacity:0,x:-50 }}
                  transition={{ duration: 1 }}
                  >
                      <p className="mb-2 text-md text-gray-300">
                        { experience.year }
                      </p>
                  </motion.div>

                  <motion.div 
                  className="w-full max-w-xl lg:w-3/4 "
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 1 }}
                  >
                        <h3 className="mb-2 font-normal text-lg secondary-color">
                            { experience.role } &nbsp;
                            <span className="text-lg text-gray-300 ">
                              { experience.company }
                            </span>
                        </h3>
                        <p className="mb-4 text-gray-400">
                          { experience.description }
                        </p>
                        {/* TECH */}
                        <div className="flex flex-wrap">
                          {
                            experience.technologies.map( (tech,index) => (
                              <span className="mr-2 mt-4 rounded bg-gray-600 
                                    px-2 py-1 text-sm font-medium text-gray-200"
                                    key={index}
                                    >
                                    { tech }
                              </span>
                            ))
                          }

                        </div>
                  </motion.div>

                </div>
              )) 
            }
          </div>
      </section>
    )
};

export default About


/*
⚡ &nbsp;
Espacio entre texto , entidad HTML
*/