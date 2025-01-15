import { cn } from "@/lib/utils";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Demo({ className }) {
  const { t } = useTranslation();
  return (
    <motion.section
      variants={slideUpParentVariants()}
      transition={{
        delay: 2,
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn(className, "bg-gradient-to-br from-[#d4dee6] via-[#91C4E4] to-[#105FA8] py-20 lg:py-[150px] text-center")}
    >
      <motion.h1 variants={slideUpChildVariants} className="px-3 text-3xl lg:text-5xl font-bold">
        {t("demo.title")}
      </motion.h1>
      <motion.p
        variants={slideUpChildVariants}
        className="mt-4 px-3 text-lg lg:text-xl text-gray-800"
      >
        {t("demo.description")}
      </motion.p>
      <motion.button
        variants={slideUpChildVariants}
        className="mt-8 rounded-3xl bg-primary-button-gradient px-10 py-3 text-white"
      >
        {t("demo.buttonText")}
      </motion.button>
    </motion.section>
  );
}
