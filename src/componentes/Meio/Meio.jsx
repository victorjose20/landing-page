import pc from "../../assets/image-computer.png"
import devices from "../../assets/image-devices.png"
import blacklist from "../../assets/icon-blacklist.svg"
import text from "../../assets/icon-text.svg"
import preview from "../../assets/icon-preview.svg"
import google from "../../assets/logo-google.png"
import ibm from "../../assets/logo-ibm.png"
import microsoft from "../../assets/logo-microsoft.png"
import hewlett from "../../assets/logo-hp.png"
import vector from "../../assets/logo-vector-graphics.png"

function Meio() {
    return (
        <main className="   flex flex-col justify-content items-center /">

            <h1 className="text-gray-600 font-semibold text-2xl mt-5 w-60 text-center / sm:w-screen">Keep track of your snippets</h1>
            <p className="text-gray-400 font-normal w-72 mt-5 mb-20 text-center / sm:w-[600px]">Clipboard instatly stores any item you copy in the cloud,
                meaning you can access your snippets immediately on all your devices.
                Our mac and iOS apps will help you organize everything</p>




            <div className="flex flex-col / sm:flex-row ">
                <img src={pc} alt="" srcset="" className="w-96 / sm:relative sm:w-[850px] sm:right-[400px]" />

                <div className="flex flex-col justify-center items-center   ">
                    <h1 className="text-gray-600 font-semibold text-2xl mt-[125px] w-[325px] text-center sm:text-left">Quick Search</h1>
                    <p className="text-gray-400 font-normal w-[325px] mt-5 mb-20 text-center sm:text-left">Easily search your snippets by content category, web address, application, and more.</p>

                    <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-[325px] text-center sm:text-left">iCloud Sync</h1>
                    <p className="text-gray-400 font-normal w-[325px] mt-5 mb-20 text-center sm:text-left">Instantly saves and syncs snippets across all your devices</p>

                    <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-[325px] text-center sm:text-left">Complete History</h1>
                    <p className="text-gray-400 font-normal w-[325px] mt-5 mb-20 text-center sm:text-left">Retrieve any snippets from the first moment you started using the app.</p>
                </div>
            </div>




            <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-60 text-center / sm:mt-[75px] sm:w-[350px]">Access Clipboard Anywhere</h1>
            <p className="text-gray-400 font-normal w-72 mt-5 mb-20 text-center / sm:w-[600px] ">Whether you´re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>


            <img src={devices} alt="" srcset="" className="w-96 / sm:w-[775px]" />



            <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-60 text-center / sm:w-[350px]">Supercharge your workflow</h1>
            <p className="text-gray-400 font-normal w-72 mt-5 mb-20 text-center / sm:w-[350px]">We´ve got the tools to boost your productivity.</p>

            <div className="sm:flex sm:flex-row sm:gap-14 items-center justify-center">

                <div className="flex flex-col items-center ">
                    <img src={blacklist} alt="" srcset="" className="block sm:w-[80px]" />
                    <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-[350px] text-center">Create blacklists</h1>
                    <p className="text-gray-400 font-normal w-[320px] mt-5 mb-20 text-center">Ensure sensitive information never makes its way your clipboard by excluding certain sources.</p>

                </div>

                <div className="flex flex-col items-center">
                    <img src={text} alt="" srcset="" className="sm:w-[80px] block" />
                    <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-[350px] text-center">Plain text snippets</h1>
                    <p className="text-gray-400 font-normal w-[350px] mt-5 mb-20 text-center">Remove unwanted formatting from copied text for a consistent look.</p>

                </div>

                <div className="flex flex-col items-center">
                    <img src={preview} alt="" srcset="" className="sm:w-[80px] sm:" />
                    <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-[350px] text-center">Sneak preview</h1>
                    <p className="text-gray-400 font-normal w-[350px] mt-5 mb-20 text-center">Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>



            </div>




            <div className="sm:flex sm:gap-[75px] sm:justify-center sm:items-center">
                <img src={google} alt="" srcset="" className="mt-8 mb-20" />
                <img src={ibm} alt="" srcset="" className="mt-8 mb-20" />
                <img src={microsoft} alt="" srcset="" className="mt-8 mb-20" />
                <img src={hewlett} alt="" srcset="" className="mt-8 mb-20" />
                <img src={vector} alt="" srcset="" className="mt-8 mb-40 / sm:mb-20" />
            </div>




            <h1 className="text-gray-600 font-semibold text-2xl mt-2 w-60 text-center / sm:w-[300px]">Access Clipboard Anywhere</h1>
            <p className="text-gray-400 font-normal w-72 mt-5 mb-20 text-center / sm:w-[595px]">Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you´re ready to start adding to your clipboard</p>


            <div className="flex flex-col / sm:flex-row sm:gap-8 sm:mt-5 sm:mb-[35px]">
                <button className="bg-[hsl(171,66%,44%)] hover:bg-emerald-300 text-white cursor-pointer shadow-md shadow-[hsl(171,66%,36%)] mt-4 mb-4 rounded-3xl text-lg  w-[300px] h-10 font-semibold / sm:mb-0 sm:mt-0">Download for iOS</button>
                <button className="bg-[hsl(233,100%,69%)] hover:bg-indigo-500 text-white cursor-pointer shadow-md shadow-[hsl(233,100%,60%)] rounded-3xl text-lg  w-[300px] h-10 font-semibold">Downloas for Mac</button>
            </div>




        </main>
    )
}

export default Meio;