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
      title: "Employees",
      description:
        "We have 20+ amazing expert solar experts for repair & installation.",
    },
    {
      value: "100%",
      title: "Client Satisfaction",
      description:
        "We achieved 100% of our client satisfaction through our work.",
    },
    {
      value: "5k+",
      title: "Installation",
      description:
        "We have 20 years of experience in installing panels for our clients.",
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
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 border-gray-200 md:flex-row md:gap-4 md:border-t"
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
            <h2 className="text-3xl font-semibold text-gray-900">
              {stat.value}
            </h2>
            <h3 className="text-lg font-medium text-gray-700">{stat.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </ResponsiveContainer>
  );
}
