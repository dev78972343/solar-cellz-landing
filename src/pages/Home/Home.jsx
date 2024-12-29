import About from "@/components/Home/About/About";
import Brands from "@/components/Home/Brands/Brands";
import Contact from "@/components/Home/Contact/Contact";
import Demo from "@/components/Home/Demo/Demo";
import Equipments from "@/components/Home/Equipments/Equipments";
import Features from "@/components/Home/Features/Features";
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
import Hero from "@/components/Home/Hero/Hero";
import Header from "@/components/Home/Header/Header";

export default function Home() {
  return (
    <>
      <DynamicHelmet
        title="Home || Solar Cellz USA"
        desc="This is the home page of Solar Cellz USA"
      />

      <Header />

      <div className="mt-6">
        {/* <Hero /> */}

        {/* <Separator className="my-20 w-full" /> */}

        <Brands className="my-20" />

        <Features className="my-20" />

        <About3 className="my-20" />

        <TryIt className="my-20" />

        <Projects />

        <Stats className="my-20" />

        <Equipments className="my-20" />

        <Manufacturers />

        <Testimonials className="my-20" />

        <TopSeller className="my-10 lg:my-32" />

        <Inovate className="my-20" />

        <Teams className="my-20 lg:my-32" />

        <Demo />

        <Contact className="my-20" />
      </div>
    </>
  );
}
