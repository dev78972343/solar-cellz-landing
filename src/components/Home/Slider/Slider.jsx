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

export default function Slider({ className }) {
  return (
    <ResponsiveContainer classes={cn("", className)}>
      <SectionHeader
        heading="Customers Demanding Change"
        subHeading="Testimonials"
        desc="Now more than ever, customers show their appreciation to businesses that divest themselves of disease-causing dirty energy & energy management. SolarCellz USA prides themselves as one of the industry leaders in the county and look forward to bringing their experience and expertise to you."
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
            {slidersImages.map((img, idx) => (
              <CarouselItem key={idx} className="lg:basis-100">
                <div className="flex items-center justify-center">
                  <img src={img} alt="Testimonial reviewer" className="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-16">
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </ResponsiveContainer>
  );
}
