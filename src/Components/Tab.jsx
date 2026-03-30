import React from "react";

const Tab = () => {
  return (
    <div className="container mx-auto ">
      <div className="w-full flex justify-center mb-10">
        <div className="tabs tabs-box  bg-white border-2 border-gray-100 p-2 rounded-full w-fit">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-lg h-12 px-10 shadow-md rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white transition-all duration-300"
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-lg h-12 px-10 shadow-md rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white transition-all duration-300"
            aria-label="Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Tab;
