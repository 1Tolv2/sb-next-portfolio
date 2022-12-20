import React from "react";

const defaultClasses = "font-sans text-inherit";

const Texts = {
  body: (children, align, isBackgroundDark) => (
    <p
      className={`${defaultClasses} my-4 text-${align} text-sm xl:text-xl text-${
        isBackgroundDark ? "neutral" : "black"
      } print:mt-1 print:my-3`}
    >
      {children}
    </p>
  ),
  emphasize: (children, align, isBackgroundDark) => (
    <p
      className={`${defaultClasses} text-${align} text-sm xl:text-xl text-${
        isBackgroundDark ? "neutral" : "black"
      }`}
    >
      {children}
    </p>
  ),
  emphasizeBig: (children, align, isBackgroundDark) => (
    <p
      className={`${defaultClasses} text-${align} text-xl lg:text-2xl text-${
        isBackgroundDark ? "neutral" : "primary-main"
      }`}
    >
      {children}
    </p>
  ),
  tags: (children, align, isBackgroundDark) => (
    <p
      className={`${defaultClasses} font-serif mt-1.5 md:my-3 text-${align} text-sm font-semibold lg:text-base text-${
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

const Text = ({ type, children, isBackgroundDark, capitalized, align }) => {
  align = align ? align : "left";
  children = capitalized ? firstCharacterUpperCase(children) : children;
  return type
    ? Texts[type](children, align, isBackgroundDark)
    : Texts.body(children, align);
};

export default Text;
