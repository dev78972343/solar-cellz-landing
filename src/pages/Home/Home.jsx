import Brands from "@/components/Home/Brands/Brands";
import Contact from "@/components/Home/Contact/Contact";
import Demo from "@/components/Home/Demo/Demo";
import Equipments from "@/components/Home/Equipments/Equipments";
import Features from "@/components/Home/Features/Features";
import Manufacturers from "@/components/Home/Manufacturers/Manufacturers";
import Teams from "@/components/Home/Teams/Teams";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TopSeller from "@/components/Home/TopSellers/TopSeller";
import TryIt from "@/components/Home/TryIt/TryIt";
import DynamicHelmet from "@/components/shared/DynamicHelmet/DynamicHelmet";

import "../../css/embla.css";
import Stats from "@/components/Home/Stats/Stats";
import Hero from "@/components/Home/Hero/Hero";
import Slider from "@/components/Home/Slider/Slider";
import Highlights from "@/components/Home/Highlights/Highlights";
import About from "@/components/Home/About/About";
import Projects from "@/components/Home/Projects/Projects";

export default function Home() {
  return (
    <>
      <DynamicHelmet
        title="Home || Solar Cellz USA"
        desc="This is the home page of Solar Cellz USA"
      />

      <div className="overflow-hidden">
        <Hero />

        <Brands className="mb-10 mb:my-28"/>

        <Features className="my-10 md:my-28" />

        <About className="my-10 md:my-28" />

        <TryIt className="my-10 md:my-28" />

        <Projects className="my-10 md:my-28" />

        <Stats className="my-10 md:my-28" />

        <Equipments className="my-10 md:my-28" />

        <Testimonials className="my-10 md:my-28" />

        <Highlights className="my-10 md:my-28" />

        <Manufacturers className="my-10 md:my-28" />

        <Slider className="my-10 md:my-28" />
       
        <TopSeller className="my-10 md:my-28" />

        <Teams className="my-20 lg:my-20" />
        
        <Demo className="my-10 md:my-28" />

        <Contact className="my-10 md:my-28" />
      </div>
    </>
  );
}
