import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slideUpChildVariants, slideUpParentVariants } from "@/utils/sharedMotionVariants";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { images } from "./constants";

export default function Hero() {
  const { t } = useTranslation();
  const heroItems = t("hero", { returnObjects: true });
  return (
      <Carousel
        opts={{
          loop: true,
          duration: 100,
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
          {heroItems.map((item) => (
            <CarouselItem key={item.id} className="relative lg:basis-100">
              <div className="relative h-[calc(100vh-100px)] w-full">
                {/* Background Image */}
                <img
                  src={images[item.id]}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <motion.div 
                variants={slideUpParentVariants()}
                transition={{
                  delay: 4,
                }}
                initial="initial"
                whileInView="animate"
               viewport={{ once: false }} 
               className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <motion.h1 variants={slideUpChildVariants} className="text-4xl font-bold lg:text-6xl">
                    {item.title}
                    
                  </motion.h1>
                  <motion.p variants={slideUpChildVariants} className="mt-4 max-w-[80%] text-lg lg:text-2xl">
                    {item.description}
                  </motion.p>
                  <motion.div  variants={slideUpChildVariants} className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    {item.buttons.map((button, idx) => (
                      <a
                        key={idx}
                        href={button.url}
                        className={`flex w-fit max-h-10 items-center text-nowrap justify-center rounded-lg px-5 py-2.5 text-sm md:text-lg font-medium ${
                          idx === 0
                            ? "bg-primary-button-gradient text-white hover:opacity-90"
                            : "border border-white bg-transparent text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        {button.text}
                      </a>
                    ))}
                  </motion.div>
                </motion.div>
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
  );
}
