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
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa27a66d51bf3038ee_vanta-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
  "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa27a66d51bf3038ee_vanta-bg.webp",
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
              <div className="flex max-h-[calc(100vh-100px)] items-center justify-center">
                <img src={img} alt="Testimonial reviewer" />
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
