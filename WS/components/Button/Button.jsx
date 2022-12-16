import React from "react";

const Button = ({ type, children, event }) => {
  return type === "ghost" ? (
    <button className="" onClick={event}>
      {children}
    </button>
  ) : (
    <button
      className="flex justify-center items-center text-neutral bg-primary-main w-fit px-14 py-3 rounded"
      onClick={event}
    >
      {children}
    </button>
  );
};

export default Button;
