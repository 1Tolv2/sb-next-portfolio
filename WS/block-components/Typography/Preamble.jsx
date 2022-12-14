import React from "react";

const Preamble = ({ children, isBackgroundDark }) => {
  return (
    <div
      id={children}
      className={`absolute -rotate-90 top-16 -left-24 mt-1 pb-4 md:top-36 md:-left-44 md:mt-0.5 flex items-center text-${
        isBackgroundDark ? "neutral" : "primary-light"
      }`}
    >
      <div
        className={`h-px w-20 md:w-56 bg-${
          isBackgroundDark ? "neutral" : "primary-light"
        }`}
      />
      <div className="ml-9">{children}</div>
    </div>
  );
};

export default Preamble;
