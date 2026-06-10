"use client"
import { faqsArray } from "@/db/faqs";
import Image from "next/image";
import { useState } from "react";

export default function FaqsComponent(){
    const [index, setIndex] = useState<number[]>([]);

    // show question with answer
    function handleAccordion(id: number) {
        setIndex(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    }

    return(
        <div id="faqs" className="mt-40 pb-20">
            <h2 className="text-5xl font-semibold text-center">Frequently Asked Questions</h2>
            <div className="flex flex-col items-center mt-30">
                {
                    faqsArray.map(item=>{
                        return(
                            <div onClick={()=>handleAccordion(item.id)} key={item.id} className={`${index.includes(item.id)?"bg-spark-cream":"bg-white"} w-1/2 m-4 p-8 rounded-2xl cursor-pointer hover:bg-spark-grey-10`}>
                                <div className="flex justify-between">
                                    <h3 className="text-xl font-medium">{item.question}</h3>
                                    <Image width={18} height={18} src={"/images/arrow-up.png"} alt="arrow-ap-down" className={`duration-300 ${index.includes(item.id)?"rotate-180": "rotate-0"}`}/>
                                </div>
                                {index.includes(item.id) && <p className="mt-4 text-spark-grey-50">{item.answer}</p>}
                            </div>
                        )
                    })
                }
            </div>
            {/* scroll to top */}
            <div className="flex justify-center mt-10">
                <a href="#home" className="text-spark-grey-30">Back To Top</a>
            </div>
        </div>
    )
}