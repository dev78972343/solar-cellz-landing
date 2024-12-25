import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import avatar1 from "@/assets/images/hero/user-avatar-1.jpg";
import avatar2 from "@/assets/images/hero/user-avatar-2.jpg";
import avatar3 from "@/assets/images/hero/user-avatar-3.jpg";
import { AvatarGroup } from "@/components/ui/avatarGroup";
import { Bell, Heart, Plus, Search, Star, User, UserRound } from "lucide-react";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

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
    <div className="bg-white p-8">
      <h1 className="text-5xl font-bold text-center mb-6 lg:-mb-6">
        Innovate & Integrate <br/> for Your Work
      </h1>
     
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Active Users */}
          <div className="bg-blue-300 p-4 rounded-xl shadow">
            <p className="text-black font-bold text-lg">1M+</p>
            <p className="text-gray-700 text-sm">Active users worldwide</p>
            <div className="flex items-start space-x-2 mt-4">
              <div className="w-fit bg-white rounded-full p-2">
              <AvatarGroup users={users} className={{root: "space-x-0", avatar: "h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9" }}/>
              </div>
              <div className="bg-white flex shrink-0 items-center justify-center rounded-full size-6">
                <Heart className="size-3"/>
              </div>

            </div>
          </div>
          {/* New Project */}
          <div className="flex justify-between items-center bg-yellow-100 py-3 px-4 rounded-full shadow">
            <p className="text-gray-700 font-bold">New Project</p>
            <div className="rounded-full bg-black flex items-center justify-center w-8 h-8">
              <Plus className="text-white/80"/>
            </div>
          </div>
           {/* Active Users */}
           <div className="bg-fuchsia-400 p-4 rounded-xl shadow flex flex-col">
            <div className="self-end bg-white w-20 flex items-center justify-center rounded-full py-1.5 ">
              <Bell className="size-5"/>
            </div>
            <p className="text-black font-bold text-lg">93%</p>
            <p className="text-gray-700 text-sm">Average Completion</p>
            <div className="flex gap-3 mt-4">
              {bars.map((bar, index) => (
                <div key={index} className="overflow-hidden h-20 w-3.5 rounded-full bg-gray-300 relative">
                  <div
                    style={{ height: bar.count }}
                    className="overflow-hidden w-3.5 rounded-full bg-white absolute bottom-0"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  Center Section */}
       <div className="col-span-1 lg:col-span-4 lg:grid lg:grid-rows-12">
        <div className="lg:row-start-3 lg:row-end-12 relative bg-gray-100 rounded-xl h-[360px]">
            <img
              src={"https://picsum.photos/200/300"}
              alt="Team Management"
              className="object-cover object-center size-full rounded-xl"
            />
            <p className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full shadow">
              Management
            </p>
            <p className="absolute bottom-0 left-0 bg-yellow-100 text-xl font-bold text-gray-800 px-6 py-4 w-fit rounded-tr-full shadow">
              Improving With System integration
            </p>
        </div>
        </div>

        {/* Right  Section */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* Image */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={"https://picsum.photos/200/300"}
                alt="Team Management"
                className="object-cover w-full h-32"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
              <Star/>
              </div>
              <p className="absolute bottom-4 left-4 bg-black text-white/90 px-3 py-2 rounded-full shadow">
              New Task
              </p>
            </div>
            {/* Get Started */}
            <div className="bg-blue-200 p-6 rounded-xl shadow">
              <p className="text-black font-bold text-lg">
              1000+
              </p>
              <p className="text-gray-700 text-sm">Customer Reviews</p>
              <div className="justify-end flex items-start space-x-1 mt-4"> 
                {
                  [...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-white stroke-white"
                    />
                  ))
                }
              </div>
            </div>
        {/* Right Bottom Section */}
       
        <div className="col-span-1 flex flex-col space-y-4">
          <div className="bg-yellow-300 p-4 rounded-xl shadow">
            <p>Experiance more Integrate growth</p>
            <button className="mt-5 rounded-3xl bg-gray-900 w-full py-2 text-white text-nowrap font-semibold">
              Get Started
            </button>
          </div>
        </div>
          </div>
      </div>
    </div>
    </ResponsiveContainer>
  );
};

export default Inovate;
