import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// Motion variants
const slideLeftVariants = {
  initial: {
    x: -50,
    opacity: 0,
    filter: "blur(2px)",
  },
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 0.1,
      damping: 40,
      stiffness: 180,
    },
  },
};

const slideRightVariants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.1,
      damping: 40,
      stiffness: 180,
    },
  },
};

export default function RecentWorkCard({ data }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-x-16 gap-y-8 lg:flex-row",
        data?.imageSide === "right" && "flex-col lg:flex-row-reverse",
      )}
    >
      {/* Left side */}
      <motion.div
        variants={
          data?.imageSide === "left" ? slideLeftVariants : slideRightVariants
        }
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full lg:w-[55%]"
      >
        <img
          src={data?.image}
          alt={"Image of" + data?.title}
          className="rounded-3xl"
        />
      </motion.div>

      {/* Right Side */}
      <div className="w-full lg:w-[45%]">
        <SectionHeader
          subHeading={data?.systemType}
          heading={data?.title}
          desc={data?.description}
        />

        <div className="flex-center mt-5 rounded-xl bg-black py-3 text-white">
          <div className="flex-center w-full flex-wrap gap-x-6 gap-y-4 lg:w-10/12">
            {data?.features?.map((feature, idx) => (
              <div key={feature?.key} className="flex-center gap-x-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold md:text-xl 2xl:text-2xl">
                    {feature?.title}
                  </h3>
                  <p className="text-sm text-white/85 lg:text-base">
                    {feature?.desc}
                  </p>
                </div>

                {/* Horizontal Divider */}
                {idx !== data?.features?.length - 1 && (
                  <Separator orientation="vertical" className="h-12" />
                )}
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 w-full bg-normal-blue-500" />

        <div className="space-y-5">
          {data?.details?.map((detail) => (
            <div key={detail?.key} className="flex-center-start gap-x-3">
              <div className="flex-center size-8 bg-light-blue-500 text-white">
                {detail?.icon}
              </div>

              <p className="text-lg font-medium">
                {detail.label}: {detail.value}
              </p>
            </div>
          ))}
        </div>

        <Link to="/#" className="my-5 block">
          <span className="button-highlight text-lg font-medium">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  );
}
