import React, { use } from "react";
import Tab from "./Tab";

const ToolsSection = ({ dataPromise }) => {
  const data = use(dataPromise);
  console.log(data);

  return (
    <div className="container mx-auto my-30">
      {/* header */}
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Premium Digital Tools</h2>
        <p className="text-lg text-gray-600 mb-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* btn tab */}
      <Tab />
    </div>
  );
};

export default ToolsSection;
