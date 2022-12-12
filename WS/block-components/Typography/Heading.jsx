import React from "react";

const Headings = {
  h1: (children) => (
    <h1 className="font-sans font-medium text-5xl lg:text-8xl leading-tight">
      {children}
    </h1>
  ),
  h2: (children) => (
    <h2 className="font-serif font-medium text-4xl text-primary-main lg:text-6xl leading-tight">
      {children}
    </h2>
  ),
  h3: (children) => (
    <h3 className="font-sans font-medium text-xl lg:text-4xl">{children}</h3>
  ),
};

const Heading = ({ type, children }) => {
  return Headings[type](children);
};

export default Heading;
