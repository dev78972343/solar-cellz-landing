import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { Separator } from "@/components/ui/separator";
import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const tryItData = [
  {
    id:1,
    title: "Request a Free Consultation",
    description:
      "Need advice on solar energy solutions for your home or business? Contact us for a free consultation to determine the best solar system for you.",
    button: {
      text: "Request Consultation",
      link: "#",
    },
  },
  {
    id:2,
    title: "Get a Solar Quote",
    description:
      "Get a customized solar quote based on your energy needs and location. Our team will work with you to design an optimal solution for your energy goals.",
    button: {
      text: "Get Quote",
      link: "#",
    },
  },
];

export default function TryIt({ className }) {
  const { t } = useTranslation();
  return (
    <div className={cn("", className)}>
      <ResponsiveContainer>
        <motion.section
          variants={slideUpParentVariants()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="scroll-hide mx-auto grid grid-cols-1 gap-8 overflow-auto rounded-lg opacity-10 bg-tartiary-gradient px-8 py-12 text-white lg:grid-cols-[45%,55%]"
        >
          <div className="px-8 py-4 flex flex-col items-center lg:items-start gap-6">
            <motion.h3
              variants={slideUpChildVariants}
              className="text-center lg:text-left text-3xl font-bold sm:text-4xl lg:text-5xl"
            >
              {t("tryIt.sectionTitle")}
            </motion.h3>
            <motion.div variants={slideUpChildVariants}>
              <PrimaryButton arrow className="w-fit px-4 text-sm">
                {t("tryIt.buttonText")}
              </PrimaryButton>
            </motion.div>
          </div>

          <div className="md:p-4">
            <motion.p
              variants={slideUpChildVariants}
              className="mb-6 text-lg text-white/80"
            >
              {t("tryIt.introText")}
            </motion.p>
            <Separator className="my-5 opacity-50" />

            <div className="flex flex-col gap-6">
              {tryItData.map((item, index) => (
                <motion.div
                  variants={slideUpChildVariants}
                  key={index}
                  className="flex flex-col gap-4"
                >
                  <h4 className="text-xl font-semibold sm:text-2xl">
                    {t(`tryIt.cards.${item.id}.title`)}
                  </h4>
                  <p className="text-white/80">{t(`tryIt.cards.${item.id}.description`)}</p>
                  <a
                    href={item.button.link}
                    className="group flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                    aria-label={`Navigate to ${item.button.text}`}
                  >
                    {t(`tryIt.cards.${item.id}.buttonText`)}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                  {index === 0 && <Separator className="my-4 opacity-50" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ResponsiveContainer>
    </div>
  );
}
