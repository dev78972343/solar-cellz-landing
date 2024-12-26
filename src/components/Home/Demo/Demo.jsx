import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";

export default function Demo() {
  return (
    <motion.section
      variants={slideUpParentVariants()}
      transition={{
        delay: 2,
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-sky-blue-50 via-sky-blue-200 to-light-blue-500 py-[120px] text-center"
    >
      <motion.h1 variants={slideUpChildVariants} className="text-5xl font-bold">
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
