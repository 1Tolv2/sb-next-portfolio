import React from "react";
import IconWithText from "../components/IconWithText";
import Heading from "../components/Typography/Heading";
import Preamble from "../components/Typography/Preamble";
import { StoryblokComponent } from "@storyblok/react";
import RichTextRenderer from "../components/RichTextRenderer";

const ImageTextSideBySide = ({ blok }) => {
  const bgColor = blok?.block_config?.[0]?.background_color;
  const isBgColorDark =
    bgColor !== "neutral" &&
    bgColor !== "white" &&
    typeof bgColor !== "undefined";
  return (
    <div
      className={`w-full h-fit flex flex-col items-center md:flex-row${
        blok?.invert_order ? "-reverse" : ""
      }`}
    >
      <div className="w-full mx-auto mb-10 md:mb-0">
        <div className="relative mx-auto h-fit w-3/4">
          <Preamble isBackgroundDark={isBgColorDark}>{blok?.preamble}</Preamble>
          <Heading type="h2" isBackgroundDark={isBgColorDark}>
            {blok?.title}
          </Heading>
          <RichTextRenderer content={blok?.text} />
          <div className="w-full mt-5 md:mt-10">
            <Heading type="h3" isBackgroundDark={isBgColorDark}>
              {blok?.skill_title}
            </Heading>
            <ul className="grid grid-cols-3 xl:grid-cols-4 gap-2 md:mt-4">
              {blok?.skills?.map((skill, index) => {
                return (
                  <li key={index + skill}>
                    <IconWithText
                      icon={skill?.icon?.filename}
                      alt={skill?.icon?.alt}
                    >
                      {skill?.text}
                    </IconWithText>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {blok?.image?.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </div>
  );
};

export default ImageTextSideBySide;
