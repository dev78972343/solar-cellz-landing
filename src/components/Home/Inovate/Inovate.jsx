import { motion } from "motion/react";
import { Bell, Heart, Plus, Star } from "lucide-react";
import { AvatarGroup } from "@/components/ui/avatarGroup";
import avatar1 from "@/assets/images/hero/user-avatar-1.jpg";
import avatar2 from "@/assets/images/hero/user-avatar-2.jpg";
import avatar3 from "@/assets/images/hero/user-avatar-3.jpg";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";

// Static data for AvatarGroup
const users = [
  {
    key: 1,
    name: "Leroy Alvarez",
    image: avatar1,
  },
  {
    key: 2,
    name: "Henry Hopkins",
    image: avatar2,
  },
  {
    key: 3,
    name: "Reginald Caldwell",
    image: avatar3,
  },
];

const bars = [
  { count: "50%" },
  { count: "80%" },
  { count: "70%" },
  { count: "60%" },
  { count: "40%" },
  { count: "50%" },
  // { count: "70%" },
];

const Inovate = () => {
  return (
    <ResponsiveContainer>
      <div className="bg-white px-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:-mb-6">
          Innovate & Integrate <br /> for Your Work
        </h1>

        <motion.div
          variants={slideUpParentVariants(1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-6"
        >
          {/* Left Section */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* Active Users */}
            <motion.div
              variants={slideUpChildVariants}
              className="rounded-xl bg-blue-300 p-4 shadow"
            >
              <p className="text-lg font-bold text-black">1M+</p>
              <p className="text-sm text-gray-700">Active users worldwide</p>
              <div className="mt-4 flex items-start space-x-2">
                <div className="w-fit rounded-full bg-white p-2">
                  <AvatarGroup
                    users={users}
                    className={{
                      root: "space-x-0",
                      avatar: "h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9",
                    }}
                  />
                </div>
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white">
                  <Heart className="size-3" />
                </div>
              </div>
            </motion.div>
            {/* New Project */}
            <motion.div
              variants={slideUpChildVariants}
              className="flex items-center justify-between rounded-full bg-yellow-100 px-4 py-3 shadow"
            >
              <p className="font-bold text-gray-700">New Project</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                <Plus className="text-white/80" />
              </div>
            </motion.div>
            {/* Active Users */}
            <motion.div
              variants={slideUpChildVariants}
              className="flex flex-col rounded-xl bg-fuchsia-400 p-4 shadow"
            >
              <div className="flex w-20 items-center justify-center self-end rounded-full bg-white py-1.5">
                <Bell className="size-5" />
              </div>
              <p className="text-lg font-bold text-black">93%</p>
              <p className="text-sm text-gray-700">Average Completion</p>
              <div className="mt-4 flex gap-3">
                {bars.map((bar, index) => (
                  <div
                    key={index}
                    className="relative h-20 w-3.5 overflow-hidden rounded-full bg-gray-300"
                  >
                    <div
                      style={{ height: bar.count }}
                      className="absolute bottom-0 w-3.5 overflow-hidden rounded-full bg-white"
                    ></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/*  Center Section */}
          <motion.div
            variants={slideUpChildVariants}
            className="col-span-1 lg:col-span-4 lg:grid lg:grid-rows-12"
          >
            <div className="relative h-[360px] rounded-xl bg-gray-100 lg:row-start-3 lg:row-end-12">
              <img
                src={"https://picsum.photos/200/300"}
                alt="Team Management"
                className="size-full rounded-xl object-cover object-center"
              />
              <p className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-gray-800 shadow">
                Management
              </p>
              <p className="absolute bottom-0 left-0 w-fit rounded-tr-full bg-yellow-100 px-6 py-4 text-xl font-bold text-gray-800 shadow">
                Improving With System integration
              </p>
            </div>
          </motion.div>

          {/* Right  Section */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* Image */}
            <motion.div
              variants={slideUpChildVariants}
              className="relative overflow-hidden rounded-xl bg-gray-100"
            >
              <img
                src={"https://picsum.photos/200/300"}
                alt="Team Management"
                className="h-32 w-full object-cover"
              />
              <div className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
                <Star />
              </div>
              <p className="absolute bottom-4 left-4 rounded-full bg-black px-3 py-2 text-white/90 shadow">
                New Task
              </p>
            </motion.div>
            {/* Get Started */}
            <motion.div
              variants={slideUpChildVariants}
              className="rounded-xl bg-blue-200 p-6 shadow"
            >
              <p className="text-lg font-bold text-black">1000+</p>
              <p className="text-sm text-gray-700">Customer Reviews</p>
              <div className="mt-4 flex items-start justify-end space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-white stroke-white" />
                ))}
              </div>
            </motion.div>
            {/* Right Bottom Section */}

            <motion.div
              variants={slideUpChildVariants}
              className="col-span-1 flex flex-col space-y-4"
            >
              <div className="rounded-xl bg-yellow-300 p-4 shadow">
                <p>Experiance more Integrate growth</p>
                <button className="mt-5 w-full text-nowrap rounded-3xl bg-gray-900 py-2 font-semibold text-white">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ResponsiveContainer>
  );
};

export default Inovate;
