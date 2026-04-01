import React from "react";

const WorkflowSection = () => {
  return (
    <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 py-16  md:py-30 px-2">
        {/* header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-[40px] font-extrabold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-sm md:text-[16px] text-gray-300 ">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>
        {/* btn */}
        <div className="space-y-3">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button className="btn rounded-full font-bold ">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                {" "}
                Explore Products{" "}
              </span>
            </button>
            <button className="btn rounded-full font-bold bg-transparent text-white border border-gray-400">
              View Pricing
            </button>
          </div>
          <p className="text-sm md:text-[16px] text-gray-300 text-center">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
