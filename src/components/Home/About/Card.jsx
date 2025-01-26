import { ArrowRight, ChevronRightIcon } from "lucide-react";
import icons from "./constants";
import {
    slideUpChildVariants,
  } from "@/utils/sharedMotionVariants";
  import { motion } from "motion/react";

const Card = ({ card }) => {
    return (
      <motion.div
        variants={slideUpChildVariants}
        className="relative group/card overflow-hidden flex w-full max-w-[350px] flex-col gap-6 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Icon Wrapper */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light-blue-500 text-white shadow-md">
          {icons[card.id]}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600">{card.description}</p>
        
        {/* Features List */}
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {card.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <ChevronRightIcon className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="relative mt-4 flex items-center justify-between gap-2 group overflow-hidden rounded-full border border-gray-300 p-3 px-6 text-gray-800 transition-all duration-300 hover:text-white">
          {/* Progress Effect */}
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-[-100%]"></span>
          <span className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
            {card.button.text}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
  
        {/* Animated Bottom Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-full translate-x-[-100%] bg-gradient-to-r from-dark-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover/card:translate-x-0"></div>
      </motion.div>
    );
};

export default Card;  