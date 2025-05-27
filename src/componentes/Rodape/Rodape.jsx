import logo from "../../assets/logo.svg"
import face from "../../assets/icon-facebook.svg"
import x from "../../assets/icon-twitter.svg"
import insta from "../../assets/icon-instagram.svg"

function Rodape() {
    return (
        <footer className="bg-gray-100 flex flex-col justify-center  items-center / sm:flex-row sm:gap-80">

            <div className="flex flex-col justify-center items-center / sm:flex-row sm:gap-40">
                <img src={logo} alt="" srcset="" className="w-28 mt-20 mb-20" />

                <div className="flex flex-col items-center / ">

                    <a href="#" className="mb-5 hover:text-emerald-600">FAQs</a>
                    <a href="#" className="mb-5 hover:text-emerald-600 ">Contact Us</a>
                </div>
                <div className="flex flex-col items-center /">
                    <a href="#" className="mb-5 hover:text-emerald-600">Privacy Policy</a>
                    <a href="#" className="mb-5 hover:text-emerald-600">Press kit</a>
                </div>

                <div className="flex flex-col items-center /  ">
                    <a href="#" className="mb-10 hover:text-emerald-600">Install Guide</a>

                </div>




            </div>


            <div className="flex gap-14 mb-10 mt-10">
                <a href="" ><img src={face} alt="" srcset="" /></a>
                <a href=""><img src={x} alt="" srcset="" /></a>
                <a href=""><img src={insta} alt="" srcset="" /></a>
            </div>

        </footer>
    )
}

export default Rodape;