import HeaderComponent from "@/components/header";
import HerroComponent from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import IntoMoment from "@/components/into-moment";
import Testimonials from "@/components/testimonials";



export default function Home() {
  return (
    <div className="bg-spark-cream">
      <div
        className="min-h-fit">
        <HeaderComponent />
        <HerroComponent />
        <HowItWorks />
      </div>
      
      <IntoMoment />
      <Testimonials />
    </div>

  );
}
