import { Facebook, Linkedin, Share2, Twitter, Youtube } from "lucide-react";
import {
    slideUpChildVariants,
  } from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";  
import teamImages from "./constant";
const TeamCard = ({ member, idx })=> {
    return (
      <motion.div variants={slideUpChildVariants} className="group text-center border border-gray-200 shadow-md p-4 rounded-xl bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="relative flex justify-center">
          <div className="relative size-40">
            <img
              src={teamImages[idx].image}
              alt={member.name}
              className="mx-auto mb-4 size-full rounded-full border border-gray-200"
            />
            <div className="absolute bottom-2 right-2 size-8 rounded-full bg-white p-1">
              <button className="flex h-full w-full items-center justify-center rounded-full bg-normal-blue-500 text-white hover:text-white">
                <Share2 className="size-4" />
              </button>
            </div>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/facebook shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
                <Facebook className="size-4 text-light-blue-500 group-hover/facebook:text-white" />
              </div>
              <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/twitter shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
                <Twitter className="size-4 text-light-blue-500 group-hover/twitter:text-white" />
              </div>
              <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/linkedin shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
                <Linkedin className="size-4 text-light-blue-500 group-hover/linkedin:text-white" />
              </div>
              <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/youtube shadow bg-white p-2 hover:bg-normal-blue-500 hover:text-white">
                <Youtube className="size-4 text-light-blue-500 group-hover/youtube:text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">{member.name}</p>
          <span className="text-sm text-gray-500">{member.position}</span>
        </div>
      </motion.div>
    );
  }

export default TeamCard