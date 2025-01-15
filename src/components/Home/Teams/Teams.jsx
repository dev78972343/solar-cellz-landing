import { cn } from "@/lib/utils";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Facebook, Linkedin, Share2, Twitter, Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import team from "./constant";
import { useTranslation } from "react-i18next";


export default function Teams({ className }) {
  const { t } = useTranslation();
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
          <SectionHeader heading={t("teams.heading")} subHeading={t("teams.subHeading")} className="mb-8" />
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
              {team.map((member, idx) => (
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

function TeamCard({ member, idx }) {
  const { t } = useTranslation();
  return (
    <motion.div variants={slideUpChildVariants} className="group text-center border border-gray-200 shadow-md p-4 rounded-xl bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative flex justify-center">
        <div className="relative size-40">
          <img
            src={member.image}
            alt={t(`teams.members.${idx}.name`)}
            className="mx-auto mb-4 size-full rounded-full border border-gray-200"
          />
          <div className="absolute bottom-2 right-2 size-8 rounded-full bg-white p-1">
            <button className="flex h-full w-full items-center justify-center rounded-full bg-normal-blue-500 text-white hover:text-white">
              <Share2 className="size-4" />
            </button>
          </div>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/facebook shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
              <Facebook className="size-4 text-light-blue-500 group-hover/facebook:text-white" />
            </div>
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/twitter shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
              <Twitter className="size-4 text-light-blue-500 group-hover/twitter:text-white" />
            </div>
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/linkedin shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
              <Linkedin className="size-4 text-light-blue-500 group-hover/linkedin:text-white" />
            </div>
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/youtube shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
              <Youtube className="size-4 text-light-blue-500 group-hover/youtube:text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-lg font-semibold">{t(`teams.members.${idx}.name`)}</p>
        <span className="text-sm text-gray-500">{t(`teams.members.${idx}.position`)}</span>
      </div>
    </motion.div>
  );
}
