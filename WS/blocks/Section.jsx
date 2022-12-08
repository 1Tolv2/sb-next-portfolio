import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Section = ({ blok, children }) => {
  return (
    <div
      style={{ backgroundColor: "green" }}
      className="h-screen w-screen"
      {...storyblokEditable(blok)}
    >
      {children}
    </div>
  );
};

export default Section;
