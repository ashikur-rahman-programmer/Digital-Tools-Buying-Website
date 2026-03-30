import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
