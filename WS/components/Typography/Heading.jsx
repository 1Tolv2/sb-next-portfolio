import React from "react";

const Headings = {
  h1: (children, isBackgroundDark) => (
    <h1
      className={`font-sans font-medium text-5xl lg:text-8xl my-3 text-${
        isBackgroundDark ? "neutral" : "black"
      }`}
    >
      {children}
    </h1>
  ),
  h2: (children, isBackgroundDark) => (
    <h2
      className={`font-serif font-medium text-4xl lg:text-6xl my-3 text-${
        isBackgroundDark ? "neutral" : "primary-main"
      } print:my-0`}
    >
      {children}
    </h2>
  ),
  h3: (children, isBackgroundDark) => (
    <h3
      className={`font-sans font-medium my-4 text-xl md:text-2xl lg:text-2xl xl:text-4xl text-${
        isBackgroundDark ? "neutral" : "black"
      } print:my-1 print:mb-1`}
    >
      {children}
    </h3>
  ),
  h4: (children, isBackgroundDark) => (
    <h4
      className={`font-sans font-bold  my-2 text-md md:text-xl lg:text-xl xl:text-2xl text-${
        isBackgroundDark ? "neutral" : "primary-main"
      } print:mb-0`}
    >
      {children}
    </h4>
  ),
};

const Heading = ({ type, children, isBackgroundDark }) => {
  type = type || "h2";
  return Headings[type](children, isBackgroundDark);
};

export default Heading;
