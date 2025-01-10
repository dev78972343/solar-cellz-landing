import { cn } from "@/lib/utils";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";

export default function Demo({ className }) {
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
      <motion.h1 variants={slideUpChildVariants} className="text-3xl lg:text-5xl font-bold">
        Design—Powering Solar Solutions in Harmony
      </motion.h1>
      <motion.button
        variants={slideUpChildVariants}
        className="mt-8 rounded-3xl bg-gray-900 px-10 py-3 text-white"
      >
        Try out online demo
      </motion.button>
    </motion.section>
  );
}
