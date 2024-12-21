import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImg1 from "@/assets/images/hero/hero1.jpg";
import heroImg2 from "@/assets/images/hero/hero2.jpg";
import heroImg3 from "@/assets/images/hero/hero3.jpg";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function HeroCarousel() {
  return (
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
      className="relative"
    >
      <CarouselContent className="relative -z-10 p-2">
        {[heroImg1, heroImg2, heroImg3]?.map((heroImg) => (
          <CarouselItem key={heroImg} className="relative -z-10">
            <img
              src={heroImg}
              alt="Hero section image"
              className="relative -z-10 mx-auto block h-auto w-auto rounded-xl object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Desktop device navigation */}
      <div className="hidden lg:block">
        <CarouselNext
          className="size-14 bg-normal-blue-500 text-white"
          icon={<ArrowRight size={20} />}
        />
        <CarouselPrevious
          className="size-14 bg-normal-blue-500 text-white"
          icon={<ArrowLeft size={20} />}
        />
      </div>
    </Carousel>
  );
}
