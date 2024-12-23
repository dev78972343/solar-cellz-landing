import React from "react";

const Inovate = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Innovate & Integrate for Your Work
      </h1>
      <div className="grid md:grid-cols-3 gap-6 items-center">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          {/* Active Users */}
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <p className="text-blue-700 font-bold text-sm">1M+</p>
            <p className="text-gray-700">Active users worldwide</p>
          </div>
          {/* New Project */}
          <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center">
            <p className="bg-yellow-500 text-white text-sm px-2 py-1 rounded-full mr-4">
              New Project
            </p>
            <p className="text-gray-700 font-bold">93% Average Completion</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src=""
              alt="Team Management"
              className="object-cover w-full h-64"
            />
            <p className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full shadow">
              Management
            </p>
          </div>
          {/* Caption */}
          <p className="absolute bottom-0 left-0 bg-yellow-400 text-gray-800 font-bold px-4 py-2 rounded-tr-lg">
            Improving with system integration
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4">
          {/* Task & Reviews */}
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow flex items-center">
              <img
                src=""
                alt="New Task"
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="text-gray-700 font-bold">New Task</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow">
              <p className="text-blue-700 font-bold text-sm">1,000+</p>
              <p className="text-gray-700">Customer reviews</p>
            </div>
          </div>

          {/* Get Started */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow text-center">
            <p className="text-gray-700">
              Experience more integrative growth as our digital tools adapt to
              every project need.
            </p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inovate;
