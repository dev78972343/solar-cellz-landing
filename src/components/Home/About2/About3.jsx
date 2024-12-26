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
                className="size-10 bg-normal-blue-500 text-white"
                icon={<ArrowRight size={18} />}
              />
              <CarouselPrevious
                className="size-10 bg-normal-blue-500 text-white"
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
      className="relative flex w-full max-w-[350px] flex-col gap-4 rounded-xl bg-white p-6"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-400 p-3 text-white">
        {card.icon}
      </div>
      <h3 className="text-xl font-medium text-gray-900">{card.title}</h3>
      <p className="text-gray-500">{card.description}</p>
      <ul className="list-inside list-disc space-y-2 font-medium text-gray-900">
        {card.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRightIcon className="size-4 font-semibold" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center justify-between gap-2 rounded-3xl border px-[3px] py-[3px] uppercase text-gray-900 hover:underline">
        <span className="ml-5 text-sm font-medium">View More</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900">
          <ArrowRight size={16} className="text-white" />
        </div>
      </button>
    </motion.div>
  );
}
