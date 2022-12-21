import React from "react";
import Image from "next/image";

const Avatar = ({ blok }) => {
  return (
    <div className="relative lg:bottom-16 flex md:justify-center self-center w-full h-96 lg:max-w-3xl lg:h-100 truncate">
      <div className="avatar_bg relative left-0 lg:top-32 flex justify-center items-center bg-secondary-main">
        <div
          className={`h-[90%] w-full absolute lg:${
            (blok?.y_axis > 0 ? "top-" : "bottom") + blok?.y_axis
          } lg:${(blok?.x_axis > 0 ? "right-" : "left") + blok?.x_axis}`}
        >
          <Image
            fill
            src={blok?.avatar_image?.filename}
            alt={blok?.avatar_image?.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
