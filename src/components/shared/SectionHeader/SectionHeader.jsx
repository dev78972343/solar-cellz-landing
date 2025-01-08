import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import { cn } from "@/lib/utils";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";

export default function SectionHeader({
  heading,
  subHeading,
  desc,
  className,
  buttonText = "",
  buttonClassName,
  classes,
}) {
  return (
    <motion.div
      variants={slideUpParentVariants()}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className={cn("overflow-hidden", className)}
    >
      <motion.p
        variants={slideUpChildVariants}
        className="overflow-hidden font-dmSans text-base font-medium text-normal-blue-500"
      >
        {subHeading}
      </motion.p>

      <motion.h3
        variants={slideUpChildVariants}
        className={cn("mb-4 mt-1.5 overflow-hidden text-3xl font-bold xl:text-4xl xl:leading-snug", classes?.headingClass)}
      >
        {heading}
      </motion.h3>

      {desc && (
        <motion.p
          variants={slideUpChildVariants}
          className="overflow-hidden text-base text-gray-600 lg:text-lg"
        >
          {desc}
        </motion.p>
      )}

      {buttonText && (
        <motion.div
          variants={slideUpChildVariants}
          className={cn("mx-auto mt-8 w-max p-1", buttonClassName)}
        >
          <PrimaryButton arrow>{buttonText}</PrimaryButton>
        </motion.div>
      )}
    </motion.div>
  );
}
