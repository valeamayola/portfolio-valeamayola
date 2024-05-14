export default function Info() {
    return (
        <section className="bg-[#232323] px-10 md:px-20 py-10">
            <div className="flex flex-col md:flex-row items-center align-center justify-around">
                <img src="/image-valentina.jpg" className="w-72 md:w-96 h-72 md:h-96 rounded-full mr-0 md:mr-5"></img>
                <div className="flex flex-col items-start ml-0 md:ml-5 mt-5 md:mt-0">
                    <h1 className="font-bold text-5xl text-[#BE6AB7]">about me</h1>
                    <p className="font-medium text-lg text-white mt-5">I currently work as a frontend developer and ux ui designer in a freelance company.
                        I graduated as a Technician in Software Development and Quality at the Santo Tomás de Aquino
                        University, and I am currently studying UX/UI Design at the National Technological University
                        of Buenos Aires. I am a highly creative, decisive person with a great capacity for learning.
                        I consider myself a team person, with excellent communication and collaboration skills.
                        I love working together with other professionals to achieve common goals.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-20 items-start mx-0 md:mx-10">
                <div className="flex flex-col items-start mr-5">
                    <h1 className="font-bold text-5xl text-[#BE6AB7]">tools</h1>
                    <div className="flex flex-wrap md:flex-row mt-5">
                        <img src="/Html.png" className="w-16 mr-2"></img>
                        <img src="/CSS3.png" className="w-16 mr-2"></img>
                        <img src="/JavaScript.png" className="w-16 mr-2"></img>
                        <img src="/React.png" className="w-16 mr-2"></img>
                        <img src="/GitHub.png" className="w-16 mr-2"></img>
                        <img src="/Figma.png" className="w-16 mr-2"></img>
                        <img src="/Jira.png" className="w-16"></img>
                    </div>
                </div>
                <div className="flex flex-col mt-10 md:mt-0">
                    <h1 className="font-bold text-5xl text-[#BE6AB7]">skills</h1>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <p className="font-medium text-lg text-white mt-5">Design Thinking</p>
                            <p className="font-medium text-lg text-white mt-5">Wireframing</p>
                            <p className="font-medium text-lg text-white mt-5">Prototyping</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-medium text-lg text-white mt-5 ml-0 md:ml-10">Agile methodologies</p>
                            <p className="font-medium text-lg text-white mt-5 ml-0 md:ml-10">Teamwork</p>
                            <p className="font-medium text-lg text-white mt-5 ml-0 md:ml-10">Learning capacity</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-medium text-lg text-white mt-5 ml-0 md:ml-10">Problem resolution</p>
                            <p className="font-medium text-lg text-white mt-5 ml-0 md:ml-10">Attention to detail</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-around mt-10 md:mt-20 items-start mx-0 md:mx-10">
                <h1 className="font-bold text-5xl text-[#BE6AB7]">contact</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <p className="font-medium text-lg text-white mt-5">valeamayola.contact@gmail.com</p>
                        <p className="font-medium text-lg text-white mt-5">linkedin.com/in/valentina-amayola</p>
                    </div>
                    <div className="flex flex-col ml-0 md:ml-96">
                        <p className="font-medium text-lg text-white mt-5">github.com/valeamayola</p>
                        <p className="font-medium text-lg text-white mt-5">valeamayola.contact@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}