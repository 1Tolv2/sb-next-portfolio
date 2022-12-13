import React from "react";
import IconWithText from "../block-components/IconWithText";
import Heading from "../block-components/Typography/Heading";
import Preamble from "../block-components/Typography/Preamble";
import Text from "../block-components/Typography/Text";

const ImageTextSideBySide = ({ blok }) => {
  console.log("BLOK", blok);
  return (
    <div
      className={`w-full h-fit flex flex-col items-center md:flex-row${
        blok?.invert_order ? "-reverse" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center h-fit w-full mx-auto mb-10 md:mb-0">
        <div className="relative mx-auto h-fit w-3/4">
          <Preamble>{blok?.preamble}</Preamble>
          <Heading type="h2">{blok?.heading}</Heading>
          <Text>{blok?.text}</Text>
          <div className="w-full mt-5 md:mt-10">
            <Heading type="h3">My Skills:</Heading>
            <ul className="flex flex-wrap justify-evenly md:mt-4">
              <li className="mt-2">
                <IconWithText icon="next" />
              </li>
              <li className="mt-2">
                <IconWithText icon="react" />
              </li>
              <li className="mt-2">
                <IconWithText icon="typescript" />
              </li>
              <li className="mt-2">
                <IconWithText icon="node" />
              </li>
              <li className="mt-2">
                <IconWithText icon="postgresql" />
              </li>
              <li className="mt-2">
                <IconWithText icon="mongodb" />
              </li>
              <li className="mt-2">
                <IconWithText icon="csharp" />
              </li>
              <li className="mt-2">
                <IconWithText icon="storyblok" />
              </li>
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
