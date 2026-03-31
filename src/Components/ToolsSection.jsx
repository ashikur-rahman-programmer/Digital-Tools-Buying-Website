import React, { use } from "react";
import Tab from "./Tab";
import ProductCard from "./ProductCard";

const ToolsSection = ({ dataPromise }) => {
  const data = use(dataPromise);

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

      {/* all cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {/* <ProductCard data={data} /> */}
      </div>
    </div>
  );
};

export default ToolsSection;
