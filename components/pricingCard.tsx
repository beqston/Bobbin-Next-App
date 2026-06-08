import Image from "next/image";

interface CardType{
    title:string,
    advise:string,
    price:string,
    during:string,
    buttonText?:string,
    buttonBgColor?:string,
    buttonTextColor?:string,
    additional?:string,
    checkedText1:string,
    checkedText2:string,
    checkedText3:string,
    hoverBgColor:string,
    arrowRight:boolean
}

export default function PricingCard({title, advise, price, during, buttonText="Get Started", buttonBgColor="bg-spark-pale-yellow", buttonTextColor, additional, checkedText1, checkedText2, checkedText3, hoverBgColor, arrowRight }:CardType){
    return(
        <div className="bg-white p-4 rounded-xl">
            <h2 className="text-3xl">{title}</h2>
            <h4 className="text-spark-grey-30">{advise}</h4>
            <h4 className="mt-8 font-semibold text-3xl">{price}<span className="text-xl font-light">/mo</span></h4>
            <p className="text-spark-grey-30">{during}</p>

            <div className="flex flex-col gap-2 mt-8 h-38">
                <div className="flex gap-2 items-center">
                    <div>
                        <Image width={18} height={18} src={"/images/checked.png"} alt="checked" />
                    </div>
                    <p>{checkedText1}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        <Image width={18} height={18} src={"/images/checked.png"} alt="checked" />
                    </div>
                    <p>{checkedText2}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        <Image width={18} height={18} src={"/images/checked.png"} alt="checked" />
                    </div>
                    <p>{checkedText3}</p>
                </div>
            </div>

            <p className="text-xs h-4 text-spark-grey-30 mt-8">{additional}</p>
            
            <button className={`${buttonBgColor} ${buttonTextColor} w-full rounded-2xl p-2 cursor-pointer mt-4 hover:${hoverBgColor} flex justify-center gap-2 transition duration-300 group`}>
                <span>{buttonText}</span>
                {
                    arrowRight && <Image className="group-hover:translate-x-2 transition duration-400" width={18} height={18} src={"/images/right-arrow.png"}alt="right-arrow" />
                }
            </button>
        </div>
    )
}