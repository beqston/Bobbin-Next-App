import Image from "next/image";
import Link from "next/link";
import MobHeaderComponent from "./mob-header";

export default function HeaderComponent(){
    return(
        <>
            <header className="hidden md:flex p-4 w-full sticky top-0 justify-between">
                <div>
                    <Link className="flex items-center text-2xl font-bold text-amber-200" href={"/"}>
                        <div className="w-8 h-8 m-2 relative cursor-pointer">
                                <Image src="/images/bobbin.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <span>Bobbin</span>
                    </Link>
                </div>

                <div className="hidden md:w-3/5 h-12 group m-auto opacity-80 backdrop-blur-xs md:flex justify-center gap-4 ">
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#howWorks">How It Works</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#testimonials">Testimonials</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#pricing">Pricing</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#faqs">FAQs</a>
                </div>
            </header>
            <MobHeaderComponent />
        </>
    )
}