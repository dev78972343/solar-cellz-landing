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
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { useTranslation } from "react-i18next";

const aboutData = [
  {
    id: 1,
    title: "Solar Power Systems",
    description:
      "Reduce energy costs and increase independence by installing solar power systems for both residential and commercial use. Harness the power of the sun to fuel your needs.",
    features: [
      "Solar Backup Systems",
      "Renewable Energy Consulting",
      "Solar System Integration",
    ],
    icon: <BatteryCharging size={36} />,
  },
  {
    id: 2,
    title: "Home Solar Panel Installation",
    description:
      "Save on electricity bills and enjoy sustainable energy with our expert home solar panel installation. We ensure an efficient setup for maximum energy conversion.",
    features: [
      "High-Efficiency Panels",
      "Energy Cost Reduction",
      "Long-Term Durability",
    ],
    icon: <Cable size={36} />,
  },
  {
    id: 3,
    title: "Solar Panel Cleaning",
    description:
      "Ensure maximum efficiency of your solar panels with our professional cleaning services. We use non-toxic agents and water-efficient methods to maintain your solar panels.",
    features: [
      "Non-Toxic Cleaning Agents",
      "Water-Efficient Process",
      "Protects Panel Surface Integrity",
    ],
    icon: <Eclipse size={36} />,
  },
  {
    id: 4,
    title: "Solar Power Backup Solutions",
    description:
      "Our solar backup solutions provide a reliable energy source during power outages, ensuring that you always have access to electricity.",
    features: [
      "Reliable Backup Energy",
      "Seamless Integration",
      "Customizable Systems",
    ],
    icon: <BatteryCharging size={36} />,
  },
  {
    id: 5,
    title: "Solar Energy Consulting",
    description:
      "Our consulting services help you evaluate the best solar energy solutions for your home or business. Get expert advice tailored to your needs.",
    features: [
      "Energy Efficiency Audits",
      "Tailored Solar Solutions",
      "Comprehensive Support",
    ],
    icon: <Cable size={36} />,
  },
  {
    id: 6,
    title: "Commercial Solar Solutions",
    description:
      "Unlock the potential of solar energy for your business. Our commercial solar solutions reduce operational costs and contribute to sustainability goals.",
    features: [
      "Custom Commercial Installations",
      "Cost-Effective Solutions",
      "Increased Energy Efficiency",
    ],
    icon: <Eclipse size={36} />,
  },
];

export default function About3({ className }) {
  const { t } = useTranslation();
  return (
    <ResponsiveContainer classes={cn("bg-blue-50 rounded-xl", className)}>
      <div className="flex flex-col gap-8 py-8 md:px-8">
        <SectionHeader
          heading={t("about.title")}
          classes={{
            headingClass: "mb-0 mt-0 text-center lg:text-left",
          }}
        />
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
              {aboutData?.map((aboutInfo) => (
                <CarouselItem
                  key={aboutInfo.id}
                  className="h-full sm:basis-1/2 lg:basis-1/3"
                >
                  <AboutCard card={aboutInfo} key={aboutInfo.id}/>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop device navigation */}
            <div className="absolute -top-11 right-10 hidden md:block">
              <CarouselNext
                className="size-10 bg-primary-button-gradient text-white hover:text-white"
                icon={<ArrowRight size={18} />}
              />
              <CarouselPrevious
                className="size-10 bg-primary-button-gradient text-white hover:text-white"
                icon={<ArrowLeft size={18} />}
              />
            </div>
          </Carousel>
        </motion.section>
      </div>
    </ResponsiveContainer>
  );
}

function AboutCard({ card }) {
   const { t } = useTranslation();
  return (
    <motion.div
      variants={slideUpChildVariants}
      className="relative group/card overflow-hidden flex w-full max-w-[350px] flex-col gap-6 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Icon Wrapper */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light-blue-500 text-white shadow-md">
        {card.icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800">{t(`about.${card.id}.title`)}</h3>
      
      {/* Description */}
      <p className="text-gray-600">{t(`about.${card.id}.description`)}</p>
      
      {/* Features List */}
      <ul className="list-inside list-disc space-y-2 text-gray-700">
        {card.features.map((_, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRightIcon className="h-4 w-4 text-primary" />
            {t(`about.${card.id}.features.${i}`)}
          </li>
        ))}
      </ul>
      
      <button className="relative mt-4 flex items-center justify-between gap-2 group overflow-hidden rounded-full border border-gray-300 p-3 px-6 text-gray-800 transition-all duration-300 hover:text-white">
        {/* Progress Effect */}
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-[-100%]"></span>
        <span className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
          {t(`about.${card.id}.button.text`)}
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
      </button>

      {/* Animated Bottom Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full translate-x-[-100%] bg-gradient-to-r from-dark-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover/card:translate-x-0"></div>
    </motion.div>
  );
}
