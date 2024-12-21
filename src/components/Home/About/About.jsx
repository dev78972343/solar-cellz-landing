import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import aboutImg1 from "@/assets/images/about/Box 1.png";
import aboutImg2 from "@/assets/images/about/Box 2.png";
import aboutImg3 from "@/assets/images/about/Box 3.png";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";

// Static About Us data
const aboutUsData = [
  {
    key: "renewable",
    image: aboutImg1,
    alt: "Image of Solar panel demonstrating importance of renewable energy",
    title: "Renewable",
    desc: "Healthy turf requires the right products at the right time. Let us show you how.",
  },
  {
    key: "energy",
    image: aboutImg2,
    alt: "Image of Solar panel demonstrating importance of renewable energy",
    title: "Energy",
    desc: "Order the supplies you need and take advantage of flexible payment terms.",
  },
  {
    key: "future",
    image: aboutImg3,
    alt: "Image of Solar panel demonstrating importance of renewable energy for a better future",
    title: "Future",
    desc: "Lighting, long handle tools & irrigation products built to last. Only at Solar Cellz USA.",
  },
];

export default function About() {
  return (
    <ResponsiveContainer>
      <section className="mb-10">
        <SectionHeader
          heading="Solar Energy Specialists"
          subHeading="About Us"
          desc="Whether you’re looking to buy commercial solar panels, solar inverters or are hunting for a solar battery storage solution for your solar array, Solar Cellz USA has it and we have it at the best prices, from the best manufacturers in the world. "
          className="mx-auto text-center lg:w-3/4"
          buttonText="Explore"
        />
      </section>

      <motion.section
        variants={slideUpParentVariants()}
        transition={{
          delay: 2,
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex-center-between scroll-hide mx-auto gap-x-5 overflow-auto text-white 2xl:w-3/4"
      >
        {aboutUsData?.map((item) => (
          <motion.div
            key={item.key}
            className="group relative h-[450px] w-[90%] flex-shrink-0 overflow-hidden rounded-xl lg:w-full lg:flex-shrink"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "40%",
              backgroundRepeat: "no-repeat",
            }}
            variants={slideUpChildVariants}
          >
            {/* Text Content */}
            <div className="absolute bottom-12 left-5 transition-all duration-300 ease-in-out group-hover:bottom-16 group-hover:left-8">
              <h4 className="text-3xl font-bold">{item.title}</h4>
              <p className="mt-2 text-white/90">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </ResponsiveContainer>
  );
}
