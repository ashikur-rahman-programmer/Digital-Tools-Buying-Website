import React from "react";

const StateSection = () => {
  return (
    <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="container mx-auto flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat place-items-center space-y-2 m-8 lg:m-15  lg:border-r-2 lg:border-r-gray-300">
            <div className="stat-value text-6xl">50K+</div>
            <div className="stat-desc text-2xl text-gray-300">Active Users</div>
          </div>

          <div className="stat place-items-center space-y-2 m-8 lg:m-15 border-r-2 border-r-gray-300">
            <div className="stat-value text-6xl">200K+</div>
            <div className="stat-desc text-2xl text-gray-300">
              Premium Tools
            </div>
          </div>

          <div className="stat place-items-center space-y-2 m-8 lg:m-15">
            <div className="stat-value text-6xl">4.9</div>
            <div className="stat-desc text-2xl text-gray-300">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
