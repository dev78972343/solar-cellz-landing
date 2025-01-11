import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import imageOne from "@/assets/images/slider/D1.png";
import imageTwo from "@/assets/images/slider/D2.png";
import imageThree from "@/assets/images/slider/D3.png";
import imageFour from "@/assets/images/slider/D4.png";
import imageFive from "@/assets/images/slider/D5.png";
import imageSix from "@/assets/images/slider/D6.png";

const slidersImages = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
];

export default function Slider({ className }) {
  return (
    <ResponsiveContainer classes={cn("", className)}>
      {/* Testimonials Carousel */}
      <div className="mt-20">
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
                <div className="flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt="Testimonial reviewer"
                    className="w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 md:mt-16">
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </ResponsiveContainer>
  );
}
