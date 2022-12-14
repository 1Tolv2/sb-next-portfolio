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
      }`}
    >
      {children}
    </h2>
  ),
  h3: (children, isBackgroundDark) => (
    <h3
      className={`font-sans font-medium my-4 text-xl md:text-2xl lg:text-2xl xl:text-4xl text-${
        isBackgroundDark ? "neutral" : "black"
      }`}
    >
      {children}
    </h3>
  ),
};

const Heading = ({ type, children, isBackgroundDark }) => {
  return Headings[type](children, isBackgroundDark);
};

export default Heading;
