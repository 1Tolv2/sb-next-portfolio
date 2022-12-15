import React from "react";
import IconWithText from "../components/IconWithText";
import Heading from "../components/Typography/Heading";
import Preamble from "../components/Typography/Preamble";
import Text from "../components/Typography/Text";
import { StoryblokComponent } from "@storyblok/react";

const ImageTextSideBySide = ({ blok }) => {
  const avatar = blok?.image?.[0];
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

          <Text isBackgroundDark={isBgColorDark}>{blok?.text}</Text>
          <div className="w-full mt-5 md:mt-10">
            <Heading type="h3" isBackgroundDark={isBgColorDark}>
              My Skills:
            </Heading>
            <ul className="grid grid-cols-3 xl:grid-cols-4 gap-2 md:mt-4">
              {blok?.skills?.map((skill) => {
                return (
                  <li>
                    <IconWithText icon={skill} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {blok?.image?.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} />;
      })}
    </div>
  );
};

export default ImageTextSideBySide;
