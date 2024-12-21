import { AvatarGroup } from "@/components/ui/avatarGroup";
import avatar1 from "@/assets/images/hero/user-avatar-1.jpg";
import avatar2 from "@/assets/images/hero/user-avatar-2.jpg";
import avatar3 from "@/assets/images/hero/user-avatar-3.jpg";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import manWithSolarImg from "@/assets/images/hero/man-with-solar.png";
import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import CustomCountUp from "@/components/CustomCountUp/CustomCountUp";
import { WordFadeIn } from "@/utils/text-animate";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import HeroCarousel from "./HeroCarousel";

// Static data for AvatarGroup
const users = [
  {
    key: 1,
    name: "Leroy Alvarez",
    image: avatar1,
  },
  {
    key: 2,
    name: "Henry Hopkins",
    image: avatar2,
  },
  {
    key: 3,
    name: "Reginald Caldwell",
    image: avatar3,
  },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="text-black">
      <ResponsiveContainer classes="flex-center-between lg:flex-row flex-col-reverse gap-y-8 -z-10">
        <div className="flex-center-start -z-10 gap-x-3 lg:w-3/4 2xl:w-[90%]">
          <AvatarGroup users={users} />

          <p className="font-medium text-black-600 md:text-lg">
            <span className="mr-1 text-black">
              <CustomCountUp start={0} end={275} duration={10} />K
            </span>{" "}
            {t("hero.clients across industries")}
          </p>
        </div>

        <p className="-z-10 text-center text-2xl lg:text-right lg:text-xl">
          <WordFadeIn delay={0.5}>
            {t(
              "hero.Leading provider of innovative solar energy solutions for residential, commercial, and industrial clients",
            )}
          </WordFadeIn>
        </p>
      </ResponsiveContainer>

      <ResponsiveContainer classes="my-10">
        <HeroCarousel />
      </ResponsiveContainer>

      <ResponsiveContainer classes="flex-center-between lg:flex-row flex-col">
        <motion.div
          className="flex-stretch flex-col items-center gap-x-3 gap-y-5 lg:flex-grow lg:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="group relative flex h-[220px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-normal-blue-500 p-6 pl-5 pr-20 text-white transition-all duration-300 ease-in-out hover:scale-[1.01] md:h-[275px] lg:w-[327px]">
            {/* Arrow */}
            <div
              className="flex-center aspect-square size-9 rounded-full p-1"
              style={{
                backgroundImage:
                  "linear-gradient(138deg, rgba(255, 255, 255, 0.10) -46.37%, #FFF 48.94%, rgba(255, 255, 255, 0.40) 144.25%)",
              }}
            >
              <AnimatedArrow
                arrowClass="size-6 -rotate-45"
                stroke="var(--normal-blue-500)"
              />
            </div>

            <h4 className="text-3xl">
              With{" "}
              <span className="text-sky-blue-200">
                over 20 years of experience
              </span>
            </h4>
          </div>

          <img
            src={manWithSolarImg}
            alt="A construction worker with a solar panel"
            className="h-auto w-auto overflow-hidden rounded-3xl transition-all duration-300 ease-in-out hover:scale-[1.01] lg:h-full lg:w-[327px]"
          />
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-y-10 text-center lg:mt-0 lg:w-1/2 lg:items-end lg:text-right">
          <h3 className="text-3xl">
            <WordFadeIn delay={0.2}>High-quality solar solutions </WordFadeIn>
            <span className="text-[#8A8A8A]">
              <WordFadeIn delay={0.2}>
                for both residential and commercial needs.
              </WordFadeIn>
            </span>
          </h3>

          <PrimaryButton className="px-10" arrow>
            Get Started
          </PrimaryButton>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
