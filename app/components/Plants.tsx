import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Plants() {
    return (
        <section className="bg-[#232323] px-8 md:px-20 py-10 items-start">
            <h1 className="font-bold text-4xl md:text-5xl text-white">01 | Website plants</h1>
            <div className="flex flex-col md:flex-row items-center">
                <img src="/mockup-plants-1.png" className="flex-1 w-96"></img>
                <div className="flex-1 flex flex-col items-start">
                    <p className="font-semibold text-xl text-white">Herramientas</p>
                    <div className="flex flex-wrap mt-2 md:mt-5">
                        <p className="border-2 border-white text-white text-base rounded-2xl py-1 px-5 mr-2 mt-2 md:mt-0">Vite</p>
                        <p className="border-2 border-white text-white text-base rounded-2xl py-1 px-5 mx-0 md:mx-2 mr-2 md:mr-0 mt-2 md:mt-0">React</p>
                        <p className="border-2 border-white text-white text-base rounded-2xl py-1 px-5 mx-0 md:mx-2 mr-2 md:mr-0 mt-2 md:mt-0">JavaScript</p>
                        <p className="border-2 border-white text-white text-base rounded-2xl py-1 px-5 mx-0 md:mx-2 mr-2 md:mr-0 mt-2 md:mt-0">Tailwind</p>
                        <p className="border-2 border-white text-white text-base rounded-2xl py-1 px-5 mx-0 md:mx-2 mr-2 md:mr-0 mt-2 md:mt-0">DaisyUI</p>
                        <p className="border-2 border-white text-white text-base rounded-2xl py-1 px-5 mt-2">Responsive design</p>
                    </div>
                    <div className="flex flex-col md:flex-row mt-10 md:mt-10">
                        <a href="https://plants-gilt.vercel.app/" target="_blank" className="flex items-center border-2 border-white text-white text-base rounded-2xl py-1 px-5 mr-0 md:mr-2"><FontAwesomeIcon icon={faLink} className="w-5 h-5 mr-2" />Link URL</a>
                        <a href="https://github.com/valeamayola/plants" target="_blank" className="flex items-center border-2 border-white text-white text-base rounded-2xl py-1 px-5 mx-0 md:mx-2 mt-2 md:mt-0"><FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />Ver en GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    )
}