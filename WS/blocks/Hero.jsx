import React from "react";
import AccentLine from "../block-components/AccentLine";
import Button from "../block-components/Button";
import Heading from "../block-components/Typography/Heading";
import Text from "../block-components/Typography/Text";

const Hero = ({ blok }) => {
  console.log("BLOK", blok);

  const avatar = blok?.image?.[0];
  console.log("AVATAR", avatar);

  return (
    <>
      <div className="flex flex-col justify-center items-start w-full h-full max-w-4xl">
        <div className="w-3/4 max-w-4xl">
          <Heading type="h1">{blok?.heading?.toUpperCase()}</Heading>
          <AccentLine />
          <Heading type="h2">{blok?.preamble}</Heading>
        </div>
        <div className="flex my-4 items-center">
          <div className="mr-28">
            <Button>
              <Text type="emphasizeBig">View CV</Text>
            </Button>
          </div>
          <Text>{blok?.email?.email}</Text>
        </div>
      </div>
      <div className="flex justify-center self-center w-full max-w-3xl h-100 truncate">
        <div className="avatar_bg relative left-0 top-32 flex justify-center items-center bg-secondary-main">
          <div
            className={`h-fit w-fit absolute ${
              (avatar?.y_axis > 0 ? "top-" : "bottom") + avatar?.y_axis
            } ${(avatar?.x_axis > 0 ? "right-" : "left") + avatar?.x_axis}`}
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
