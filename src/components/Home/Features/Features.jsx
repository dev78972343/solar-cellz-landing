import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

// Static features data
const features = [
  {
    title: "Solar Panel Installation",
    description:
      "Efficient solar panel installation services to harness renewable energy, with expert guidance from site assessment to final setup.",
    icon: "🌞",
  },
  {
    title: "Solar Energy Storage",
    description:
      "Store solar energy with high-quality batteries to ensure power availability even during the night or cloudy days.",
    icon: "🔋",
  },
  {
    title: "Solar Maintenance & Support",
    description:
      "Routine maintenance and on-demand support to keep your solar systems running at optimal performance.",
    icon: "⚙️",
  },
  {
    title: "Energy Optimization",
    description:
      "Advanced solutions to optimize your energy usage and reduce costs, ensuring maximum efficiency from your solar system.",
    icon: "💡",
  },
];

export default function Features({ className }) {
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
            {features.map((feature, index) => (
              <motion.div
                variants={slideUpChildVariants}
                key={index}
                className="rounded-lg flex flex-col items-center md:items-start"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </ResponsiveContainer>
    </div>
  );
}
