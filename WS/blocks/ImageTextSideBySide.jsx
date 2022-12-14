import React from "react";
import IconWithText from "../block-components/IconWithText";
import Heading from "../block-components/Typography/Heading";
import Preamble from "../block-components/Typography/Preamble";
import Text from "../block-components/Typography/Text";

const ImageTextSideBySide = ({ blok }) => {
  const bgColor = blok?.body?.[0]?.background_color;
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
      <div className="flex items-center relative text-center w-full max-w-2xl mx-auto overflow-y-clip">
        <div className="w-full relative mx-auto overflow-y-clip">
          <svg
            className="w-full h-auto"
            viewBox="0 0 250 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              className={`fill-${blok.image_secondary_bg_color}`}
              cx="126.981"
              cy="124.64"
              rx="61.0591"
              ry="124.64"
            />
            <ellipse
              className={`fill-${blok.image_main_bg_color}`}
              cx="201.009"
              cy="171.83"
              rx="48.9914"
              ry="77.4496"
            />
            <ellipse
              className={`fill-${blok.image_main_bg_color}`}
              cx="50.9726"
              cy="148.055"
              rx="50.9726"
              ry="101.225"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSideBySide;
