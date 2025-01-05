import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import topSellerBanner from "@/assets/images/top-seller/top-seller-banner.png";
import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TopSellerCard from "./TopSellerCard";
import item1Img from "@/assets/images/top-items/solar panel.png";
import item2Img from "@/assets/images/top-items/solar inverter.png";
import item3Img from "@/assets/images/top-items/solar generator.png";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

// Static data for top selling items
const topSellingItems = [
  {
    key: 1,
    name: "Monocrystalline Solar Panel",
    specs: "400W",
    image: item1Img,
    rating: 5.0,
    reviews: 14,
    price: 299.99,
  },
  {
    key: 2,
    name: "Hybrid Solar Inverter",
    specs: "5kW",
    image: item2Img,
    rating: 4.6,
    reviews: 7,
    price: 799.99,
  },
  {
    key: 3,
    name: "Portable Solar Generator",
    specs: "1500Wh",
    image: item3Img,
    rating: 4.8,
    reviews: 10,
    price: 899.99,
  },
  {
    key: 4,
    name: "Monocrystalline Solar Panel",
    specs: "400W",
    image: item1Img,
    rating: 5.0,
    reviews: 14,
    price: 299.99,
  },
  {
    key: 5,
    name: "Hybrid Solar Inverter",
    specs: "5kW",
    image: item2Img,
    rating: 4.6,
    reviews: 7,
    price: 799.99,
  },
  {
    key: 6,
    name: "Portable Solar Generator",
    specs: "1500Wh",
    image: item3Img,
    rating: 4.8,
    reviews: 10,
    price: 899.99,
  },
];

export default function TopSeller({ className }) {
  return (
    <ResponsiveContainer
      classes={cn(
        "flex-stretch-start lg:flex-row flex-col gap-x-5 gap-y-8",
        className,
      )}
    >
      {/* Banner */}
      <div className="group relative z-10 h-[200px] overflow-hidden rounded-2xl bg-normal-blue-500 p-4 transition-all duration-300 ease-in-out hover:scale-[0.98] lg:h-auto lg:flex-1">
        {/* Arrow */}
        <div
          className="flex-center aspect-square size-9 rounded-full p-1"
          style={{
            backgroundImage:
              "linear-gradient(138deg, rgba(255, 255, 255, 0.10) -46.37%, #FFF 48.94%, rgba(255, 255, 255, 0.40) 144.25%)",
          }}
        >
          <AnimatedArrow
            arrowClass="size-6 -rotate-45"
            stroke="var(--normal-blue-500)"
          />
        </div>

        <h3 className="mt-3 text-4xl font-thin text-white">Top Sellers</h3>

        <img
          src={topSellerBanner}
          alt="Top seller section banner"
          className="absolute -bottom-5 right-0 -z-10"
        />
      </div>

      {/* Top selling items carousel */}
      <div className="relative lg:w-3/4">
        <Carousel
          opts={{
            loop: false,
            duration: 60,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="p-1.5">
            {topSellingItems?.map((product, idx) => (
              <CarouselItem key={idx} className="h-full lg:basis-1/3">
                <TopSellerCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop device navigation */}
          <div className="absolute -top-10 right-10 hidden lg:block">
            <CarouselNext
              className="size-10 bg-primary-button-gradient text-white hover:text-white"
              icon={<ArrowRight size={18} />}
            />
            <CarouselPrevious
              className="size-10 bg-primary-button-gradient text-white hover:text-white"
              icon={<ArrowLeft size={18} />}
            />
          </div>

          {/* Mobile device navigation */}
          <div className="absolute -bottom-10 left-1/2 block lg:hidden">
            <CarouselNext
              className="size-10 bg-normal-blue-500 text-white"
              icon={<ArrowRight size={18} />}
            />
            <CarouselPrevious
              className="size-10 bg-normal-blue-500 text-white"
              icon={<ArrowLeft size={18} />}
            />
          </div>
        </Carousel>
      </div>
    </ResponsiveContainer>
  );
}
