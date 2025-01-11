import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

export default function Stats({ className }) {
  const stats = [
    {
      value: "20+",
      title: "Solar Experts",
      description:
        "We have a team of 20+ expert solar engineers specializing in repair, installation, and system optimization.",
    },
    {
      value: "100%",
      title: "Client Satisfaction",
      description:
        "Our commitment to excellence has earned us a 100% client satisfaction rate in providing renewable energy solutions.",
    },
    {
      value: "5k+",
      title: "Installations Completed",
      description:
        "With over 5,000 successful solar panel installations, we have extensive experience in delivering reliable, sustainable energy.",
    },
  ];

  return (
    <ResponsiveContainer classes={className}>
      <motion.div
        variants={slideUpParentVariants()}
        transition={{
          delay: 2,
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between border-gray-200 md:flex-row gap-4 md:border-t"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={slideUpChildVariants}
            className="relative p-8 text-center md:flex-1 md:text-left"
            key={index}
          >
            {/* Line Separator */}
            {index > 0 && (
              <div className="absolute -left-2 top-1/2 hidden h-full w-[1px] -translate-y-1/2 bg-gray-300 md:block">
                {/* Green Dot */}
                <div className="absolute hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-90 transform bg-green-500 md:block"></div>
              </div>
            )}

            {/* Content */}
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              {stat.value}
            </h2>
            <h3 className="text-lg font-medium text-gray-700 md:text-xl">
              {stat.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </ResponsiveContainer>
  );
}
