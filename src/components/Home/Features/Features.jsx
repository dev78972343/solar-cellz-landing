import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { useTranslation } from "react-i18next";

// Static features data
const features = [
  {
    id: 1,
    title: "Solar Panel Installation",
    description:
      "Efficient solar panel installation services to harness renewable energy, with expert guidance from site assessment to final setup.",
    icon: "🌞",
  },
  {
    id: 2,
    title: "Solar Energy Storage",
    description:
      "Store solar energy with high-quality batteries to ensure power availability even during the night or cloudy days.",
    icon: "🔋",
  },
  {
    id: 3,
    title: "Solar Maintenance & Support",
    description:
      "Routine maintenance and on-demand support to keep your solar systems running at optimal performance.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Energy Optimization",
    description:
      "Advanced solutions to optimize your energy usage and reduce costs, ensuring maximum efficiency from your solar system.",
    icon: "💡",
  },
];

export default function Features({ className }) {
  const { t } = useTranslation();
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
                <h3 className="mb-2 text-lg font-semibold">{t(`feat.${feature.id}.title`)}</h3>
                <p className="text-center md:text-left text-sm text-gray-400">{t(`feat.${feature.id}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </ResponsiveContainer>
    </div>
  );
}
