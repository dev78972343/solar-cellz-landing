import {
  ArrowRight,
  ArrowLeft,
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
import {slideUpParentVariants} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function About({ className }) {
  const { t } = useTranslation();
  const aboutItmes = t("about", { returnObjects: true });
  return (
    <ResponsiveContainer classes={cn("bg-blue-50 rounded-xl", className)}>
      <div className="flex flex-col gap-8 py-8 md:px-8">
        <SectionHeader
          heading={aboutItmes.heading}
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
              {aboutItmes.content?.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="h-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card card={item} key={item.id}/>
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

