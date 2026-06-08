"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AiPlansSlider(){
    const [sliderNumber, setSliderNumber] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSliderNumber(prev => (prev === 4 ? 1 : prev + 1));
        }, 4000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []); 

    
    return(
        <div className="hidden lg:flex grid-rows-subgrid flex-col items-center">

            <div className="mt-2 w-full h-full relative">
                <Image
                className="rounded-2xl object-cover"
                src={`/images/slider${sliderNumber}.webp`}
                alt="Slider-image"
                fill
                />
            </div>
            
        </div>
    )
}