import React, { useState } from "react";
import Button from "./Button/Button";
import Heading from "./Typography/Heading";
import Text from "./Typography/Text";

const renderTab = (activeTab) => {
  switch (activeTab) {
    case "personal-letter":
      return (
        <div id="personal-letter">
          <Heading type="h2">Personal Letter</Heading>
        </div>
      );
    default:
      return (
        <div id="cv">
          <Heading type="h2">CV</Heading>
        </div>
      );
  }
};
const CoverModal = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("cv");
  console.log("BLOK", blok);

  const firstCharacterUpperCase = (string) => {
    return (string[0].toUpperCase() + string.substring(1)).replace("-", " ");
  };
  return (
    <div className="fixed z-[100] top-0 left-0 w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit w-[calc(100vw-20px)] lg:w-[calc(100vw-100px)] bg-white p-24">
        <div className="absolute top-10 right-10">
          <Button event={() => console.log("Clicked")}>Print</Button>
        </div>
        <ul className="flex">
          {blok?.map((item) => {
            return (
              <li
                onClick={() => setActiveTab(item?.component)}
                className={`mr-5 p-3 cursor-pointer border-primary-light ${
                  item?.component === activeTab && "border-b-4"
                }`}
              >
                <Text type="emphasizeBig">
                  {firstCharacterUpperCase(item?.component)}
                </Text>
              </li>
            );
          })}
        </ul>
        <div className="px-3 py-5">{renderTab(activeTab)}</div>
      </div>
      <div className="absolute -z-10 top-0 left-0 h-full w-full backdrop-blur bg-transparent" />
    </div>
  );
};

export default CoverModal;
