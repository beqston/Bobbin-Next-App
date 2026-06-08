"use client"
import { aiPlansArray } from "@/db/aiPlans";
import Image from "next/image";
import { useState } from "react";

export default function MobileAiPlansAccordion(){
        const [activeIndex, setActiveIndex] = useState(-1);
        
    
        const handleAccordionClick = (id: number) => {
            setActiveIndex(prev=>prev==id?-1:id);
        };
        
    return(
        <div className="block w-full p-2 lg:hidden">
            <div>
                {
                    aiPlansArray.map(plan => {
                        const isOpen = activeIndex === plan.id;
                        return(
                            <div 
                                onClick={() => handleAccordionClick(plan.id)} 
                                className="bg-white p-2 m-2 relative rounded-4xl cursor-pointer" 
                                key={plan.id}
                            >
                                <div className="mt-2 w-full h-120 relative">
                                    <Image
                                    className="rounded-2xl object-cover"
                                    src={`/images/slider${plan.id}.webp`}
                                    alt="Slider-image"
                                    fill
                                    />
                                </div>
                                <div className="flex flex-col align-middle pl-4 mt-8 relative">
                                    {isOpen && <h4 className="text-spark-grey-50">{plan.planType}</h4>}
                                    <h3 className="font-bold pb-2 text-xl">{plan.title}</h3>
                                    {isOpen && <p className="text-spark-grey-50 pt-2">{plan.headDescription}</p>}
                                    {
                                        isOpen && (
                                            <div>
                                                <p className="flex gap-2 m-2"><Image src="/images/circle.png" width={16} height={16} alt="circle"/> <span>{plan.description.text1}</span></p>
                                                <p className="flex gap-2 m-2"><Image src="/images/circle.png" width={16} height={16} alt="circle"/> <span>{plan.description.text2}</span></p>
                                                <p className="flex gap-2 m-2"><Image src="/images/circle.png" width={16} height={16} alt="circle"/> <span>{plan.description.text3}</span></p>
                                            </div>
                                        )
                                    }
                                    <button className="absolute w-8 h-8 bg-spark-pale-yellow rounded-full -top-2 right-1">{isOpen?"X":"+"}</button>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}