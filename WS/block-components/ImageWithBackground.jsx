import React from "react";

const ImageWithBackground = ({ blok }) => {
  return (
    <div
      className={`flex items-center relative text-center w-full max-w-2xl md:h-auto mx-auto ${
        blok?.clip_overflow && "truncate"
      }`}
    >
      <div className="w-full relative mx-auto overflow-y-clip">
        <img src={blok?.background_image.filename} className="w-full h-auto" />
      </div>
      <div className="flex justify-center md:items-center absolute w-full h-auto">
        <img
          className={`absolute h-72 -bottom-52 sm:${
            (blok?.y_axis > 0 ? "top-" : "bottom") + blok?.y_axis
          } sm:${(blok?.x_axis > 0 ? "right-" : "left") + blok?.x_axis}`}
          src={blok?.avatar_image?.filename}
        />
      </div>
    </div>
  );
};

export default ImageWithBackground;
