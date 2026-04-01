import React from "react";

const CardsSection = () => {
  return (
    <div className="container mx-auto space-y-10 my-30">
      {/* header */}
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Get Started in 3 Steps</h2>
        <p className="text-lg text-gray-600 mb-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* all cards */}
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* card 1*/}
        <div className="card bg-base-100 h-96 max-w-96 shadow-md text-center space-y-4 p-6  ">
          <div className="flex items-center justify-end ">
            <span className="py-2 px-3 text-white bg-blue-700 rounded-full">
              01
            </span>
          </div>
          <figure className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center mx-auto">
            <img
              className="w-16 h-16 object-contain"
              src="https://i.ibb.co.com/CsQ2w2SW/user.png"
              alt="user icon"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title text-2xl font-bold justify-center">
              Create Account
            </h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* card 2*/}
        <div className="card bg-base-100 h-96 max-w-96 shadow-md text-center space-y-4 p-6  ">
          <div className="flex items-center justify-end ">
            <span className="py-2 px-3 text-white bg-blue-700 rounded-full">
              02
            </span>
          </div>
          <figure className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center mx-auto">
            <img
              className="w-16 h-16 object-contain"
              src="https://i.ibb.co.com/8D2xkn1t/package.png"
              alt="Choose Products icon"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title text-2xl font-bold justify-center">
              Choose Products
            </h2>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>

        {/* card 3*/}
        <div className="card bg-base-100 h-96 max-w-96 shadow-md text-center space-y-4 p-6  ">
          <div className="flex items-center justify-end ">
            <span className="py-2 px-3 text-white bg-blue-700 rounded-full">
              03
            </span>
          </div>
          <figure className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center mx-auto">
            <img
              className="w-12 h-12 object-contain"
              src="https://i.ibb.co.com/hxxS3VnP/rocket.png"
              alt="Start Creating icon"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title text-2xl font-bold justify-center">
              Start Creating
            </h2>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
