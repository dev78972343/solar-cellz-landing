import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const datas = [
  {
    id: 1,
    image: "https://picsum.photos/1920/1080?v=1",
    title: "Fronius Solar.web",
    description: "Better Understanding of Solar Power",
    buttons: [
      {
        name: "View Demo",
        link: "#",
      },
      {
        name: "Get Started Now",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    image: "https://picsum.photos/1920/1080?v=2",
    title: "Eco-friendly Energy",
    description: "Learn how to make the most of renewable energy sources.",
    buttons: [
      {
        name: "Learn More",
        link: "#",
      },
      {
        name: "Subscribe Now",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    image: "https://picsum.photos/1920/1080?v=3",
    title: "Green Technology Solutions",
    description: "Innovative technologies for a sustainable future.",
    buttons: [
      {
        name: "Explore Features",
        link: "#",
      },
      {
        name: "Contact Us",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    image: "https://picsum.photos/1920/1080?v=4",
    title: "Smart Home Automation",
    description: "Control your home devices with smart automation systems.",
    buttons: [
      {
        name: "Discover More",
        link: "#",
      },
      {
        name: "Get Started",
        link: "#",
      },
    ],
  },
];

export default function Hero() {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel
        opts={{
          loop: true,
          duration: 200,
          align: "center",
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
          {datas.map((item) => (
            <CarouselItem key={item.id} className="relative lg:basis-100">
              <div className="relative h-[calc(100vh-100px)] w-full">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg sm:text-xl lg:text-2xl">
                    {item.description}
                  </p>
                  <div className="mt-6 flex gap-4">
                    {item.buttons.map((button, idx) => (
                      <a
                        key={idx}
                        href={button.link}
                        className={`flex w-40 items-center text-nowrap justify-center rounded-lg px-5 py-2.5 text-lg font-medium ${
                          idx === 0
                            ? "bg-primary-button-gradient text-white hover:opacity-90"
                            : "border border-white bg-transparent text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        {button.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <div className="hidden lg:block">
          <CarouselNext
            className="absolute right-12 top-1/2 z-10 -translate-y-1/2 transform size-14 border-none bg-primary-button-gradient text-white hover:opacity-90 hover:text-white "
            icon={<ArrowRight size={20} />}
          />
          <CarouselPrevious
            className="absolute left-12 top-1/2 z-10 -translate-y-1/2 transform size-14 border-none bg-primary-button-gradient text-white hover:opacity-90 hover:text-white "
            icon={<ArrowLeft size={20} />}
          />
        </div>
      </Carousel>
    </div>
  );
}
