"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobHeaderComponent(){
    const [open, setOpen] = useState(false);
    
    function handleBurgerMenu(){
        setOpen(prev=>!prev)
    }

    return(
        <header className="md:hidden w-full relative top-0 flex justify-between">
            <div>
                <Link className="flex items-center text-2xl font-bold text-amber-200" href={"/"}>
                    <div className="w-8 h-8 m-2 relative cursor-pointer">
                            <Image src="/images/bobbin.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span>Bobbin</span>
                </Link>
            </div>

            <div onClick={handleBurgerMenu} className="md:hidden w-8 h-8 relative"><Image src={"/images/burger-menu.png"} fill alt="burger-menu" className="object-contain mt-2" /></div>

            {open && (
                <div className="flex w-full flex-col bg-spark-cream top-0 z-1000 absolute md:hidden h-200 group gap-4 ">
                    <div>
                        <Link className="flex items-center text-2xl font-bold text-amber-200" href={"/"}>
                            <div className="w-8 h-8 m-2 relative cursor-pointer">
                                    <Image src="/images/bobbin.png" alt="Logo" fill className="object-contain" />
                            </div>
                            <span>Bobbin</span>
                        </Link>
                    </div>

                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#howWorks">How It Works</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#testimonials">Testimonials</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#blog">Blog</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#pricing">Pricing</a>
                </div>
            )}
            {open && <button onClick={handleBurgerMenu} className="text-2xl absolute top-4 right-4 z-2000">X</button>}
        </header>
    )
}