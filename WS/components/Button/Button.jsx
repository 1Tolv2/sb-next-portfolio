import React from "react";

const Button = ({ type, children }) => {
  return type === "ghost" ? (
    <button className="" onClick={() => console.log("Clicked")}>
      {children}
    </button>
  ) : (
    <button
      className="flex justify-center items-center text-neutral bg-primary-main w-fit px-14 py-3 rounded"
      onClick={() => console.log("Clicked")}
    >
      {children}
    </button>
  );
};

export default Button;
