import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import logo from "@/assets/logos/logo.png";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { NavSearchBar } from "./_components/NavSearchBar";
import TopNavMenu from "./_components/TopNavMenu";
import BottomNavMenu from "./_components/BottomNavMenu";
import { motion } from "motion/react";
import MobileSearchBar from "./_components/MobileSearchBar";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./_components/MobileSidebar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Motion Variants
const slideLeftToRightVariants = {
  initial: {
    x: -150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 2,
      damping: 30,
      stiffness: 300,
    },
  },
};

const slideRightToLeftVariants = {
  initial: {
    x: 150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 2,
      damping: 30,
      stiffness: 300,
    },
  },
};

const bounceDownVariants = {
  initial: {
    y: -20,
    opacity: 0,
    filter: "blur(2px)",
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 2,
      damping: 70,
      stiffness: 476,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export default function Navbar() {
  // Mobile device sidebar handler
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Translation handler
  const { t } = useTranslation();

  return (
    <nav className="bg-dark-blue-500 py-5 text-white lg:py-8">
      <ResponsiveContainer>
        {/* Top Row - Logo + Sign in */}
        <section className="flex-center-between">
          <Link to="/">
            <motion.img
              src={logo}
              alt="Sollar Cellz Logo"
              variants={slideLeftToRightVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            />
          </Link>

          {/* On Desktop */}
          <motion.div
            className="hidden items-center justify-start gap-x-5 lg:flex"
            variants={slideRightToLeftVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <PrimaryButton
              icon={<ChevronRight size={20} />}
              className="border-white"
            >
              {t("navbar.Account Sign In")}
            </PrimaryButton>

            <button className="relative">
              <ShoppingCart size={28} color="#fff" />

              {/* Badge */}
              <div className="flex-center absolute -right-2 -top-1 aspect-square size-[18px] rounded-full bg-red-400 text-xs font-medium text-white">
                0
              </div>
            </button>
          </motion.div>

          {/* On Mobile > Menu Icon */}
          <motion.button
            className="flex items-center justify-end gap-x-5 lg:hidden"
            variants={slideRightToLeftVariants}
            onClick={() => setShowMobileSidebar(true)}
          >
            <AlignJustify size={24} strokeWidth={1.4} />
          </motion.button>
        </section>
      </ResponsiveContainer>

      {/* Bottom Row -  Search + Nav Menu*/}
      <section className="w-full">
        {/* ------------------ Desktop Devices ------------------ */}
        <motion.section
          variants={bounceDownVariants}
          initial="initial"
          animate="animate"
          className="relative z-[9999] mt-8 hidden w-full space-y-8 lg:block"
        >
          <motion.div
            key={"top-menu"}
            variants={bounceDownVariants}
            className="relative z-[9999] mx-auto max-w-max"
          >
            <TopNavMenu />
          </motion.div>

          <motion.div
            key={"nav-search"}
            variants={bounceDownVariants}
            className="relative z-10 mx-auto"
          >
            <NavSearchBar />
          </motion.div>

          <motion.div
            key={"bottom-menu"}
            variants={bounceDownVariants}
            className="relative z-[9999] mx-auto max-w-max"
          >
            <BottomNavMenu />
          </motion.div>
        </motion.section>
      </section>

      <ResponsiveContainer>
        {/* ------------------ Mobile Devices ------------------ */}
        <motion.section
          variants={bounceDownVariants}
          className="mt-5 block lg:hidden"
        >
          <MobileSearchBar />

          <MobileSidebar
            show={showMobileSidebar}
            setShow={setShowMobileSidebar}
          />
        </motion.section>
      </ResponsiveContainer>
    </nav>
  );
}
