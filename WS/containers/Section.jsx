import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Section = ({ blok, children, pageType, isFirstSection }) => {
  return (
    <div
      id={blok?.section_name_id}
      className={`${isFirstSection ? "lg:snap-start" : "lg:snap-center"} ${
        pageType === "sub-page" && "pt-20 md:pt-20 lg:pt-10"
      } scroll-mt-28 md:scroll-mt-32 bg-${blok?.background_color}`}
    >
      <div
        className={`max-w-[1920px] mx-auto w-screen min-h-screen py-10 px-4 md:px-10 lg:p-32 flex flex-col-reverse md:flex-row justify-center ${
          blok?.center_content && "items-center"
        }`}
        {...storyblokEditable(blok)}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
