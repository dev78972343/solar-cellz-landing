import { cn } from "@/lib/utils";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {slideUpParentVariants} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { useTranslation } from "react-i18next";
import TeamCard from "./TeamCard";

export default function Teams({ className }) {
  const { t } = useTranslation();
  const teamsData = t("teams", { returnObjects: true });
  return (
    <section className={cn("bg-white", className)}>
      <ResponsiveContainer>
        <motion.section
          variants={slideUpParentVariants()}
          transition={{
            delay: 2,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <SectionHeader heading={teamsData.heading} subHeading={teamsData.subHeading} className="mb-8" />
          <Carousel
            opts={{
              loop: true,
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
              {teamsData.members.map((member, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <TeamCard member={member} idx={idx} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-10 md:mt-16">
              <CarouselDots />
            </div>
          </Carousel>
        </motion.section>
      </ResponsiveContainer>
    </section>
  );
}


