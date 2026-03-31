import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

const ProductCard = ({ item }) => {
  console.log(item.name);

  // badge color conditional
  let badgeColor = "bg-gray-100 text-gray-600"; // Default color

  if (item.tagType === "best seller") {
    badgeColor = "bg-orange-200 text-orange-600";
  } else if (item.tagType === "popular") {
    badgeColor = "bg-purple-200 text-purple-600";
  } else if (item.tagType === "new") {
    badgeColor = "bg-blue-200 text-blue-600";
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="relative card-body space-y-4">
          {/* badge */}
          <span
            className={`absolute top-3 right-3 badge badge-xs  rounded-full p-3 text-[12px] font-semibold ${badgeColor} `}
          >
            {item.tag}
          </span>
          {/* img */}
          <figure className="w-14 h-14  bg-gray-200 rounded-full">
            <img src={item.icon} className="w-8 h-8" alt={item.name} />
          </figure>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-lg text-gray-500 line-clamp-2">
              {item.description}
            </p>
            <span className="text-xl">
              <strong className="text-xl">$29</strong>/{item.period}
            </span>
          </div>
          <ul className=" flex flex-col gap-2 text-xs">
            {item.features.map((list) => (
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>{list}</span>
              </li>
            ))}
          </ul>
          <div className="">
            <Button className="w-full">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
