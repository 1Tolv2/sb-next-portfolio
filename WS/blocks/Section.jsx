import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Section = ({ blok, children }) => {
  console.log("SECTION", blok);
  return (
    <div
      id={blok?.section_name_id}
      className={`-scroll-mt-1 bg-${
        blok?.background_color
      } w-screen min-h-screen py-10 px-4 md:px-10 lg:p-32 flex flex-col-reverse md:flex-row justify-center ${
        blok?.center_content && "items-center"
      }`}
      {...storyblokEditable(blok)}
    >
      {children}
    </div>
  );
};

export default Section;
