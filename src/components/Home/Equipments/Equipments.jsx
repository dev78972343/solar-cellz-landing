import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import equipmentImg1 from "@/assets/images/equipments/equip1.png";
import equipmentImg2 from "@/assets/images/equipments/equip2.png";
import equipmentImg3 from "@/assets/images/equipments/equip3.png";
import equipmentImg4 from "@/assets/images/equipments/equip4.png";
import equipmentImg5 from "@/assets/images/equipments/equip5.png";
import equipmentImg6 from "@/assets/images/equipments/equip6.png";
import EquipmentCard from "./EquipmentCard";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";

// Static Equipment Data
const equipments = [
  {
    key: 1,
    name: "Wholesale Solar Inverters",
    image: equipmentImg1,
  },
  {
    key: 2,
    name: "Home Solar Battery Banks",
    image: equipmentImg2,
  },
  {
    key: 3,
    name: "Combiner Boxes",
    image: equipmentImg3,
  },
  {
    key: 4,
    name: "Solar Panels",
    image: equipmentImg4,
  },
  {
    key: 5,
    name: "EV Chargers",
    image: equipmentImg5,
  },
  {
    key: 6,
    name: "Utility Scale Inverters",
    image: equipmentImg6,
  },
];

export default function Equipments({ className }) {
  return (
    <div className={cn("border-y bg-sky-blue-50 py-16 lg:py-28", className)}>
      <ResponsiveContainer classes="flex-center-between gap-x-20 lg:flex-row flex-col gap-y-10">
        <div className="lg:w-1/3">
          <SectionHeader
            heading="We Carry Every Piece of Solar Equipments"
            subHeading="Solar Equipment"
            desc="You would need to build an on-grid, off-grid, or hybrid solar system, EV charging including the following:"
            buttonText="Explore"
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
          {equipments?.map((equipment) => (
            <motion.div variants={slideUpChildVariants} key={equipment.key}>
              <EquipmentCard equipment={equipment} />
            </motion.div>
          ))}
        </motion.div>
      </ResponsiveContainer>
    </div>
  );
}
