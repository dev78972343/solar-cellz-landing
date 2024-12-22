import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { motion } from "motion/react";
import {
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { Separator } from "@/components/ui/separator";
import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Static Try It data
const tryItData = [
    {
        title: "Contact sales",
        description:
            "Interested in Webflow Enterprise? Get in touch with our sales team to receive a free personalized demo.",
        button: {
            text: "Contact Sales",
            link: "#"
        }
    },
    {
        title: "Hire a Certified Partner",
        description:
            "Extend the power of your team by hiring a Certified Webflow Partner — we'll match you with the best in the business.",
        button: {
            text: "Browse Partners",
            link: "#"
        }
    }
]


export default function TryIt({ className }) {
    return (
      <div className={cn("", className)}>
        <ResponsiveContainer>
          <motion.section
            variants={slideUpParentVariants()}
            transition={{ delay: 0.5 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=
              "p-12 bg-gray-500 rounded-lg text-white grid grid-cols-1 lg:grid-cols-[45%,55%] gap-8 scroll-hide mx-auto overflow-auto 2xl:w-3/4">
            <header className="flex flex-col gap-5">
              <h3 className="text-4xl font-bold xl:text-5xl xl:leading-snug">Try It For free</h3>
              <PrimaryButton arrow className="w-fit">Get Started - Free</PrimaryButton>
            </header>
            <main>
              <p className="text-lg text-white/90">
                Try Webflow for as long as you like with our free Starter plan.
                Purchase a paid Site plan to publish, host, and unlock additional
                features.
              </p>
              <Separator className="my-5" />
              <div className="flex flex-col gap-3">
                {tryItData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="text-white/90">{item.description}</p>
                    <a
                      href={item.button.link}
                      className="flex items-center group/icon"
                      aria-label={`Navigate to ${item.button.text}`}
                    >
                      {item.button.text}
                      <span className="ml-2 mt-0.5">
                        <ArrowRight className="h-4 w-4 group-hover/icon:translate-x-2 transition-all duration-300 ease-in-out" />
                      </span>
                    </a>
                    {index === 0 && <Separator className="my-5" />}
                  </div>
                ))}
              </div>
            </main>
          </motion.section>
        </ResponsiveContainer>
      </div>
    );
  }
  
