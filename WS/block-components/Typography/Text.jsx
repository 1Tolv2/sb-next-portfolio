import React from "react";

const defaultClasses = "font-sans text-inherit";

const Texts = {
  body: (children, center) => (
    <p
      className={`${defaultClasses} text-${
        center ? "center" : "left"
      } text-sm lg:text-xl`}
    >
      {children}
    </p>
  ),
  emphasize: (children, center) => (
    <p
      className={`${defaultClasses} text-${
        center ? "center" : "left"
      } text-base lg:text-xl`}
    >
      {children}
    </p>
  ),
  emphasizeBig: (children, center) => (
    <p
      className={`${defaultClasses} text-${
        center ? "center" : "left"
      } text-xl lg:text-2xl`}
    >
      {children}
    </p>
  ),
};

const Text = ({ type, children, center }) => {
  return type ? Texts[type](children, center) : Texts.body(children, center);
};

export default Text;
