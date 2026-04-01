import { Check } from "lucide-react";
import React, { use } from "react";

const TransparentPricing = ({ pricePromise }) => {
  const priceData = use(pricePromise);

  return (
    <div className="container mx-auto space-y-10 my-30 px-2">
      {/* header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-sm md:text-lg text-gray-600 mb-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {priceData.map((item) => (
          <div
            key={item.id}
            className={`relative card max-w-96 shadow-md rounded-xl  ${item.isPopular ? "bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white " : "bg-gray-100 "}`}
          >
            <div className="card-body">
              <span
                className={
                  item.isPopular &&
                  "absolute -top-4 left-1/2 -translate-x-1/2 badge text-lg font-bold bg-orange-100 py-4 rounded-full text-orange-600"
                }
              >
                {item.isPopular && item.tag}
              </span>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p
                  className={
                    item.isPopular
                      ? "text-lg text-gray-300 line-clamp-2"
                      : "text-lg text-gray-500 line-clamp-2"
                  }
                >
                  {item.description}
                </p>
                <span>
                  <strong className="text-2xl">${item.price}</strong>/
                  <span
                    className={
                      item.isPopular
                        ? "text-lg text-gray-300"
                        : "text-lg text-gray-500"
                    }
                  >
                    {item.period}
                  </span>
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                {item.features.map((list, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    <span>{list}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  className={`${item.isPopular ? "w-full btn bg-white rounded-full " : "w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"}`}
                >
                  <span
                    className={
                      item.isPopular &&
                      "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
                    }
                  >
                    {item.buttonText}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default TransparentPricing;
