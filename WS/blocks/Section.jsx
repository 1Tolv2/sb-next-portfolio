import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Section = ({ blok, children }) => {
  return (
    <div
      className={`bg-${blok?.background_color} w-screen min-h-screen py-10 px-4 md:px-10 lg:px-32 flex flex-col-reverse md:flex-row justify-center items-center`}
      {...storyblokEditable(blok)}
    >
      {children}
    </div>
  );
};

export default Section;
