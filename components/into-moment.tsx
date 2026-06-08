import { intoMomentArray } from "@/db/into-moment"
import Image from "next/image"

export default function IntoMoment(){
    return(
        <div className="pt-30 pb-20">
            <h3 className="text-center text-5xl">Fits the way you already work</h3>
            <h4 className="text-center text-xl opacity-80 pt-4">Bobbin follows the rhythm of your teaching</h4>
            
            <div className="grid grid-cols-1 relative p-12 md:grid-cols-4 gap-4"> {/* Added gap for spacing */}
                {
                    intoMomentArray.map(m => {
                        return(
                            <div key={m.id} className="flex flex-col gap-2">
                                
                                {/* 1. The container must be relative and have a height or aspect ratio */}
                                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden">
                                    <Image 
                                        src={`/images/into-moment/image${m.id}.webp`} 
                                        alt={m.title || "Moment Image"} 
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw" 
                                        className="object-cover" 
                                    />
                                </div>
                                
                                <h4 className="font-semibold text-lg mt-2">{m.title}</h4>
                                <p className="text-sm opacity-90">{m.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
