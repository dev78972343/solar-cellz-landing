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
    title: "Design and build",
    description:
      "Designers can take control of HTML, CSS, and JavaScript in visual canvases while marketers can work with pre-made, design-approved building blocks.",
    icon: "🖌️",
  },
  {
    title: "Publish and edit",
    description:
      "Choose how you want to add, edit, and update content at scale with CMS tools virtually or programmatically through APIs.",
    icon: "📝",
  },
  {
    title: "Analyze and optimize",
    description:
      "Transform your site into your most valuable marketing asset with native tools for A/B testing, SEO, and more.",
    icon: "📊",
  },
  {
    title: "Scale and collaborate",
    description:
      "50,000 websites are published with confidence using our hosting tools for security, compliance, and integrations.",
    icon: "🌐",
  },
];

export default function Features({ className }) {
  return (
    <div className={cn("border-t bg-white py-12 text-gray-900", className)}>
      <ResponsiveContainer classes="flex-center-between gap-x-20 lg:flex-row flex-col gap-y-10">
        <motion.section
          variants={slideUpParentVariants()}
          transition={{
            delay: 2,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                variants={slideUpChildVariants}
                key={index}
                className="rounded-lg p-6"
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
