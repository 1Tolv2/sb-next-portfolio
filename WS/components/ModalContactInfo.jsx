import React from "react";
import Heading from "./Typography/Heading";
import Text from "./Typography/Text";

const ModalContactInfo = ({ blok, hidden }) => {
  return (
    <div
      className={`${
        hidden === "none"
          ? "md:block print:block"
          : hidden
          ? "md:hidden print:hidden"
          : "hidden md:block print:block"
      } w-full md:w-auto print:w-full print:h-min`}
    >
      <Heading type="h4">Contact</Heading>

      <ul className="text-left">
        {blok?.map((item, index) => {
          const text = typeof item === "string" ? item : item?.text;
          return (
            <li key={item?._uid || index} className="flex items-center">
              <img
                className="w-4 mr-2 self-start pt-0.5"
                src={item?.icon?.filename}
                alt={item?.icon?.alt}
              />

              <Text type="emphasize">{text}</Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModalContactInfo;
