import React, { use, useState } from "react";
import ToolsSection from "./ToolsSection";
import Cart from "./Cart";

const Tab = ({ dataPromise, cart, setCart, handleAddToCart }) => {
  const data = use(dataPromise);
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="container mx-auto my-30 px-2">
      {/* header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-sm md:text-lg text-gray-600 mb-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* tab section */}
      <div className="w-full  flex justify-center mb-10 ">
        <div className="tabs tabs-box  bg-white border-2 border-gray-100 p-2 rounded-full w-fit">
          <input
            onClick={() => setActiveTab("Products")}
            type="radio"
            name="my_tabs_1"
            className="tab text-lg h-10 md:h-12 px-10 shadow-md rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white transition-all duration-300"
            aria-label="Products"
            defaultChecked
          />
          <input
            onChange={() => setActiveTab("Cart")}
            type="radio"
            name="my_tabs_1"
            className="tab text-lg h-10 md:h-12 px-10 shadow-md rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white transition-all duration-300"
            aria-label="Cart"
          />
        </div>
      </div>
      {activeTab === "Products" && (
        <ToolsSection
          data={data}
          handleAddToCart={handleAddToCart}
          cart={cart}
        />
      )}
      {activeTab === "Cart" && (
        <Cart data={data} cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default Tab;
