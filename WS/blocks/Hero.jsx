import React from "react";
import AccentLine from "../components/AccentLine";
import Button from "../components/Button/Button";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";
import { StoryblokComponent } from "@storyblok/react";

const Hero = ({ blok }) => {
  const bgColor = blok?.block_config?.[0]?.background_color;
  const isBgColorDark =
    bgColor !== "neutral" &&
    bgColor !== "white" &&
    typeof bgColor !== "undefined";
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
      {blok?.image?.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} />;
      })}
    </>
  );
};

export default Hero;
