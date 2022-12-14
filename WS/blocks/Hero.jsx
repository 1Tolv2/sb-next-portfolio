import React from "react";
import AccentLine from "../block-components/AccentLine";
import Button from "../block-components/Button";
import Heading from "../block-components/Typography/Heading";
import Text from "../block-components/Typography/Text";

const Hero = ({ blok }) => {
  const avatar = blok?.image?.[0];
  const bgColor = blok?.body?.[0]?.background_color;
  const isBgColorDark =
    bgColor !== "neutral" &&
    bgColor !== "white" &&
    typeof bgColor !== "undefined";
  console.log("IS", isBgColorDark);
  return (
    <>
      <div className="flex flex-col justify-center items-start w-full md:h-full max-w-4xl">
        <div className="h-fit w-full md:w-fit lg:h-auto lg:w-3/4 xl:max-w-4xl">
          <Heading type="h1" isBackgroundDark={isBgColorDark}>
            {blok?.title?.toUpperCase()}
          </Heading>
          <div className="relative z-10 mix-blend-darken w-full lg:w-screen md:max-w-150">
            <AccentLine />
          </div>
          <Heading type="h2" isBackgroundDark={isBgColorDark}>
            {blok?.preamble}
          </Heading>
        </div>
        <div className="flex w-full justify-evenly md:justify-start md:flex-col lg:flex-row lg:my-4 items-center">
          <div className="lg:mr-28 my-4 lg:mb-auto ">
            <Button>
              <Text type="emphasize" isBackgroundDark={true}>
                View CV
              </Text>
            </Button>
          </div>
          <Text isBackgroundDark={isBgColorDark}>{blok?.email?.email}</Text>
        </div>
      </div>
      <div className="relative lg:bottom-16 flex md:justify-center self-center w-full h-96 lg:max-w-3xl lg:h-100 truncate">
        <div className="avatar_bg relative left-0 lg:top-32 flex justify-center items-center bg-secondary-main">
          <div
            className={`h-fit w-fit absolute lg:${
              (avatar?.y_axis > 0 ? "top-" : "bottom") + avatar?.y_axis
            } lg:${(avatar?.x_axis > 0 ? "right-" : "left") + avatar?.x_axis}`}
          >
            <img
              src={avatar?.image_file?.[0]?.filename}
              alt={avatar?.image_file?.[0]?.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
