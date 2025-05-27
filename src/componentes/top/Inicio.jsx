import logo from "../../assets/logo.svg"
import bgcel from "../../assets/bg-header-mobile.png"
import bgpc from "../../assets/bg-header-desktop.png"

function Inicio() {
    return (
        <header className="flex flex-col justify-content items-center relative ">
            <img src={bgcel} alt="" srcset="" className="block / sm:hidden " />
            <img src={bgpc} alt="" srcset="" className=" lg:w-full lg:h-3/5 lg:object-cover hidden / sm:block "/>
            <div className="absolute top-48 left-1/2 -translate-x-1/2 -translate-y-1"><img src={logo} alt="" srcset="" /></div>
            <h1 className="text-gray-600 font-semibold text-2xl mt-5 w-60 text-center / lg:mt-1.5 / sm:w-screen ">A history of everything you copy</h1>
            <p className="text-gray-400 font-normal w-72 mt-5 text-center / sm:w-xl sm:mb-[35px] ">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices</p>
            <div className="flex flex-col / sm:flex-row sm:gap-8 sm:mt-5 sm:mb-[35px]">
                <button className="bg-[hsl(171,66%,44%)] hover:bg-emerald-300 text-white cursor-pointer shadow-md shadow-[hsl(171,66%,36%)] mt-4 mb-4 rounded-3xl text-lg  w-[300px] h-10 font-semibold / sm:mb-0 sm:mt-0">Download for iOS</button>
                <button className="bg-[hsl(233,100%,69%)] hover:bg-indigo-500 text-white cursor-pointer shadow-md shadow-[hsl(233,100%,60%)] rounded-3xl text-lg  w-[300px] h-10 font-semibold">Downloas for Mac</button>
            </div>

        </header>
    )
}

export default Inicio;