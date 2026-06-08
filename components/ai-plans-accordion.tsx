"use client"
import { aiPlansArray } from "@/db/aiPlans"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AiPlansAccordion(){
    const [progress, setProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(aiPlansArray[0]?.id || 1);

    
    useEffect(() => {
        const intervalProgress = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 100; 
                }
                return prev + 2;
            });
        }, 200);

        return () => clearInterval(intervalProgress);
    }, [activeIndex]); 

    // for progress control
    useEffect(() => {
        if (progress >= 100) {
            // dellay 200 ms
            const timeout = setTimeout(() => {
                setActiveIndex((prevIndex) => {
                    const currentIndex = aiPlansArray.findIndex(plan => plan.id === prevIndex);
                    
                    if (currentIndex === aiPlansArray.length - 1) {
                        return aiPlansArray[0].id; 
                    }
                    return aiPlansArray[currentIndex + 1].id; 
                });
                setProgress(0); 
            }, 200); 

            return () => clearTimeout(timeout);
        }
    }, [progress]);

    const handleAccordionClick = (id: number) => {
        setActiveIndex(id);
        setProgress(0);
    };

    return(
        <div className="hidden lg:block">
            {
                aiPlansArray.map(plan => {
                    const isOpen = activeIndex === plan.id;
                    return(
                        <div 
                            onClick={() => handleAccordionClick(plan.id)} 
                            className="bg-white m-2 p-2 relative rounded-4xl cursor-pointer" 
                            key={plan.id}
                        >
                            <div className="flex flex-col align-middle pl-2">
                                {isOpen && <h4 className="text-spark-grey-50 text-xl">{plan.planType}</h4>}
                                <h3 className="font-bold pb-2 text-2xl">{plan.title}</h3>
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
                            </div>

                            {
                                isOpen && (
                                    <div className="bg-spark-grey-50 rounded ml-2 mr-2">
                                        <p className="h-2 bg-spark-pale-yellow transition-all duration-200 ease-linear" style={{
                                            width:`${progress}%`
                                        }}></p>
                                    </div>
                                )
                            }
                            
                            <button className="absolute w-8 h-8 bg-spark-pale-yellow rounded-full top-2 right-4">{isOpen?"X":"+"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}