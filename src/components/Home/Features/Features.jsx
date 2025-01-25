import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { useTranslation } from "react-i18next";

export default function Features({ className }) {
  const { t } = useTranslation();
  const features = t("features", { returnObjects: true });
  return (
    <div className={cn("bg-white text-gray-900", className)}>
      <ResponsiveContainer classes="flex-center-between gap-x-20 lg:flex-row flex-col gap-y-10">
        <motion.section
          variants={slideUpParentVariants()}
          transition={{
            delay: 2,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <motion.div
                variants={slideUpChildVariants}
                key={idx}
                className="rounded-lg flex flex-col items-center md:items-start"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-center md:text-left text-sm md:text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </ResponsiveContainer>
    </div>
  );
}
