

import { motion } from "framer-motion";

const Contact = () => {

    return (
      <section className=" grid md:grid-cols-2 place-items-center glass " 
              id="contact" >
          {/* CONTAINER TEXT Y TAGS */}
          <div className=" flex flex-col gap-y-4 pb-6 md:px-8">
            {/* TEXT */}
            <motion.div 
            className=" text-gray-400 flex flex-col items-center 
            md:items-start md:p-6 " 
            whileInView={{ opacity:1,x:0 }}
            initial={{ opacity:0,x:-100 }}
            transition={{ duration: 1 }}
            >
                <h3 className="text-gray-300 text-6xl font-semibold px-4 
                mt-10 md:mt-5 mb-3 "
                > 
                    CON<span className="secondary-color">TACTO</span>
                </h3>
                <p className=" leading-7  md:text-start px-10 
                   md:px-4 text-balance ">
                Con gusto responderé cualquier consulta. Estoy disponible para entrevistas 
                o más información sobre mi perfil profesional. Será un placer conversar
                sobre cómo puedo aportar a su empresa
                </p>
            </motion.div>
            {/* TAGS */}
            <motion.div 
            className="flex items-center justify-center text-center gap-7 
            md:justify-start md:px-10 "
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            >
                <div className=" bg-[#171717]/40 p-5 rounded-lg glass ">
                    <h3 className=" text-2xl md:text-4xl font-semibold 
                                    text-gray-300">10 <span className="primary-color">+</span>
                    </h3>
                    <p className=" text-xs md:text-base text-gray-200">
                        Docente
                    </p>
                </div>
                <div className=" bg-[#171717]/40 p-5 rounded-lg glass ">
                    <h3 className=" text-2xl md:text-4xl font-semibold 
                                    text-gray-300">01 <span className="primary-color">+</span>
                    </h3>
                    <p className=" text-xs md:text-base text-gray-200">
                        Frontend
                    </p>
                </div>
                <div className=" bg-[#171717]/40 p-5 rounded-lg glass ">
                    <h3 className=" text-2xl md:text-4xl font-semibold 
                                    text-gray-300">05 <span className="primary-color">+</span>
                    </h3>
                    <p className=" text-xs md:text-base text-gray-300">
                        Diseñador
                    </p>
                </div>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.form 
            action="https://formspree.io/f/mgvevegn"
            method="POST"
            className="  p-5 md:p-12 "
            id="form"
            //Evita spam de bots
            onSubmit={(e) => {
                const honeypot = document.getElementById('honeypot').value;
                if (honeypot !== "") {
                  // Si el honeypot tiene algún valor, se detiene el envío.
                  e.preventDefault();
                  alert('Spam detectado.');
                }
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            >
                {/* <label htmlFor="name" className="block mb-1 text-gray-200">Nombre</label> */}
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    placeholder="Tu Nombre..."
                    className="mb-2 w-full rounded-md border 
                    border-gray-400 py-2 pl-2 pr-4"
                />
                {/* <label htmlFor="email" className="block mb-1 text-gray-200">Email</label> */}
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    placeholder="Tu Email..."
                    className="mb-2 w-full rounded-md border 
                    border-gray-400 py-2 pl-2 pr-4"
                />
                {/* <label htmlFor="textarea" className="block mb-1 text-gray-200">Mensaje</label> */}
                <textarea 
                    id="message"
                    name="message"
                    cols="30"
                    rows="4"
                    placeholder="Tu Mensaje..."
                    className="mb-2 w-full rounded-md border 
                    border-gray-400 py-2 pl-2 pr-4"
                />
                <button 
                    type="submit"
                    className=" w-full py-3 rounded-md text-gray-200 
                    font-semibold text-xl bg-gray-600 hover:bg-gray-700 ">
                    Enviar Mensaje
                </button>
          </motion.form>
      </section>
    )
};

export default Contact


/*
Justifica texto
text-justify 

Espaciado alto de letras
leading-7 
*/