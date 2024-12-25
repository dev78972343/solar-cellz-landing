import About from "@/components/Home/About/About";
import About2 from "@/components/Home/About2/About2";
import Brands from "@/components/Home/Brands/Brands";
import Contact from "@/components/Home/Contact/Contact";
import Demo from "@/components/Home/Demo/Demo";
import Equipments from "@/components/Home/Equipments/Equipments";
import Experts from "@/components/Home/Experts/Experts";
import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero/Hero";
import Inovate from "@/components/Home/Inovate/Inovate";
import Manufacturers from "@/components/Home/Manufacturers/Manufacturers";
import Projects from "@/components/Home/Projects/Projects";
import RecentWork from "@/components/Home/RecentWork/RecentWork";
import Teams from "@/components/Home/Teams/Teams";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TopSeller from "@/components/Home/TopSellers/TopSeller";
import TryIt from "@/components/Home/TryIt/TryIt";
import DynamicHelmet from "@/components/shared/DynamicHelmet/DynamicHelmet";
import { Separator } from "@/components/ui/separator";

import "../../css/embla.css";
import Stats from "@/components/Home/Stats/Stats";
import About3 from "@/components/Home/About2/About3";

export default function Home() {
  return (
    <>
      {/* Page Title */}
      <DynamicHelmet
        title="Home || Solar Cellz USA"
        desc="This is the home page of Solar Cellz USA"
      />

      <div className="mt-6">
        {/* <Hero /> */}

        <Separator className="my-20 w-full" />

        <About className="my-20" />

        <About3 className="my-20" />

        <Separator className="my-20 w-full" />

        <Inovate className="my-20" />

        <TryIt className="my-20" />

        <Features className="my-20" />

        <Projects />

        <Stats className="my-20" />

        <Equipments className="my-20" />

        <RecentWork className="my-20" />

        <Brands className="my-20" />

        <Testimonials className="my-20" />

        <Separator className="w-full lg:my-20" />

        <Manufacturers />

        <Separator className="w-full lg:my-20" />

        <TopSeller className="my-10 lg:my-32" />

        {/* <Experts className="my-20" /> */}

        <Teams className="my-20 lg:my-32" />

        <Demo />

        <Separator className="w-full lg:my-20" />

        <Contact className="my-20" />
      </div>
    </>
  );
}
