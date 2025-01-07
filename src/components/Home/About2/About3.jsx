import {
  ArrowRight,
  ArrowLeft,
  BatteryCharging,
  Cable,
  ChevronRightIcon,
  Eclipse,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";

const aboutData = [
  {
    title: "Solar Power System",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: [
      "Solar Backup Systems",
      "Renewable Consulting",
      "Home Solar Integration",
    ],
    icon: <BatteryCharging size={36} />,
  },
  {
    title: "Household solar panel",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: [
      "Solar Panel Installation",
      "Solar Energy Saving System",
      "Bio Electricity Supply",
    ],
    icon: <Cable size={36} />,
  },
  {
    title: "Solar Panel Cleaning",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: ["Non-Toxic Agents", "Water Efficient", "Safe Panel Surfaces"],
    icon: <Eclipse size={36} />,
  },
  {
    title: "Solar Power System",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: [
      "Solar Backup Systems",
      "Renewable Consulting",
      "Home Solar Integration",
    ],
    icon: <BatteryCharging size={36} />,
  },
  {
    title: "Household solar panel",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: [
      "Solar Panel Installation",
      "Solar Energy Saving System",
      "Bio Electricity Supply",
    ],
    icon: <Cable size={36} />,
  },
  {
    title: "Solar Panel Cleaning",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: ["Non-Toxic Agents", "Water Efficient", "Safe Panel Surfaces"],
    icon: <Eclipse size={36} />,
  },
];

export default function About3({ className }) {
  return (
    <ResponsiveContainer classes={cn("bg-blue-50 rounded-xl", className)}>
      <div className="flex flex-col gap-5 py-8 md:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-left">
          Complete solar solution <br /> with repair services
        </h2>
        <motion.section
          variants={slideUpParentVariants()}
          transition={{
            delay: 2,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
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
              {aboutData?.map((aboutInfo, idx) => (
                <CarouselItem
                  key={idx}
                  className="h-full sm:basis-1/2 lg:basis-1/3"
                >
                  <AboutCard card={aboutInfo} index={idx} />
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
            {/* <div className="absolute -bottom-10 left-1/2 block lg:hidden">
              <CarouselNext
                className="size-10 bg-normal-blue-500 text-white"
                icon={<ArrowRight size={18} />}
              />
              <CarouselPrevious
                className="size-10 bg-normal-blue-500 text-white"
                icon={<ArrowLeft size={18} />}
              />
            </div> */}
          </Carousel>
        </motion.section>
      </div>
      {/* Top selling items carousel */}
    </ResponsiveContainer>
  );
}

function AboutCard({ card, index }) {
  return (
    <motion.div
      variants={slideUpChildVariants}
      key={index}
      className="relative group/card overflow-hidden flex w-full max-w-[350px] flex-col gap-6 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Icon Wrapper */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light-blue-500 text-white shadow-md">
        {card.icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
      
      {/* Description */}
      <p className="text-gray-600">{card.description}</p>
      
      {/* Features List */}
      <ul className="list-inside list-disc space-y-2 text-gray-700">
        {card.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRightIcon className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Call to Action Button */}
      {/* <button className="group mt-4 flex items-center justify-between gap-2 rounded-full border border-gray-300 bg-gradient-to-r from-white to-white bg-[length:200%] bg-left p-3 px-6 text-gray-800 transition-all duration-300 hover:bg-[length:200%] hover:bg-right hover:from-dark-blue-500 hover:to-light-blue-500 hover:text-white hover:shadow-lg">
        <span className="text-sm font-medium">
          View More
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
      </button> */}
      <button className="relative mt-4 flex items-center justify-between gap-2 group overflow-hidden rounded-full border border-gray-300 p-3 px-6 text-gray-800 transition-all duration-300 hover:text-white">
        {/* Progress Effect */}
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-[-100%]"></span>
        <span className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
          View More
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
      </button>

      {/* Animated Bottom Bar */}
    <div className="absolute bottom-0 left-0 h-1 w-full translate-x-[-100%] bg-gradient-to-r from-dark-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover/card:translate-x-0"></div>
    </motion.div>
  );
}

