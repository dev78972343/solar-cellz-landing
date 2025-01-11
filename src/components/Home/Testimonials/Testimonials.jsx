import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import testimonialsBanner from "../../../assets/images/testimonials/banner.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import reviewImg1 from "../../../assets/images/testimonials/review-img-1.png";
import reviewImg2 from "../../../assets/images/testimonials/review-img-2.png";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";

// Static data
const testimonials = [
  {
    key: 1,
    image: reviewImg1,
    comment:
      "I had Solar Cellz Energy install solar panels on my home, and the process was smooth from start to finish. Their team was professional and answered all my questions. Highly recommend them.",
    rating: 5,
    reviewerName: "John Doe",
    reviewerPosition: "Manager @ XYZ Company",
  },
  {
    key: 2,
    image: reviewImg2,
    comment:
      "Switching to Solar Cellz Energy was a game-changer for my family. Not only are we saving money, but we're also contributing to a cleaner environment. Their customer support is top-notch!",
    rating: 5,
    reviewerName: "Myrtle Kempton",
    reviewerPosition: "Manager @ ABC Company",
  },
  {
    key: 3,
    image: reviewImg2,
    comment:
      "Switching to Solar Cellz Energy was a game-changer for my family. Not only are we saving money, but we're also contributing to a cleaner environment. Their customer support is top-notch!",
    rating: 5,
    reviewerName: "Myrtle Kempton",
    reviewerPosition: "Manager @ ABC Company",
  },
];

export default function Testimonials({ className }) {
  return (
    <ResponsiveContainer classes={cn("", className)}>
      <SectionHeader
        heading="Customers Demanding Change"
        subHeading="Testimonials"
        desc="Now more than ever, customers show their appreciation to businesses that divest themselves of disease-causing dirty energy & energy management. SolarCellz USA prides themselves as one of the industry leaders in the county and look forward to bringing their experience and expertise to you."
        className="mx-auto w-full px-5 text-center md:w-10/12 md:px-0 lg:w-3/4 2xl:w-2/3"
      />

      {/* Section Banner */}
      {/* <img
        src={testimonialsBanner}
        alt="Testimonials section banner"
        className="mx-auto my-10 block md:h-[500px] h-[300px] 2xl:h-[700px] w-auto rounded-xl"
      /> */}

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
            {testimonials?.map((testimonial, idx) => (
              <CarouselItem key={idx} className="lg:basis-1/2">
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
