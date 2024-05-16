export default function Content() {
    return (
        <section className="bg-[#E6E6E6] px-8 md:px-20 py-10 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl text-[#BE6AB7] text-start">contenido</h1>
            <div className="flex flex-col md:flex-row items-center align-center justify-around mt-5 md:mt-10">
                <a className="relative">
                    <p className="absolute top-0 left-0 ml-5 mt-3 md:mt-5 font-bold text-lg md:text-xl">01 <span className="font-semibold text-base md:text-lg">| Website plants</span></p>
                    <img src="/mockup-plants.png" className="bg-[#D8D8D8] shadow-xl w-[27rem] h-[23rem] rounded-2xl pt-10"></img>
                </a>
                <a className="relative mt-5 md:mt-0">
                    <p className="absolute top-0 left-0 ml-5 mt-3 md:mt-5 font-bold text-lg md:text-xl">02 <span className="font-semibold text-base md:text-lg">| Website logistic</span></p>
                    <img src="/mockup-logistic.png" className="bg-[#D8D8D8] shadow-xl w-[27rem] h-[23rem] rounded-2xl pt-10"></img>
                </a>
                <a className="relative mt-5 md:mt-0">
                    <p className="absolute top-0 left-0 ml-5 mt-3 md:mt-5 font-bold text-lg md:text-xl">03 <span className="font-semibold text-base md:text-lg">| App Books Design</span></p>
                    <img src="/mockup-app-books.png" className="bg-[#D8D8D8] shadow-xl w-[27rem] h-[23rem] rounded-2xl px-10 pb-5"></img>
                </a>
            </div>
        </section>
    )
}