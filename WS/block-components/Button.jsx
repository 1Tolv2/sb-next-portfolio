import React from "react";

const Button = ({ type, children }) => {
  return type === "ghost" ? (
    <div className="" onClick={() => console.log("Clicked")}>
      {children}
    </div>
  ) : (
    <div
      className="flex justify-center items-center text-neutral bg-primary-main w-fit px-16 py-4 rounded"
      onClick={() => console.log("Clicked")}
    >
      {children}
    </div>
  );
};

export default Button;
