import FaqsComponent from "@/components/faqs";
import HeaderComponent from "@/components/header";
import HerroComponent from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import IntoMoment from "@/components/into-moment";
import Pricing from "@/components/pricinng";
import Testimonials from "@/components/testimonials";



export default function Home() {
  return (
    <div id="home">
      <div
        className="min-h-fit bg-spark-cream">
        <HeaderComponent />
        <HerroComponent />
        <HowItWorks />
        <IntoMoment />
        <Testimonials />
      </div>
      
      <div className="bg-linear-to-b from-spark-cream to bg-spark-pale-yellow">
        <Pricing />
        <FaqsComponent />
      </div>
    </div>

  );
}
