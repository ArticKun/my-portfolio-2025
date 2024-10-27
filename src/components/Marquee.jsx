
import image1 from '../assets/marquee/1.webp';
import image2 from '../assets/marquee/2.webp';
import image3 from '../assets/marquee/3.webp';
import image4 from '../assets/marquee/4.webp';
import image5 from '../assets/marquee/5.webp';
import image6 from '../assets/marquee/6.webp';
import image7 from '../assets/marquee/7.webp';
import image8 from '../assets/marquee/8.webp';
import image9 from '../assets/marquee/9.webp';
import image10 from '../assets/marquee/10.webp';
import image11 from '../assets/marquee/11.webp';
import image12 from '../assets/marquee/12.webp';



const Marquee = () => {

    return (
        
        <div className="flex items-center">
            <div className="relative overflow-hidden">
                <div className="absolute top-[-25.5%] z-10 h-1/2 scale-x-125 
                     scale-y-75 rounded-[100%] bg-white 2xl:scale-y-95">
                </div>
                <div className="absolute bottom-[-25.5%] z-10 h-1/2 scale-x-125 
                     scale-y-75 rounded-[100%] bg-white 2xl:scale-y-95">
                </div>

                <div className="marquee-10 sm:marquee-15 xl:marquee-30 w-full">
                    <div className="grid h-96 w-[350vw] grid-cols-12 gap-3 sm:h-[30rem] 
                        sm:w-[300vw] lg:w-[200vw] 2xl:h-[40rem]">
                        <img className="h-full w-full object-cover rounded-xl " 
                             src={ image1 }
                             alt="" />
                        <img className=" h-full w-full object-cover" 
                             src={ image2 }
                             alt="" />
                        <img className="h-full w-full object-cover rounded-xl"
                             src={ image3 }
                             alt="" />
                        <img className="h-full w-full object-cover object-top rounded" 
                             src={ image4 } 
                             alt="" />
                        <img className=" h-full w-full object-cover rounded-xl" 
                             src={ image5 }  
                             alt="" />
                        <img className="h-full w-full object-cover rounded-xl" 
                             src={ image6 } 
                             alt="" />
                        <img className="h-full w-full object-cover rounded-xl" 
                             src={ image7 }  
                             alt="" />
                        <img className="h-full w-full object-cover rounded-xl" 
                             src={ image8 } 
                             alt="" />
                        <img className="h-full w-full object-cover rounded-xl" 
                             src={ image9 }  
                             alt="" />
                        <img className="h-full w-full object-cover rounded-xl" 
                             src={ image10 } 
                             alt="" />
                        <img className=" h-full w-full object-cover rounded-xl" 
                             src={ image11 }  
                             alt="" />
                        <img className=" h-full w-full object-cover rounded-xl" 
                             src={ image12 } 
                             alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Marquee
