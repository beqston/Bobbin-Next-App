import AiPlansAccordion from "./ai-plans-accordion"
import AiPlansSlider from "./ai-plans-slider"
import MobileAiPlansAccordion from "./mob-ai-plans-accordion"
export default function HowItWorks(){

    return(
        <div id="howWorks" className="bg-spark-cream pt-8 rounded-2xl">
            <h3 className="text-center text-2xl p-2">AI tools designed for tutors</h3>
            <p className="text-center text-xl text-clip font-normal text-spark-grey-50 ">Bobbin weaves your entire workflow into one continuous thread from planning to progress</p>

            {/*ai generate plans  */}
            <div className="grid grid-cols-1 p-4 lg:p-12 lg:grid-cols-[3fr_4fr] gap-4">
                <AiPlansAccordion />
                <AiPlansSlider />
                <MobileAiPlansAccordion />
            </div>
        </div>
    )
}