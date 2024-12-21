import { motion, useScroll, useTransform } from "motion/react";
import heroBanner from "@/assets/images/hero/hero-banner.png";

export default function HeroBanner() {
  // Scale banner on scroll
  const { scrollY } = useScroll();
  const heroBannerScale = useTransform(scrollY, [7000, 8000], [1, 1.2]);

  return (
    <motion.img
      src={heroBanner}
      alt="Hero section banner"
      className="mx-auto mb-16 mt-16 h-auto w-[85%] lg:mb-36"
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      }}
      style={{ scale: heroBannerScale }}
      viewport={{ once: true }}
    />
  );
}
