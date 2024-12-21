import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import expert1Img from "@/assets/images/experts/expert-1.png";
import expert2Img from "@/assets/images/experts/expert-2.png";
import expert3Img from "@/assets/images/experts/expert-3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import ExpertCard from "./ExpertCard";
import { cn } from "@/lib/utils";

// Static data
const experts = [
  {
    id: 1,
    name: "Angela Smith",
    role: "Engineer",
    image: expert1Img,
  },
  {
    id: 2,
    name: "Davis Curtis",
    role: "Engineer",
    image: expert2Img,
  },
  {
    id: 3,
    name: "Reginald Caldwell",
    role: "Engineer",
    image: expert3Img,
  },
];

export default function Experts({ className }) {
  return (
    <ResponsiveContainer classes={cn("", className)}>
      <SectionHeader
        heading={"Our Expert Members"}
        desc={"Empowering Sustainable Solutions fo a Brighter Future"}
      />

      {/* Experts carousel */}
      <div className="relative mt-10">
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
          <CarouselContent className="p-2">
            {experts?.map((expert, idx) => (
              <CarouselItem
                key={expert?.id}
                className="md:basis-1/2 lg:basis-1/3 2xl:h-[400px] 2xl:basis-1/4"
              >
                <ExpertCard data={expert} idx={idx} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop device navigation */}
          <div className="absolute -top-10 right-10 hidden lg:block">
            <CarouselNext
              className="size-10 bg-normal-blue-500 text-white"
              icon={<ArrowRight size={18} />}
            />
            <CarouselPrevious
              className="size-10 bg-normal-blue-500 text-white"
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
