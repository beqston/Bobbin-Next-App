import { CarouselSize } from "./carousel";

export default function Testimonials(){
    return(
        <div id="testimonials" className="pb-12">
            <h3 className="text-5xl font-medium text-center">Don't just take our word for it</h3>
            <h5 className="text-xl text-spark-grey-30 mt-2 text-center">See why tutors are choosing Bobbin</h5>
            <div className="w-full p-8">
                <CarouselSize />
            </div>
        </div>
    )
}