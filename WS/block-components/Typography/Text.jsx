import React from "react";

const defaultClasses = "font-sans text-inherit";

const Texts = {
  body: (children, center, isBackgroundDark) => (
    <p
      className={`${defaultClasses} my-4 text-${
        center ? "center" : "left"
      } text-sm lg:text-xl text-${isBackgroundDark ? "neutral" : "black"}`}
    >
      {children}
    </p>
  ),
  emphasize: (children, center, isBackgroundDark) => (
    <p
      className={`${defaultClasses} text-${
        center ? "center" : "left"
      } text-base lg:text-xl text-${isBackgroundDark ? "neutral" : "black"}`}
    >
      {children}
    </p>
  ),
  emphasizeBig: (children, center, isBackgroundDark) => (
    <p
      className={`${defaultClasses} text-${
        center ? "center" : "left"
      } text-xl lg:text-2xl text-${
        isBackgroundDark ? "neutral" : "primary-main"
      }`}
    >
      {children}
    </p>
  ),
  tags: (children, center, isBackgroundDark) => (
    <p
      className={`${defaultClasses} font-serif mt-1.5 md:my-3 text-${
        center ? "center" : "left"
      } text-sm font-semibold lg:text-base text-${
        isBackgroundDark ? "neutral" : "primary-light"
      }`}
    >
      {children}
    </p>
  ),
};

const Text = ({ type, children, center, isBackgroundDark }) => {
  return type
    ? Texts[type](children, center, isBackgroundDark)
    : Texts.body(children, center);
};

export default Text;
