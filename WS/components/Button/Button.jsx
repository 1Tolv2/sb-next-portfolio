import React from "react";

const Button = ({ type, children, event, fullWidth }) => {
  return type === "ghost" ? (
    <button className="" onClick={event}>
      {children}
    </button>
  ) : (
    <button
      className={`flex justify-center items-center text-neutral bg-primary-main px-14 py-3 rounded ${
        fullWidth ? "w-full" : "w-full md:w-fit"
      }`}
      onClick={event}
    >
      {children}
    </button>
  );
};

export default Button;
