import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slidersImages = [
  "https://picsum.photos/600/350?v=1",
  "https://picsum.photos/600/350?v=2",
  "https://picsum.photos/600/350?v=3",
  "https://picsum.photos/600/350?v=4",
  "https://picsum.photos/600/350?v=5",
  "https://picsum.photos/600/350?v=6",
  "https://picsum.photos/600/350?v=7",
];

export default function Hero() {
  return (
    <div>
      {/* Testimonials Carousel */}
      <Carousel
        opts={{
          loop: false,
          duration: 60,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {slidersImages.map((img, idx) => (
            <CarouselItem key={idx} className="lg:basis-100">
              <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                <img
                  src={img}
                  alt="Testimonial reviewer"
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop device navigation */}
        <div className="hidden lg:block">
          <CarouselNext
            className="right-12 size-14 bg-normal-blue-500 text-white"
            icon={<ArrowRight size={20} />}
          />
          <CarouselPrevious
            className="left-12 size-14 bg-normal-blue-500 text-white"
            icon={<ArrowLeft size={20} />}
          />
        </div>
      </Carousel>
    </div>
  );
}
