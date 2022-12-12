import React from "react";

const defaultClasses = "font-sans text-inherit";

const Texts = {
  body: (children) => (
    <p className={`${defaultClasses} text-sm lg:text-xl`}>{children}</p>
  ),
  emphasize: (children) => (
    <p className={`${defaultClasses} text-base lg:text-xl`}>{children}</p>
  ),
  emphasizeBig: (children) => (
    <p className={`${defaultClasses} text-xl lg:text-2xl`}>{children}</p>
  ),
};

const Text = ({ type, children }) => {
  return type ? Texts[type](children) : Texts.body(children);
};

export default Text;
