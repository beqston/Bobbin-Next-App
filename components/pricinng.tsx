import PricingCard from "./pricingCard";

export default function Pricing(){
    return(
        <div id="pricing" className="p-4">
            <h3 className="text-center  text-5xl">Explore our pricing</h3>
            <h5 className="text-center mt-2 text-xl text-spark-grey-30">Plans to suit every educator from solo tutors to schools</h5>

           <div className="grid p-4 grid-cols-1 md:grid-cols-2 xl:p-12 md  xl:grid-cols-4 gap-7 ">
                <PricingCard 
                    title="Basic" 
                    advise="Perfect for solo tutors" 
                    price="£9"
                    during="10 hours included"
                    additional="*Additional hours billed at £1.10 per hour"
                    checkedText1="Unlimited lesson plans and reports"
                    checkedText2="10 hours of lessons included"
                    checkedText3="Ideal for solo tutors just getting started"
                    hoverBgColor="bg-amber-200"
                    arrowRight={true}
                />

                <PricingCard 
                    title="Plus" 
                    advise="Perfect for growing companies" 
                    price="£39"
                    during="40 hours included"
                    additional="*Additional hours billed at £1.05 per hour"
                    checkedText1="Unlimited lesson plans and reports"
                    checkedText2="40 hours of lessons included"
                    checkedText3="Ideal for growing tutoring businesses"
                    hoverBgColor="bg-amber-200"
                    arrowRight={true}
                />
                <PricingCard 
                    title="Pro" 
                    advise="Perfect for larger companies" 
                    price="£249"
                    during="300 hours included"
                    additional="*Additional hours billed at £1.00 per hour"
                    checkedText1="Unlimited lesson plans and reports"
                    checkedText2="300 hours of lessons included"
                    checkedText3="Ideal for larger businesses"
                    hoverBgColor="bg-amber-200"
                    arrowRight={true}
                />
                <PricingCard 
                    title="Enterprise" 
                    advise="Perfect for enterprise companies" 
                    price="Custom"
                    during="Built to your needs"
                    buttonText="Book a call"
                    buttonBgColor="bg-black"
                    buttonTextColor="text-white"
                    additional=""
                    checkedText1="Tailored support from our in-house team"
                    checkedText2="Get the hours you need to tutor at scale"
                    checkedText3="Ideal for large enterprise companies"
                    hoverBgColor="bg-spark-grey-30"
                    arrowRight={false}
                />
           </div>
        </div>
    )
}