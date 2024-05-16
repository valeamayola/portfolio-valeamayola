import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <section className="bg-[#232323] px-8 md:px-20 py-10">
            <div className="flex flex-col md:flex-row items-start justify-between">
                {/* <img src="/image-valentina.jpg" className="w-72 md:w-96 h-72 md:h-96 rounded-full mr-0 md:mr-5"></img> */}
                <div className="flex flex-col items-start mr-0 md:mr-10 flex-1">
                    <h1 className="font-bold text-4xl md:text-5xl text-[#BE6AB7]">sobre mi</h1>
                    <p className="font-medium text-base md:text-lg text-white mt-2 md:mt-5">Cuento con experiencia trabajando como desarrolladora 
                    frontend y diseñadora UX/UI. Me gradué como Técnica en Desarrollo y Calidad de Software en la Universidad 
                    Santo Tomás de Aquino, y actualmente estudio Diseño UX/UI en la Universidad Tecnológica Nacional de Buenos 
                    Aires. Soy una persona altamente creativa, resolutiva y con gran capacidad de aprendizaje. 
                    Me considero una persona de equipo, con excelentes habilidades de comunicación y colaboración. 
                    Me encanta trabajar junto con otros profesionales para lograr objetivos comunes.</p>
                </div>
                <div className="flex flex-col items-start flex-1 mt-10 md:mt-0">
                    <h1 className="font-bold text-4xl md:text-5xl text-[#BE6AB7]">contacto</h1>
                    <a href="mailto:valeamayola.contact@gmail.com" target="_blank" className="link link-hover flex items-center font-medium text-base md:text-lg text-white mt-5"><FontAwesomeIcon icon={faSquareEnvelope} className="w-5 h-5 mr-2" />valeamayola.contact@gmail.com</a>
                    <a href="https://www.linkedin.com/in/valentina-amayola" target="_blank" className="link link-hover flex items-center font-medium text-base md:text-lg text-white mt-5"><FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2" />www.linkedin.com/in/valentina-amayola</a>
                    <a href="https://www.github.com/valeamayola" target="_blank" className="link link-hover flex items-center font-medium text-base md:text-lg text-white mt-5"><FontAwesomeIcon icon={faSquareGithub} className="w-5 h-5 mr-2" />www.github.com/valeamayola</a>
                    <a className="link link-hover flex items-center font-medium text-base md:text-lg text-white mt-5"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5 mr-2" />valeamayola.contact@gmail.com</a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-20 items-start">
                <div className="flex flex-col items-start mr-0 md:mr-10 flex-1">
                    <h1 className="font-bold text-4xl md:text-5xl text-[#BE6AB7]">herramientas</h1>
                    <div className="flex flex-wrap md:flex-row mt-5">
                        <img src="/Html.png" className="w-8 md:w-16 mr-2" alt="HTML"></img>
                        <img src="/CSS3.png" className="w-8 md:w-16 mr-2" alt="CSS3"></img>
                        <img src="/JavaScript.png" className="w-8 md:w-16 mr-2" alt="JavaScript"></img>
                        <img src="/React.png" className="w-8 md:w-16 mr-2" alt="React"></img>
                        <img src="/GitHub.png" className="w-8 md:w-16 mr-2" alt="GitHub"></img>
                        <img src="/Figma.png" className="w-8 md:w-16 mr-2" alt="Figma"></img>
                        <img src="/Jira.png" className="w-8 md:w-16" alt="Jira"></img>
                    </div>
                </div>
                <div className="flex flex-col mt-10 md:mt-0 flex-1">
                    <h1 className="font-bold text-4xl md:text-5xl text-[#BE6AB7]">habilidades</h1>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <p className="font-medium text-base md:text-lg text-white mt-5">Design Thinking</p>
                            <p className="font-medium text-base md:text-lg text-white mt-5">Wireframing</p>
                            <p className="font-medium text-base md:text-lg text-white mt-5">Prototyping</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-medium text-base md:text-lg text-white mt-5 ml-0 md:ml-10">Metodologías ágiles</p>
                            <p className="font-medium text-base md:text-lg text-white mt-5 ml-0 md:ml-10">Trabajo en equipo</p>
                            <p className="font-medium text-base md:text-lg text-white mt-5 ml-0 md:ml-10">Atención al detalle</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-medium text-base md:text-lg text-white mt-5 ml-0 md:ml-10">Resolución de problemas</p>
                            <p className="font-medium text-base md:text-lg text-white mt-5 ml-0 md:ml-10">Capacidad de aprendizaje</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col justify-around mt-10 md:mt-20 items-start ">
                <h1 className="font-bold text-5xl text-[#BE6AB7]">contact</h1>
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-col">
                        <p className="flex items-center font-medium text-lg text-white mt-5"><FontAwesomeIcon icon={faSquareEnvelope} className="w-5 h-5 mr-2" />valeamayola.contact@gmail.com</p>
                        <p className="flex items-center font-medium text-lg text-white mt-5"><FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2" />linkedin.com/in/valentina-amayola</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center font-medium text-lg text-white mt-5"><FontAwesomeIcon icon={faSquareGithub} className="w-5 h-5 mr-2" />github.com/valeamayola</p>
                        <p className="flex items-center font-medium text-lg text-white mt-5"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5 mr-2" />valeamayola.contact@gmail.com</p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}