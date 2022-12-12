import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Section = ({ blok, children }) => {
  return (
    <div
      className="w-screen h-screen px-32 flex justify-center align-center"
      {...storyblokEditable(blok)}
    >
      {children}
    </div>
  );
};

export default Section;
