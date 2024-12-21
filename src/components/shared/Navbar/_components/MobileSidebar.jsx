import { cn } from "@/lib/utils";
import { useState } from "react";
import { menuItems } from "../navigation-menu-links/nav-menu-links";
import { X } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { UsersRound } from "lucide-react";
import { UserRound } from "lucide-react";
import { Logs } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { Briefcase } from "lucide-react";
import { MapPin } from "lucide-react";
import { Headset } from "lucide-react";
import { Languages } from "lucide-react";
import textTruncate from "@/utils/textTruncate";
import { AnimatePresence, motion } from "motion/react";
import { useLanguages } from "@/hook/useLanguage";
import { Check } from "lucide-react";
import { LANGUAGES } from "@/constants/supported-languages";

// Slide in variant
const slideInVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.2,
      damping: 35,
      stiffness: 220,
    },
  },
  exit: {
    x: "100vw",
  },
};

export default function MobileSidebar({ show, setShow }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Find currently selected language
  const { currentLanguage, changeLanguage } = useLanguages();

  // Change language
  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
  };

  const renderMainMenu = () => (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-base text-blue-600">
          Sign In or Create an account
        </h1>
        <button className="text-gray-500" onClick={() => setShow(false)}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-[#f1f2f2] p-4 py-2 text-black">
        <h2 className="mb-3 font-medium">Categories</h2>

        <div className="scroll-hide mb-6 flex items-start gap-x-3 overflow-auto">
          {menuItems.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category)}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-2 h-28 w-28 rounded-lg border bg-white p-2">
                <img src={category?.image} alt="" className="h-full w-full" />
              </div>

              <span className="text-sm text-black">
                {category.labelTrigger}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 border-t">
        {[
          {
            icon: <UserRound className="mr-3 h-5 w-5 text-gray-500" />,
            label: "My Account",
          },
          {
            icon: <ShoppingBag className="mr-3 h-5 w-5 text-gray-500" />,
            label: "My Orders",
          },
          {
            icon: <Logs className="mr-3 h-5 w-5 text-gray-500" />,
            label: "Lists",
          },
          {
            icon: <UsersRound className="mr-3 h-5 w-5 text-gray-500" />,
            label: "Partners program",
          },
          {
            icon: <PartyPopper className="mr-3 h-5 w-5 text-gray-500" />,
            label: "Events",
          },
          {
            icon: <Briefcase className="mr-3 h-5 w-5 text-gray-500" />,
            label: "Careers",
          },
          {
            icon: <MapPin className="mr-3 h-5 w-5 text-gray-500" />,
            label: "Store Finder",
          },
          {
            icon: <Headset className="mr-3 h-5 w-5 text-gray-500" />,
            label: "Contact Us",
          },
          {
            icon: <Languages className="mr-3 h-5 w-5 text-gray-500" />,
            label: (
              <span
                className="flex-center-between gap-x-4"
                role="button"
                onClick={() => handleChangeLanguage(LANGUAGES.enUS)}
              >
                English{" "}
                {currentLanguage === LANGUAGES.enUS && (
                  <Check size={18} className="text-normal-blue-500" />
                )}
              </span>
            ),
          },
          {
            icon: <Languages className="mr-3 h-5 w-5 text-gray-500" />,
            label: (
              <span
                className="flex-center-between gap-x-4"
                role="button"
                onClick={() => handleChangeLanguage(LANGUAGES.es)}
              >
                Spanish{" "}
                {currentLanguage === LANGUAGES.es && (
                  <Check size={18} className="text-normal-blue-500" />
                )}
              </span>
            ),
          },
        ].map((item, index) => (
          <button
            key={index}
            className="flex w-full items-center border-b p-4 text-black"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderCategoryMenu = () => (
    <motion.div
      variants={slideInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex h-full flex-col bg-white text-black"
    >
      <div className="flex items-center justify-between border-b p-4">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedItem(null);
          }}
          className="flex items-center text-blue-600"
        >
          <ChevronLeft className="mr-1 h-5 w-5" />
          Back
        </button>

        <h2 className="mr-8 flex-1 text-center text-base font-medium">
          {selectedCategory?.labelTrigger}
        </h2>

        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedItem(null);
          }}
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <button className="w-full border-b p-4 text-left">Shop All</button>
        {selectedCategory?.items.map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedItem(item)}
            className={cn(
              "w-full border-b p-4 text-left",
              selectedItem?.key === item.key && "bg-gray-100",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );

  const renderSubcategoryMenu = () => {
    if (!selectedItem) return null;

    return (
      <motion.div
        variants={slideInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn("flex h-full flex-col bg-white text-black")}
      >
        <div className="flex items-center justify-between border-b p-4">
          <button
            onClick={() => setSelectedItem(null)}
            className="flex items-center text-blue-600"
          >
            <ChevronLeft className="mr-1 h-5 w-5" />
            Back
          </button>

          <h2 className="mr-8 flex-1 text-center text-base font-medium">
            {selectedItem?.label?.length > 30
              ? textTruncate(selectedItem.label, 30)
              : selectedItem?.label}
          </h2>

          <button onClick={() => setSelectedItem(null)}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <button className="w-full border-b p-4 text-left">Shop All</button>
          {selectedItem?.subItems?.map((subItem) => (
            <button key={subItem.key} className="w-full border-b p-4 text-left">
              {subItem.label}
            </button>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence key={selectedCategory?.key || "category-menu"} mode="wait">
      <div
        className={cn(
          "fixed left-0 top-0 z-[9999] h-screen w-full bg-white transition-all duration-500 ease-in-out",
          show ? "translate-x-0" : "translate-x-[-100vw]",
        )}
      >
        {selectedItem
          ? renderSubcategoryMenu()
          : selectedCategory
            ? renderCategoryMenu()
            : renderMainMenu()}
      </div>
    </AnimatePresence>
  );
}
