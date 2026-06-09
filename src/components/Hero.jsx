//import hero from '../assets/abstract.jpg'
import hi from '../assets/hi.png'
import { Link  } from 'react-router-dom'
export const Hero = () => {
  return (
    <section id="home"
    className="relative min-h-screen md:flex md:items-center overflow-hidden ">
        {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage: `url(${hero})` }}/>
        */}
            <div className="absolute inset-0 lg:hidden bg-black/30"></div>      
            <div className="absolute inset-0 bg-gradient-to-b from-stone-500 to-stone-300 md:bg-gradient-to-r"></div>
            {/* Hi icon */}
            <div className="absolute lg:block hidden top-24 translate-x-190 z-10" 
            data-aos="fade-up"
            data-aos-delay="300">
                <img src={hi} alt="Hi icon"
                className="w-24 h-24">
                </img>
            </div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8
            flex flex-col lg:flex-row items-center justify-between
            w-full pb-16 pt-2 sm:pt-16 md:pt-0 md:pb-0">
                <div
                className="max-w-2xl mt-24 lg:mt-0 mb-8 lg:mb-0
                lg:pr-8 text-center lg:text-left order-1"
                data-aos="fade-right"
                data-aos-delay="200">                
                <h1 className="text-3xl sm:text-4xl md:text-5xl
                font-bold text-gray-900 mb-4 leading-tight">Hello I'm <span className="md:text-gray-600 text-gray-200">
                    Alok Kuri</span></h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" >FullStack Developer</h2>
                    <p className= "text-base sm:text-lg md:text-xl md:text-gray-900 text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Maiores, rem distinctio? Eius et temporibus delectus cum 
                    ipsa asperiores, esse, nemo veritatis qui obcaecati repellat 
                    fuga magnam error animi repellendus consectetur officia,
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">

                        <Link to="works" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-600 text-white
                        font-medium rounded-lg hover:bg-gray-700 transition duration-300 text-sm sm:text-base"
                        data-aos="zoom-in"
                        data-aos-delay="400">View Project</Link>

                        <Link to="contact" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent text-white border-2 border-white
                        font-medium rounded-lg hover:bg-gray-700 transition duration-300 text-sm sm:text-base"
                        data-aos="zoom-in"
                        data-aos-delay="500">Contact Me</Link>
                    </div>
                </div>
            
            <div className="border-2 border-white rounded-xl bg-transparent
            p-4 md:p-5 w-full max-w-xs sm:max-w-xs mx-auto lg:mx-0 order-2 mt-36 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="300">

                <div className="space-y-3 sm:space-y-4">
                    {[
                        {label:'Experience', value:'2+ Years'},
                        {label:'Project', value:'20+'},
                        {label:'Clients', value:'25+'}
                    ].map((item,index)=>(
                        <div key={index}
                        className="flex items-center justify-between"
                        data-aos="fade-left"
                        data-aos-delay={400 + (index * 100)}>
                            <span className="text-sm sm:text-base md:text-gray-500 text-gray-300 font-medium">
                                {item.label}
                            </span>
                            <span className="text-base sm:text-lg md:text-xl font-bold text-white">
                                {item.value}
                            </span>
                        </div>
                    ))}
                    <div className="border-t border-white/20 pt-3">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="md:text-gray-500 text-gray-300">Availability:</span>
                            <span className="text-green-700 font-semibold">Available for work</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}
