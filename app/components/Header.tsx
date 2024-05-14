import NavBar from "./NavBar";

export default function Header() {
    return (
        <>
            <header className="h-[87vh] bg-[#232323] flex flex-col items-center justify-center align-center m-auto">
                <p className="text-xl font-medium text-white my-2">2024</p>
                <h1 className="text-6xl md:text-7xl font-bold text-white"><span className="text-[#BE6AB7]">PORT</span>FOLIO</h1>
                <div className="flex flex-col md:flex-row space-between mt-5 md:mt-0">
                    <p className="text-base font-medium text-white border-2 border-[#BE6AB7] rounded-full py-1 px-4 my-2 md:my-5 mx-2 text-center">Frontend Developer</p>
                    <p className="text-base font-medium text-white border-2 border-[#BE6AB7] rounded-full py-1 px-4 my-2 md:my-5 mx-2 text-center">Designer UX | UI</p>
                </div>
            </header>
        </>

    )
}