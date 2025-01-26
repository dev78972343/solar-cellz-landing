import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import EquipmentCard from "./EquipmentCard";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { useTranslation } from "react-i18next";

export default function Equipments({ className }) {
  const { t } = useTranslation();
  const equipments = t("equipments", { returnObjects: true });
  return (
    <div className={cn("border-y bg-sky-blue-50 py-16 lg:py-28", className)}>
      <ResponsiveContainer classes="flex-center-between gap-x-20 lg:flex-row flex-col gap-y-10">
        <div className="lg:w-1/3">
          <SectionHeader
            heading={equipments.heading}
            subHeading={equipments.subHeading}
            desc={equipments.desc}
            buttonText={equipments.button.text}
            buttonClassName="mx-auto md:mx-0"
            className="mx-auto w-full text-center md:text-left"
          />
        </div>

        <motion.div
          variants={slideUpParentVariants(1.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 lg:flex-grow xl:grid-cols-3 xl:gap-7"
        >
          {equipments?.cards.map((equipment, idx) => (
            <motion.div variants={slideUpChildVariants} key={idx}>
              <EquipmentCard equipment={equipment} idx={idx} />
            </motion.div>
          ))}
        </motion.div>
      </ResponsiveContainer>
    </div>
  );
}
