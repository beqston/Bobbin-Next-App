"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobHeaderComponent from "./mob-header";

export default function HeaderComponent() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlHeader);

        return () => {
            window.removeEventListener("scroll", controlHeader);
        };
    }, [lastScrollY]);

    return (
        <>
            <header 
                className={`hidden md:flex p-4 w-full fixed top-0 justify-between z-50 bg-white shadow-sm transition-transform duration-300 ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div>
                    <a className="flex items-center text-2xl font-bold text-amber-200" href="#home">
                        <div className="w-8 h-8 m-2 relative cursor-pointer">
                            <Image src="/images/bobbin.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <span>Bobbin</span>
                    </a>
                </div>

                <div className="hidden md:w-3/5 h-12 group m-auto opacity-80 backdrop-blur-xs md:flex justify-center gap-4 ">
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#howWorks">How It Works</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#testimonials">Testimonials</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#pricing">Pricing</a>
                    <a className="text-xl text-black font-bold transition-colors duration-300 hover:bg-gray-700 group-hover:text-gray-500 hover:text-white w-fit p-2 cursor-pointer" href="#faqs">FAQs</a>
                </div>
            </header>
            
            {/* mobile header */}
            <MobHeaderComponent />
        </>
    );
}