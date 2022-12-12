import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Section = ({ blok, children }) => {
  return (
    <div
      className="w-screen h-screen px-4 md:px-32 flex flex-col-reverse md:flex-row justify-center align-center"
      {...storyblokEditable(blok)}
    >
      {children}
    </div>
  );
};

export default Section;
