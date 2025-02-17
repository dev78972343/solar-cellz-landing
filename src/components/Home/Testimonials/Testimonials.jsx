import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Testimonials({ className }) {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });
  return (
    <ResponsiveContainer classes={cn("", className)}>
      <SectionHeader
        heading={testimonials.heading}
        subHeading={testimonials.subHeading}
        desc={testimonials.desc}
        className="mx-auto w-full px-5 text-center md:w-10/12 md:px-0 lg:w-3/4 2xl:w-2/3"
      />

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
            {testimonials?.cards?.map((testimonial) => (
              <CarouselItem key={testimonial?.id} className="lg:basis-1/2">
                <TestimonialCard data={testimonial} />
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
