import React from "react";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const totalAmount = cart.reduce((sum, item) => item.price + sum, 0);

  const handlePayment = () => {
    setCart([]);
    toast.success("Payment successfully");
  };

  const handleRemove = (id) => {
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
    toast.warn("Item removed from cart");
  };

  return (
    <div className="container mx-auto">
      {/* cart cards */}
      {cart.length > 0 ? (
        <div className="p-2 space-y-6">
          <h2 className="text-4xl font-semibold">Your Cart</h2>
          <div className="grid grid-cols-1 gap-4 shadow-sm rounded-xl">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-6 m-2 md:m-5 bg-gray-50 rounded-xl p-2 md:p-5"
              >
                <div className="flex gap-6 items-center">
                  <img
                    src={item.icon}
                    className="w-8 h-8 md:w-10 md:h-10"
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[14px] md:text-[20px] font-bold">
                      {item.name}
                    </h3>
                    <span className="text-[16px] text-gray-500 font-semibold">
                      ${item.price}
                    </span>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[14px] md:text-[16px] text-[#FF3980] font-semibold btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 justify-between items-center p-5 shadow rounded-xl">
            <p className="font-bold text-2xl ">Total :</p>
            <p className="text-2xl font-extrabold">${totalAmount}</p>
          </div>
          <div>
            <Button onClick={handlePayment} className="w-full py-4 md:py-6 ">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 py-25 bg-gray-100 text-gray-500">
          <ShoppingCart className="w-16 h-16" />
          <p className="text-2xl font-bold to-gray-500">
            No cart available here!
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
