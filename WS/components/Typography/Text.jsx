import React from "react";

const defaultClasses = "font-sans text-inherit";

const Texts = {
  body: (children, center, isBackgroundDark) => (
    <p
      className={`${defaultClasses} my-4 text-${
        center ? "center" : "left"
      } text-sm xl:text-xl text-${
        isBackgroundDark ? "neutral" : "black"
      } print:my-1`}
    >
      {children}
    </p>
  ),
  emphasize: (children, center, isBackgroundDark) => (
    <p
      className={`${defaultClasses} text-${
        center ? "center" : "left"
      } text-sm xl:text-xl text-${isBackgroundDark ? "neutral" : "black"}`}
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
const firstCharacterUpperCase = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

const Text = ({ type, children, center, isBackgroundDark, capitalized }) => {
  children = capitalized ? firstCharacterUpperCase(children) : children;
  return type
    ? Texts[type](children, center, isBackgroundDark)
    : Texts.body(children, center);
};

export default Text;
