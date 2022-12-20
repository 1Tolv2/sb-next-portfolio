import React, { useState } from "react";
import { StoryblokComponent } from "@storyblok/react";
import Button from "./Button/Button";
import Text from "./Typography/Text";

const CoverModal = ({ blok, closeModal }) => {
  const [activeTab, setActiveTab] = useState("cv");
  return (
    <div className="fixed z-[100] top-0 left-0 w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full w-[calc(100vw-20px)] lg:w-[calc(100vw-100px)] bg-white pt-10 pb-32">
        <div className="flex justify-between px-4 lg:p-24 lg:pb-0">
          <ul className="flex print:hidden">
            {blok?.map((item) => {
              return (
                item?.component !== "contact-info" && (
                  <li
                    key={item._uid}
                    onClick={() => setActiveTab(item?.component)}
                    className={`mr-5 p-3 cursor-pointer border-primary-light ${
                      item?.component === activeTab && "border-b-4"
                    }`}
                  >
                    <Text capitalized type="emphasizeBig">
                      {item?.component.replace("-", " ")}
                    </Text>
                  </li>
                )
              );
            })}
          </ul>
          <div className="fixed bottom-5 right-5 md:static h-fit shadow-lg print:hidden">
            <Button fullWidth event={() => window.print()}>
              Download
            </Button>
          </div>
        </div>
        <div className=" py-5 max-w-[1920px] overflow-y-scroll h-full px-4 lg:p-24 lg:pt-10">
          <StoryblokComponent
            contactInfo={blok?.find(
              (nestedBlok) => nestedBlok.component === "contact-info"
            )}
            blok={blok?.find(
              (nestedBlok) => nestedBlok.component === activeTab
            )}
          />
        </div>
      </div>
      <div
        onClick={closeModal}
        className="absolute -z-10 top-0 left-0 h-full w-full backdrop-blur bg-transparent"
      />
    </div>
  );
};

export default CoverModal;
